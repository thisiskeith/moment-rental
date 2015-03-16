jest.dontMock('moment');
jest.dontMock('../momentjs-rental');

describe('rentalDiff', function () {

    it('gets difference between two dates in rental days', function () {

        var moment = require('moment');
        var momentRental = require('../momentjs-rental');

        expect(moment('2015-02-09 08:00').rentalDiff('2015-02-05 08:00'))
            .toBe(2);
    });
});

describe('rentalDiff', function () {

    it('gets difference between two dates in rental days plus one minute', function () {

        var moment = require('moment');
        var momentRental = require('../momentjs-rental');

        expect(moment('2015-02-09 08:01').rentalDiff('2015-02-05 08:00'))
            .toBe(3);
    });
});

describe('rentalDiff', function () {

    it('gets difference between two dates in rental days including saturdays', function () {

        var moment = require('moment');
        var momentRental = require('../momentjs-rental');

        expect(moment('2015-02-09 08:00').rentalDiff('2015-02-05 08:00', true))
            .toBe(3);
    });
});

describe('rentalDiff', function () {

    it('gets difference between two dates in rental days plus one minute including saturdays', function () {

        var moment = require('moment');
        var momentRental = require('../momentjs-rental');

        expect(moment('2015-02-09 08:01').rentalDiff('2015-02-05 08:00', true))
            .toBe(4);
    });
});

