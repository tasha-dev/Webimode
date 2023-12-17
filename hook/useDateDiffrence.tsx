// Defining a function which calculates year, month, days, hours, minutes, seconds from one date to another and exporting it as default
export default function useDateDiffrence(startDate: string, endDate: string):{
    years: number,
    months: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number
} {
    // Parse the input strings to Date objects
    const start: Date = new Date(startDate);
    const end: Date = new Date(endDate);

    // Calculate the time difference in milliseconds
    const timeDifference: number = end.getTime() - start.getTime();

    // Calculate years, months, days, hours, minutes, and seconds
    const millisecondsInSecond: number = 1000;
    const millisecondsInMinute: number = 60 * millisecondsInSecond;
    const millisecondsInHour: number = 60 * millisecondsInMinute;
    const millisecondsInDay: number = 24 * millisecondsInHour;
    const millisecondsInMonth: number = 30.44 * millisecondsInDay; // Approximate days in a month

    const years: number = Math.abs(Math.floor(timeDifference / (365.25 * millisecondsInDay)));
    const months: number = Math.abs(Math.floor(timeDifference / millisecondsInMonth));
    const days: number = Math.abs(Math.floor(timeDifference / millisecondsInDay));
    const hours: number = Math.abs(Math.floor((timeDifference % millisecondsInDay) / millisecondsInHour));
    const minutes: number = Math.abs(Math.floor((timeDifference % millisecondsInHour) / millisecondsInMinute));
    const seconds: number = Math.abs(Math.floor((timeDifference % millisecondsInMinute) / millisecondsInSecond));

    // Returning values as a object
    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
    };
}