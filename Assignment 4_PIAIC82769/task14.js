var date = parseInt(prompt("Your age ?"));
var date1 = new Date("2020");

var TimeDiff = parseInt(date1.getFullYear() - date);
console.log("Your age is: " + date);
console.log("Your birth year is: " + TimeDiff);