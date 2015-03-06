'use strict';

(function () {

    var moment = (typeof require !== "undefined" && require !== null) && !require.amd
        ? require("moment")
        : this.moment;

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

            if (d.day() !== 0 && d.day() !== (week + 1)) {
                remaining--;
            }
        }

        return d;
    };

    /**
     * Difference between two dates. Saturday excluded by default, but can be
     * reintroduced
     * @param  {object} days      Moment object
     * @param  {bool}   saturdays Include Saturdays, default: false
     * @return {object}           Moment object
     */
    moment.fn.rentalSubtract = function (days, saturdays) {

        saturdays = saturdays || false;

        return this.businessAdd(-days, saturdays);
    };

    /**
     * Get rental days between end date and start date
     * @param  {object} startDate Moment object
     * @param  {bool}   saturdays Include Saturdays, default: false
     * @return {object}           Rental days total and breakdown by day, week, fourWeek
     */
    moment.fn.rentalDays = function (startDate, saturdays) {

        saturdays = saturdays || false;

        var rentalDays = 0;
        var days = 0;
        var weeks = 0;
        var fourWeeks = 0;

        // Get day difference
        rentalDays = this.clone().diff(startDate, 'days');

        var start = moment(startDate);
        var remaining = rentalDays;

        // Filter Sundays, Saturdays (optional)
        while (remaining) {

            start.add(1, 'd');

            if (start.day() === 0 || start.day() === 6 && !saturdays) {
                continue;
            }

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
            rentalDays: rentalDays,
            days: days,
            weeks: weeks,
            fourWeeks: fourWeeks
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
     * NodeJS environment handler
     */
    if (typeof module !== 'undefined' && module && module.exports) {
        module.exports = moment;
    }

}).call(this);