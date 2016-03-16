'use strict';

(function () {

    var moment = (typeof require !== 'undefined' && require !== null)
        && !require.amd
        ? require('moment')
        : this.moment;

    /**
     * Add days to current moment time object. Saturday exluded by
     * default, but can be reintroduced
     * @param  {integer} days      Days to add
     * @param  {bool}    saturdays Include Saturdays, default: true
     * @param  {bool}    sundays   Include Sundays, default: true
     * @return {object}            Moment object
     */
    moment.fn.rentalAdd = function (days, saturdays, sundays) {

        saturdays = (saturdays !== false) ? true : false;
        sundays = (sundays !== false) ? true : false;

        var d = this.clone();
        var signal = (days < 0) ? -1 : 1;

        while (days) {

            d.add(signal, 'd');

            if (d.day() === 0 && sundays === false) {
                continue;
            }

            if (d.day() === 6 && saturdays === false) {
                continue;
            }

            days -= 1;
        }

        return d;
    };

    /**
     * Get rental days between end date time and start date time
     * @param  {string} startInstant Start date time
     * @param  {bool}   saturdays    Include Saturdays, default: true
     * @param  {bool}   sundays      Include Sundays, default: true
     * @return {object}              Rental days total and breakdown by day, week, fourWeek
     */
    moment.fn.rentalDays = function (startInstant, saturdays, sundays) {

        saturdays = (saturdays !== false) ? true : false;
        sundays = (sundays !== false) ? true : false;

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
        rentalDays = this.clone().rentalDiff(startInstant, saturdays, sundays);

        var start = moment(startInstant);
        var remaining = rentalDays;

        // Filter Sundays, Saturdays
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
     * Difference between rental dates
     * @param  {string} startInstant Start date time
     * @param  {bool}   saturdays    Include Saturdays, default: true
     * @param  {bool}   sundays      Include Sundays, default: true
     * @return {integer}             Difference in days
     */
    moment.fn.rentalDiff = function (startInstant, saturdays, sundays) {

        // Raw diff
        var diff = this.diff(startInstant, 'days');
        var endDay = this.day();

        // Filter Saturdays
        if (saturdays === false) {

            var startMoment = moment(startInstant);
            var newDiff = 0;

            while (diff) {

                startMoment.add(1, 'd');
                diff -= 1;

                if (startMoment.day() === 6 && saturdays === false) {
                    continue;
                }

                newDiff += 1;
            }

            diff = newDiff;
        }

        // Filter Saturdays
        if (sundays === false) {

            var startMoment = moment(startInstant);
            var newDiff = 0;

            while (diff) {

                startMoment.add(1, 'd');
                diff -= 1;

                if (startMoment.day() === 0 && sundays === false) {
                    continue;
                }

                newDiff += 1;
            }

            diff = newDiff;
        }

        // Ends on Sunday, Saturday and Sunday off
        if (endDay === 0 && saturdays === false && sundays === false) {
            diff -= 1;
        }

        return diff;
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

            if (days > newFactor + 2) {
                newFactor += 3;
            } else if (days > newFactor + 1) {
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

}.call(this));
