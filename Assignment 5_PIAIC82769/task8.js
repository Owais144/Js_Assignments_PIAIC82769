function calculateAge(dob) {
    var dt = new Date(dob);
    var date1 = new Date();

    var YearDiff = date1.getFullYear() - dt.getFullYear();
    var TimeDiff = date1.getTime() - dt.getTime(dob.g);
    var timeinMonths = date1.getMonth() - dt.getMonth();
    console.log(YearDiff);
    console.log(timeinMonths);
    var timeinDays = dt.getDay() + date1.getDay();
    console.log(timeinDays);


}
calculateAge("May 13 1999");


// var date = new Date();
// var date1 = new Date("January 1 1970 1:42:00");

// console.log("Current date: " + date);

// var TimeDiff = date.getTime() - date1.getTime();
// console.log("Elapsed milliseconds:" + TimeDiff);

// var timeinMin = (24 * 60);
// // console.log("Elapsed minutes:" + timeinMin);

// var MinDiff = TimeDiff / timeinMin;
// console.log("time in Minutes" + MinDiff);