jest.dontMock('moment');
jest.dontMock('../momentjs-rental');

describe('rentalDays', function () {

     it('gets rental day breakdown between 2015-02-04 and 2015-02-12', function () {

        var moment = require('moment');
        var momentRental = require('../momentjs-rental');

        expect(moment('2015-02-12 08:00').rentalDays('2015-02-04 08:00'))
            .toEqual({
                days: 0,
                fourWeeks: 0,
                rentalDays: 6,
                weeks: 1
            });
     });
});

describe('rentalDays', function () {

     it('gets rental day breakdown between 2015-02-04 and 2015-02-12 including saturdays', function () {

        var moment = require('moment');
        var momentRental = require('../momentjs-rental');

        expect(moment('2015-02-12 08:00').rentalDays('2015-02-04 08:00', true))
            .toEqual({
                days: 0,
                fourWeeks: 0,
                rentalDays: 7,
                weeks: 1
            });
     });
});

