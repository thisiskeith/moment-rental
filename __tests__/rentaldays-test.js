jest.dontMock('moment');
jest.dontMock('../moment-rental');

describe('rentalDays', function () {

    var moment;

    beforeEach(function () {
        moment = require('moment');
        require('../moment-rental');
    });

    it('gets rental day breakdown between 2015-05-01 and 2015-05-02', function () {

        expect(moment('2015-05-04 08:00').rentalDays('2015-05-01 08:00'))
            .toEqual({
                Day: 1,
                FourWeek: 0,
                RentalDays: 1,
                Week: 0
            });
    });

    it('gets rental day breakdown between 2015-05-01 and 2015-05-11', function () {

        expect(moment('2015-05-11 08:00').rentalDays('2015-05-01 08:00'))
            .toEqual({
                Day: 1,
                FourWeek: 0,
                RentalDays: 6,
                Week: 1
            });
    });

    it('gets rental day breakdown between 2015-05-01 and 2015-05-14', function () {

        expect(moment('2015-05-14 08:00').rentalDays('2015-05-01 08:00'))
            .toEqual({
                Day: 0,
                FourWeek: 0,
                RentalDays: 9,
                Week: 2
            });
    });

    it('gets rental day breakdown between 2015-02-04 and 2015-02-12 including saturdays', function () {

        expect(moment('2015-02-12 08:00').rentalDays('2015-02-04 08:00', true))
            .toEqual({
                Day: 2,
                FourWeek: 0,
                RentalDays: 7,
                Week: 1
            });
     });
});
