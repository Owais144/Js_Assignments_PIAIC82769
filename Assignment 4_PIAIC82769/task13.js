var date = new Date();
var date1 = new Date("January 1 1970 1:42:00");

console.log("Current date: " + date);

var TimeDiff = date.getTime() - date1.getTime();
console.log("Elapsed milliseconds:" + TimeDiff);

var timeinMin = (24 * 60);
// console.log("Elapsed minutes:" + timeinMin);

var MinDiff = TimeDiff / timeinMin;
console.log("time in Minutes" + MinDiff);