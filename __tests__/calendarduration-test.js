jest.dontMock('moment');
jest.dontMock('../moment-rental');

describe('getCalendarDuration', function () {

    var moment;

    beforeEach(function () {
        moment = require('moment');
        require('../moment-rental');
    });

    it('gets four week periods from given number of rental days', function () {

        expect(moment('2015-02-09 08:00').getCalendarDuration(33, 0, 19))
            .toEqual({
                days: 13,
                duration: 1
            });
    });

    it('gets week periods from given number of rental days', function () {

        expect(moment('2015-02-09 08:00').getCalendarDuration(33, 0, 4))
            .toEqual({
                days: 3,
                duration: 6
            });
    });
});
