import expect from 'expect';
import moment from 'moment';
import '../lib/moment-rental';

describe('rentalDiff', () => {

    const from_00 = '2016-04-01';
    const to_00 = '2016-04-12';

    it(`gets difference between ${from_00} and ${to_00} in rental days`, () => {
        expect(
            moment(`${to_00} 08:00`).rentalDiff(`${from_00} 08:00`)
        ).toBe(11);
    });

    it(`gets difference between ${from_00} and ${to_00} in rental days without Saturdays`, () => {
        expect(
            moment(`${to_00} 08:00`).rentalDiff(`${from_00} 08:00`, false)
        ).toBe(9);
    });

    it(`gets difference between ${from_00} and ${to_00} in rental days without Sundays`, () => {
        expect(
            moment(`${to_00} 08:00`).rentalDiff(`${from_00} 08:00`, true, false)
        ).toBe(9);
    });

    it(`gets difference between ${from_00} and ${to_00} in rental days without Saturdays and Sundays`, () => {
        expect(
            moment(`${to_00} 08:00`).rentalDiff(`${from_00} 08:00`, false, false)
        ).toBe(7);
    });

    const from_01 = '2016-04-02';
    const to_01 = '2016-04-09';

    it(`gets difference between ${from_01} and ${to_01} in rental days`, () => {
        expect(
            moment(`${to_01} 08:00`).rentalDiff(`${from_01} 08:00`)
        ).toBe(7);
    });

    it(`gets difference between ${from_01} and ${to_01} in rental days without Saturdays`, () => {
        expect(
            moment(`${to_01} 08:00`).rentalDiff(`${from_01} 08:00`, false)
        ).toBe(6);
    });

    it(`gets difference between ${from_01} and ${to_01} in rental days without Sundays`, () => {
        expect(
            moment(`${to_01} 08:00`).rentalDiff(`${from_01} 08:00`, true, false)
        ).toBe(6);
    });

    it(`gets difference between ${from_01} and ${to_01} in rental days without Saturdays and Sundays`, () => {
        expect(
            moment(`${to_01} 08:00`).rentalDiff(`${from_01} 08:00`, false, false)
        ).toBe(5);
    });

    const from_02 = '2016-04-03';
    const to_02 = '2016-04-10';

    it(`gets difference between ${from_02} and ${to_02} in rental days`, () => {
        expect(
            moment(`${to_02} 08:00`).rentalDiff(`${from_02} 08:00`)
        ).toBe(7);
    });

    it(`gets difference between ${from_02} and ${to_02} in rental days without Saturdays`, () => {
        expect(
            moment(`${to_02} 08:00`).rentalDiff(`${from_02} 08:00`, false)
        ).toBe(6);
    });

    it(`gets difference between ${from_02} and ${to_02} in rental days without Sundays`, () => {
        expect(
            moment(`${to_02} 08:00`).rentalDiff(`${from_02} 08:00`, true, false)
        ).toBe(6);
    });

    it(`gets difference between ${from_02} and ${to_02} in rental days without Saturdays and Sundays`, () => {
        expect(
            moment(`${to_02} 08:00`).rentalDiff(`${from_02} 08:00`, false, false)
        ).toBe(5);
    });

    const from_03 = '2016-04-03';
    const to_03 = '2016-04-09';

    it(`gets difference between ${from_03} and ${to_03} in rental days`, () => {
        expect(
            moment(`${to_03} 08:00`).rentalDiff(`${from_03} 08:00`)
        ).toBe(6);
    });

    it(`gets difference between ${from_03} and ${to_03} in rental days without Saturdays`, () => {
        expect(
            moment(`${to_03} 08:00`).rentalDiff(`${from_03} 08:00`, false)
        ).toBe(5);
    });

    it(`gets difference between ${from_03} and ${to_03} in rental days without Sundays`, () => {
        expect(
            moment(`${to_03} 08:00`).rentalDiff(`${from_03} 08:00`, true, false)
        ).toBe(6);
    });

    it(`gets difference between ${from_03} and ${to_03} in rental days without Saturdays and Sundays`, () => {
        expect(
            moment(`${to_03} 08:00`).rentalDiff(`${from_03} 08:00`, false, false)
        ).toBe(5);
    });
});
