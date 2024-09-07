function isLeapYear (y) {
    if ((y % 400 === 0) || ((y % 100 !== 0) && (y % 4 === 0))) {
        const leapYear = `${y} Is Leap Year  !!`;
        return leapYear;
    } else {
        const notLeapYear = `${y} Is Not Leap Year  !!`;
        return notLeapYear;
    }
}

const chackYear = isLeapYear(1900);
console.log(chackYear);
