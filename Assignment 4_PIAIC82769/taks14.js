var date = new Date(prompt("Enter birth year"));
var date1 = new Date();

var TimeDiff = date.getTime() - date1.getTime();
console.log("Elapsed milliseconds:" + TimeDiff);

var yearDiff = 24 * 60 * 60 * 1000 * 12 * 365;

var yd = TimeDiff / yearDiff;
console.log("time in Years" + yd);