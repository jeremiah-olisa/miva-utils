/**
 * Constructs a union type of numbers from 0 up to but not including N.
 *
 * @template N - The upper limit of the range (not included in the range).
 * @template Acc - An accumulator array used to build the range (defaults to an empty array).
 * @example
 * // Produces 0 | 1 | 2 | 3 | 4 for N = 5
 * type RangeFive = Range<5>;
 */
export type Range<N extends number, Acc extends number[] = []> =
    Acc['length'] extends N
    ? Acc[number]
    : Range<N, [...Acc, Acc['length']]>

/**
 * Constructs a union type of numbers from Start up to but not including End.
 *
 * @template Start - The lower limit of the range (included in the range).
 * @template End - The upper limit of the range (not included in the range).
 * @example
 * // Produces 3 | 4 for Start = 3 and End = 5
 * type LimitedRange = LimitNumber<3, 5>;
 */
export type LimitNumber<Start extends number, End extends number> =
    Exclude<Range<End>, Range<Start>> | Start

// Define a utility type to pad single digits with leading zeros
export type TwoDigitNumber<N extends number> = N extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    ? `0${N}`
    : `${N}`;


export type DayOfTheWeek = LimitNumber<1, 8>;
export type Hour = TwoDigitNumber<LimitNumber<0, 24>>;
export type Minute = TwoDigitNumber<LimitNumber<0, 60>>;
export type TimeString = `${Hour}:${Minute}`;

export type DayOfWeekStr = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"

/* This code snippet is defining a constant `DaysOfTheWeek` which is a mapping of numbers representing
days of the week to their corresponding string names. */
export const DaysOfTheWeek: Record<DayOfWeekStr, DayOfTheWeek> = {
    Sunday: 1,
    Monday: 2,
    Tuesday: 3,
    Wednesday: 4,
    Thursday: 5,
    Friday: 6,
    Saturday: 7
}

export interface TimeTable {
    courseTitle: string,
    courseCode: string,
    day: DayOfTheWeek,
    startTime: TimeString,
    endTime: TimeString,
    studyType: "Live video lesson" | 'Self-study' | 'Group-study'
}