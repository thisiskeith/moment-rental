jest.dontMock('moment');
jest.dontMock('../moment-rental');

describe('rentalDiff', function () {

    var moment;

    beforeEach(function () {
        moment = require('moment');
        require('../moment-rental');
    });

    it('gets difference between two dates in rental days', function () {

        expect(moment('2015-02-09 08:00').rentalDiff('2015-02-05 08:00'))
            .toBe(2);
    });

    it('gets difference between two dates in rental days plus one minute', function () {

        expect(moment('2015-02-09 08:01').rentalDiff('2015-02-05 08:00'))
            .toBe(3);
    });

    it('gets difference between two dates in rental days including saturdays', function () {

        expect(moment('2015-02-09 08:00').rentalDiff('2015-02-05 08:00', true))
            .toBe(3);
    });

    it('gets difference between two dates in rental days plus one minute including saturdays', function () {

        expect(moment('2015-02-09 08:01').rentalDiff('2015-02-05 08:00', true))
            .toBe(4);
    });
});

