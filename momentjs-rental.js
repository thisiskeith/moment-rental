'use strict';

(function () {

    var moment;

    moment = (typeof require !== "undefined" && require !== null) &&
           !require.amd ? require("moment") : this.moment;

    /**
     * Unused, may delete
     */
    moment.fn.businessDiff = function (param) {

        param = moment(param);

        var signal = param.unix() < this.unix()?1:-1;
        var start = moment.min(param, this).clone();
        var end = moment.max(param, this).clone();
        var start_offset = start.day() - 7;
        var end_offset = end.day();
        var end_sunday = end.clone().subtract('d', end_offset);
        var start_sunday = start.clone().subtract('d', start_offset);
        var weeks = end_sunday.diff(start_sunday, 'days') / 7;

        start_offset = Math.abs(start_offset);

        if (start_offset === 7) {
            start_offset = 5;
        } else if (start_offset === 1) {
            start_offset = 0;
        } else {
            start_offset -= 2;
        }


        if(end_offset == 6) {
            end_offset--;
        }

        return signal * (weeks * 5 + start_offset + end_offset);
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

            if (start.day() === 0) {
                rentalDays -= 1;
            } else if (start.day() === 6 && !saturdays) {
                rentalDays -= 1;
            }

            remaining -= 1;
        }

        // Break down rental days into day, week, fourWeek
        days = rentalDays;

        // Determine fourWeeks
        if (days > 24) {

            var factor = 25;

            if (days > 27) {
                 factor = 28;
            } else if (days > 26) {
                factor = 27;
            } else if (days > 25) {
                 factor = 26;
            }

            fourWeeks = Math.floor(days / factor);
            days = (days % factor);
        }

        // Determine weeks
        if (days > 3) {

            var factor = 4;

            if (days > 6) {
                 factor = 7;
            } else if (days > 5) {
                factor = 6;
            } else if (days > 4) {
                 factor = 5;
            }

            weeks = Math.floor(days / factor);
            days = (days % factor);
        }

        return {
            rentalDays: rentalDays,
            days: days,
            weeks: weeks,
            fourWeeks: fourWeeks
        };
    };

    /**
     * NodeJS environment handler
     */
    if (typeof module !== 'undefined' && module && module.exports) {
        module.exports = moment;
    }

}).call(this);