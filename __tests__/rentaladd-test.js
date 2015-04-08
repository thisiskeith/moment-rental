jest.dontMock('moment');
jest.dontMock('../moment-rental');

describe('rentalAdd', function () {

    var moment;

    beforeEach(function () {
        moment = require('moment');
        require('../moment-rental');
    });

    it('adds 3 days to a rental date of 2-12-2015', function () {

        expect(moment('2015-02-04').rentalAdd(3).format('MM-DD-YYYY'))
            .toBe('02-09-2015');
    });

    it('adds 3 days to a rental date of 2-12-2015 including saturdays', function () {

        expect(moment('2015-02-04').rentalAdd(3, true).format('MM-DD-YYYY'))
            .toBe('02-07-2015');
    });
});
