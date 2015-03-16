jest.dontMock('moment');
jest.dontMock('../momentjs-rental');

describe('rentalAdd', function () {

    it('adds 3 days to a rental date of 2-12-2015', function () {

        var moment = require('moment');
        var momentRental = require('../momentjs-rental');

        expect(moment('2015-02-04').rentalAdd(3).format('MM-DD-YYYY'))
            .toBe('02-09-2015');
    });
});

describe('rentalAdd', function () {

    it('adds 3 days to a rental date of 2-12-2015 including saturdays', function () {

        var moment = require('moment');
        var momentRental = require('../momentjs-rental');

        expect(moment('2015-02-04').rentalAdd(3, true).format('MM-DD-YYYY'))
            .toBe('02-07-2015');
    });
});

