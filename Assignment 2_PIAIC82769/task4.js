var a = prompt("Enter marks of first subject");
var b = prompt("Enter marks of second subject");
var c = prompt("Enter marks of third subject");
var d = parseInt(a) + parseInt(b) + parseInt(c);

var percentage = (d * 100) / 300;


document.write(" Total Marks: 300 <br>");
document.write("Obtained marks: " + d + "<br>");
document.write("Percentage: " + percentage + " %<br>");
if (percentage >= 80) {
    document.write("A Grade <br>");
    document.write("Remarks: Excellent ");
} else if (percentage >= 70) {
    document.write("B Grade <br>");
    document.write("Good ");

} else if (percentage >= 60) {
    document.write("C Grade <br>");
    document.write("You need to improve ");

} else {
    document.write(" Fail <br>");
    document.write("Sorry ");
}