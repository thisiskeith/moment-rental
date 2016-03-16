import expect from 'expect';
import moment from 'moment';
import '../lib/moment-rental';

describe('rentalAdd', () => {

    const from_01 = '2016-04-04';

    it(`adds 3 days to ${from_01}`, () => {
        expect(
            moment(from_01).rentalAdd(3).format('MM-DD-YYYY')
        ).toBe('04-07-2016');
    });

    it(`adds 5 days to ${from_01}`, () => {
        expect(
            moment(from_01).rentalAdd(5).format('MM-DD-YYYY')
        ).toBe('04-09-2016');
    });

    it(`adds 6 days to ${from_01}`, () => {
        expect(
            moment(from_01).rentalAdd(6).format('MM-DD-YYYY')
        ).toBe('04-10-2016');
    });

    it(`adds 6 days to ${from_01} without Saturdays`, () => {
        expect(
            moment(from_01).rentalAdd(6, false).format('MM-DD-YYYY')
        ).toBe('04-11-2016');
    });

    it(`adds 6 days to ${from_01} without Sundays`, () => {
        expect(
            moment(from_01).rentalAdd(6, true, false).format('MM-DD-YYYY')
        ).toBe('04-11-2016');
    });

    it(`adds 6 days to ${from_01} without Saturdays and Sundays`, () => {
        expect(
            moment(from_01).rentalAdd(6, false, false).format('MM-DD-YYYY')
        ).toBe('04-12-2016');
    });

    const from_02 = '2016-04-03';

    it(`adds 6 days to ${from_02}`, () => {
        expect(
            moment(from_02).rentalAdd(6).format('MM-DD-YYYY')
        ).toBe('04-09-2016');
    });

    it(`adds 6 days to ${from_02} without Saturdays`, () => {
        expect(
            moment(from_02).rentalAdd(6, false).format('MM-DD-YYYY')
        ).toBe('04-10-2016');
    });

    it(`adds 6 days to ${from_02} without Sundays`, () => {
        expect(
            moment(from_02).rentalAdd(6, true, false).format('MM-DD-YYYY')
        ).toBe('04-09-2016');
    });

    it(`adds 6 days to ${from_02} without Saturdays and Sundays`, () => {
        expect(
            moment(from_02).rentalAdd(6, false, false).format('MM-DD-YYYY')
        ).toBe('04-11-2016');
    });

    const from_03 = '2016-04-09';

    it(`adds 6 days to ${from_03}`, () => {
        expect(
            moment(from_03).rentalAdd(6).format('MM-DD-YYYY')
        ).toBe('04-15-2016');
    });

    it(`adds 6 days to ${from_03} without Saturdays`, () => {
        expect(
            moment(from_03).rentalAdd(6, false).format('MM-DD-YYYY')
        ).toBe('04-15-2016');
    });

    it(`adds 6 days to ${from_03} without Sundays`, () => {
        expect(
            moment(from_03).rentalAdd(6, true, false).format('MM-DD-YYYY')
        ).toBe('04-16-2016');
    });

    it(`adds 6 days to ${from_03} without Saturdays and Sundays`, () => {
        expect(
            moment(from_03).rentalAdd(6, false, false).format('MM-DD-YYYY')
        ).toBe('04-18-2016');
    });
});
