import expect from 'expect';
import moment from 'moment';
import '../lib/moment-rental';

describe('getCalendarDuration', () => {

    const startInstant = '2015-02-09 08:00';
    const rentalDays = 33;

    it(`gets four week periods for ${rentalDays} rental days after ${startInstant}`, () => {
        expect(
            moment(startInstant).getCalendarDuration(rentalDays, 0, 25)
        ).toEqual({
            days: 5,
            duration: 1,
        });
    });

    it(`gets week periods for ${rentalDays} rental days after ${startInstant}`, () => {
        expect(
            moment(startInstant).getCalendarDuration(rentalDays, 0, 4)
        ).toEqual({
            days: 0,
            duration: 5,
        });
    });
});
