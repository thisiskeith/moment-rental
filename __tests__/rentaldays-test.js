import expect from 'expect';
import moment from 'moment';
import '../lib/moment-rental';

describe('rentalDays', () => {

    const from = '2016-04-04';

    const to_98 = '2016-04-04';

    // 0 Day : 0 Day
    it(`gets rental day breakdown between ${from} and ${to_98}`, () => {
        expect(
            moment(`${to_98} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 0,
            Week: 0,
        });
    });

    const to_99 = '2016-04-05';

    // 1 Day : 1 Day
    it(`gets rental day breakdown between ${from} and ${to_99}`, () => {
        expect(
            moment(`${to_99} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 1,
            FourWeek: 0,
            RentalDays: 1,
            Week: 0,
        });
    });

    const to_00 = '2016-04-06';

    // 2 Day : 2 Day
    it(`gets rental day breakdown between ${from} and ${to_00}`, () => {
        expect(
            moment(`${to_00} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 2,
            FourWeek: 0,
            RentalDays: 2,
            Week: 0,
        });
    });

    const to_01 = '2016-04-07';

    // 3 Day : 3 Day
    it(`gets rental day breakdown between ${from} and ${to_01}`, () => {
        expect(
            moment(`${to_01} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 3,
            FourWeek: 0,
            RentalDays: 3,
            Week: 0,
        });
    });

    const to_02 = '2016-04-08';

    // 4 Day : 1 Week
    it(`gets rental day breakdown between ${from} and ${to_02}`, () => {
        expect(
            moment(`${to_02} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 4,
            Week: 1,
        });
    });

    const to_03 = '2016-04-09';

    // 5 Day : 1 Week
    it(`gets rental day breakdown between ${from} and ${to_03}`, () => {
        expect(
            moment(`${to_03} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 5,
            Week: 1,
        });
    });

    const to_04 = '2016-04-10';

    // 6 Day : 1 Week
    it(`gets rental day breakdown between ${from} and ${to_04}`, () => {
        expect(
            moment(`${to_04} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 6,
            Week: 1,
        });
    });

    const to_05 = '2016-04-11';

    // 7 Day : 1 Week
    it(`gets rental day breakdown between ${from} and ${to_05}`, () => {
        expect(
            moment(`${to_05} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 7,
            Week: 1,
        });
    });

    const to_06 = '2016-04-12';

    // 8 Day : 1 Week, 1 Day
    it(`gets rental day breakdown between ${from} and ${to_06}`, () => {
        expect(
            moment(`${to_06} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 1,
            FourWeek: 0,
            RentalDays: 8,
            Week: 1,
        });
    });

    const to_07 = '2016-04-13';

    // 9 Day : 1 Week, 2 Day
    it(`gets rental day breakdown between ${from} and ${to_07}`, () => {
        expect(
            moment(`${to_07} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 2,
            FourWeek: 0,
            RentalDays: 9,
            Week: 1,
        });
    });

    const to_08 = '2016-04-14';

    // 10 Day : 1 Week, 3 Day
    it(`gets rental day breakdown between ${from} and ${to_08}`, () => {
        expect(
            moment(`${to_08} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 3,
            FourWeek: 0,
            RentalDays: 10,
            Week: 1,
        });
    });

    const to_09 = '2016-04-15';

    // 11 Day : 2 Week
    it(`gets rental day breakdown between ${from} and ${to_09}`, () => {
        expect(
            moment(`${to_09} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 11,
            Week: 2,
        });
    });

    const to_10 = '2016-04-16';

    // 12 Day : 2 Week
    it(`gets rental day breakdown between ${from} and ${to_10}`, () => {
        expect(
            moment(`${to_10} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 12,
            Week: 2,
        });
    });

    const to_11 = '2016-04-17';

    // 13 Day : 2 Week
    it(`gets rental day breakdown between ${from} and ${to_11}`, () => {
        expect(
            moment(`${to_11} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 13,
            Week: 2,
        });
    });

    const to_12 = '2016-04-18';

    // 14 Day : 2 Week
    it(`gets rental day breakdown between ${from} and ${to_12}`, () => {
        expect(
            moment(`${to_12} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 14,
            Week: 2,
        });
    });

    const to_13 = '2016-04-19';

    // 15 Day : 2 Week, 1 Day
    it(`gets rental day breakdown between ${from} and ${to_13}`, () => {
        expect(
            moment(`${to_13} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 1,
            FourWeek: 0,
            RentalDays: 15,
            Week: 2,
        });
    });

   const to_14 = '2016-04-20';

    // 16 Day : 2 Week. 2 Day
    it(`gets rental day breakdown between ${from} and ${to_14}`, () => {
        expect(
            moment(`${to_14} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 2,
            FourWeek: 0,
            RentalDays: 16,
            Week: 2,
        });
    });

   const to_15 = '2016-04-21';

    // 17 Day : 2 Week, 3 Day
    it(`gets rental day breakdown between ${from} and ${to_15}`, () => {
        expect(
            moment(`${to_15} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 3,
            FourWeek: 0,
            RentalDays: 17,
            Week: 2,
        });
    });

   const to_16 = '2016-04-22';

    // 18 Day : 3 Week
    it(`gets rental day breakdown between ${from} and ${to_16}`, () => {
        expect(
            moment(`${to_16} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 18,
            Week: 3,
        });
    });

   const to_17 = '2016-04-23';

    // 19 Day : 3 Week
    it(`gets rental day breakdown between ${from} and ${to_17}`, () => {
        expect(
            moment(`${to_17} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 19,
            Week: 3,
        });
    });

   const to_18 = '2016-04-24';

    // 20 Day : 3 Week
    it(`gets rental day breakdown between ${from} and ${to_18}`, () => {
        expect(
            moment(`${to_18} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 20,
            Week: 3,
        });
    });

   const to_19 = '2016-04-25';

    // 21 Day : 3 Week
    it(`gets rental day breakdown between ${from} and ${to_19}`, () => {
        expect(
            moment(`${to_19} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 0,
            RentalDays: 21,
            Week: 3,
        });
    });

   const to_20 = '2016-04-26';

    // 22 Day : 3 Week, 1 Day
    it(`gets rental day breakdown between ${from} and ${to_20}`, () => {
        expect(
            moment(`${to_20} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 1,
            FourWeek: 0,
            RentalDays: 22,
            Week: 3,
        });
    });

   const to_21 = '2016-04-27';

    // 23 Day : 3 Week, 2 Day
    it(`gets rental day breakdown between ${from} and ${to_21}`, () => {
        expect(
            moment(`${to_21} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 2,
            FourWeek: 0,
            RentalDays: 23,
            Week: 3,
        });
    });

   const to_22 = '2016-04-28';

    // 24 Day : 3 Week, 3 Day
    it(`gets rental day breakdown between ${from} and ${to_22}`, () => {
        expect(
            moment(`${to_22} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 3,
            FourWeek: 0,
            RentalDays: 24,
            Week: 3,
        });
    });

   const to_23 = '2016-04-29';

    // 25 Day : 1 FourWeek
    it(`gets rental day breakdown between ${from} and ${to_23}`, () => {
        expect(
            moment(`${to_23} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 1,
            RentalDays: 25,
            Week: 0,
        });
    });

    const to_24 = '2016-04-30';

    // 26 Day : 1 FourWeek
    it(`gets rental day breakdown between ${from} and ${to_24}`, () => {
        expect(
            moment(`${to_24} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 1,
            RentalDays: 26,
            Week: 0,
        });
    });

    const to_25 = '2016-05-01';

    // 27 Day : 1 FourWeek
    it(`gets rental day breakdown between ${from} and ${to_25}`, () => {
        expect(
            moment(`${to_25} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 1,
            RentalDays: 27,
            Week: 0,
        });
    });

    const to_26 = '2016-05-02';

    // 28 Day : 1 FourWeek
    it(`gets rental day breakdown between ${from} and ${to_26}`, () => {
        expect(
            moment(`${to_26} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 0,
            FourWeek: 1,
            RentalDays: 28,
            Week: 0,
        });
    });

    const to_27 = '2016-05-03';

    // 29 Day : 1 FourWeek, 1 Day
    it(`gets rental day breakdown between ${from} and ${to_27}`, () => {
        expect(
            moment(`${to_27} 08:00`).rentalDays(`${from} 08:00`)
        ).toEqual({
            Day: 1,
            FourWeek: 1,
            RentalDays: 29,
            Week: 0,
        });
    });
});
