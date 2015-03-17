'use strict';

(function () {

    var moment = (typeof require !== "undefined" && require !== null) && !require.amd
        ? require("moment")
        : this.moment;

    /**
     * Difference between rental dates
     * @param  {string} startInstant Start date time
     * @param  {bool}   saturdays    Include Saturdays, default: false
     * @return {integer}             Difference in days
     */
    moment.fn.rentalDiff = function (startInstant, saturdays) {

        startInstant = moment(startInstant);

        var diff = 0;
        var end = this;
        var start = startInstant;
        var start_offset = start.day() - 7;
        var end_offset = end.day();
        var end_sunday = end.clone().subtract(end_offset, 'd');
        var start_sunday = start.clone().subtract(start_offset, 'd');
        var weeks = end_sunday.diff(start_sunday, 'days') / 7;

        start_offset = Math.abs(start_offset);

        if (start_offset === 7) {
            start_offset = 5;
        } else if(start_offset === 1) {
            start_offset = 0;
        } else {
            start_offset += (saturdays) ? weeks - 1 : -2;
        }

        // Exclude Saturday
        if (end_offset === 6 && !saturdays) {
            end_offset -= 1;
        }

        // Day diff
        diff = (weeks * 5) + start_offset + end_offset;

        // Floor fractions due to date time combo
        diff = Math.floor(diff);

        // Add an additional day if there is a > 24hr time offset
        if ((this.diff(start, 'minutes') % 1440) > 0) {
            diff += 1;
        }

        return diff;
    };

    /**
     * Add days to current moment time object. Saturday exluded by
     * default, but can be reintroduced
     * @param  {integer} days      Days to add
     * @param  {bool}    saturdays Include Saturdays, default: false
     * @return {object}            Moment object
     */
    moment.fn.rentalAdd = function (days, saturdays) {

        saturdays = saturdays || false;

        // Get desired week length
        var week = 5;

        // Include Saturdays
        if (saturdays) {
            week += 1;
        }

        // Add or subtract days
        var signal = (days < 0) ? - 1 : 1;

        days = Math.abs(days);

        var d = this.clone().add(Math.floor(days / week) * 7 * signal, 'd');
        var remaining = days % week;

        while (remaining) {

            d.add(signal, 'd');

            // Skip Saturdays and/or Sundays
            if (d.day() === 0 || d.day() === 6 && !saturdays) {
                continue;
            }

            remaining -= 1;
        }

        return d;
    };


    /**
     * Get rental days between end date time and start date time
     * @param  {string} startInstant Start date time
     * @param  {bool}   saturdays    Include Saturdays, default: false
     * @return {object}              Rental days total and breakdown by day, week, fourWeek
     */
    moment.fn.rentalDays = function (startInstant, saturdays) {

        saturdays = saturdays || false;

        var rentalDays = 0;
        var days = 0;
        var weeks = 0;
        var fourWeeks = 0;

        // Return default
        if (typeof this !== 'object' || typeof startInstant !== 'string'
                || this.format('YYYY-MM-DD HH:mm') === startInstant) {
            return {
                RentalDays: rentalDays,
                Day: days,
                Week: weeks,
                FourWeek: fourWeeks
            };
        }

        // Get day difference
        rentalDays = this.clone().rentalDiff(startInstant, saturdays);

        var start = moment(startInstant);
        var remaining = rentalDays;

        // Filter Sundays, Saturdays (optional)
        while (remaining) {

            start.add(1, 'd');

            remaining -= 1;
        }

        // Break down rental days into day, week, fourWeek
        days = rentalDays;

        // Count fourWeeks
        var fourWeeksObj = this.getCalendarDuration(days, fourWeeks, 25);

        // Update days and fourWeeks count
        days = fourWeeksObj.days;
        fourWeeks = fourWeeksObj.duration;

        // Count weeks
        var weeksObj = this.getCalendarDuration(days, weeks, 4);

        // Update days and weeks count
        days = weeksObj.days;
        weeks = weeksObj.duration;

        return {
            RentalDays: rentalDays,
            Day: days,
            Week: weeks,
            FourWeek: fourWeeks
        };
    };

    /**
     * Get calendar duration to determine how many week or 4 week periods there
     * are for a given amount of rental days
     * @param  {integer} days     Number of days
     * @param  {integer} duration Calendar duration, week or 4 week
     * @param  {integer} factor   The factor in which to apply the duration against
     * @return {object}           New days count and duration
     */
    moment.fn.getCalendarDuration = function (days, duration, factor) {

        var newFactor = factor;

        if (days > (newFactor - 1)) {

            if (days > (newFactor + 2)) {
                newFactor += 3;
            } else if (days > (newFactor + 1)) {
                newFactor += 2;
            } else if (days > newFactor) {
                newFactor += 1;
            }

            duration += Math.floor(days / newFactor);
            days = (days % newFactor);

            // Recurse
            return this.getCalendarDuration(days, duration, factor);
        }

        return {
            days: days,
            duration: duration
        };
    };

    /**
     * CommonJS
     */
    if (typeof module !== 'undefined' && module && module.exports) {
        module.exports = moment;
    }

}).call(this);
