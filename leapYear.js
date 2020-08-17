// Find the year is Leap or not Leap
//simple way
const year = 2020;

if (year % 4 == 0) {
    console.log("this is leap Year");
} else {
    console.log("this is not a leap year");
}

//smart way
function isLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}
const check1700 = isLeapYear(1700);
console.log(check1700);
