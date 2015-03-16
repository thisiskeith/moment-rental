jest.dontMock('moment');
jest.dontMock('../momentjs-rental');

describe('getCalendarDuration', function () {

    it('gets four week periods from given number of rental days', function () {

        var moment = require('moment');
        var momentRental = require('../momentjs-rental');

        expect(moment('2015-02-09 08:00').getCalendarDuration(33, 0, 25))
            .toEqual({
                days: 5,
                duration: 1
            });
    });

    it('gets week periods from given number of rental days', function () {

        var moment = require('moment');
        var momentRental = require('../momentjs-rental');

        expect(moment('2015-02-09 08:00').getCalendarDuration(33, 0, 4))
            .toEqual({
                days: 0,
                duration: 5
            });
    });
});

