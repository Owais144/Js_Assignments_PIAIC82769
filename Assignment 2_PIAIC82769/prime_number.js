// var a = parseInt(prompt("Enter number"));
// var isPrime = true;

// for (var i = 2; i < a; i++) {
//     var result = a % i;
//     if (result == 0) {
//         console.log("Not prime" + " i = " + i);
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) {
//     console.log("Number is prime" + " i = " + i);
// }
var rows = 7;

for (var i = 1; i <= rows; i++) {
    for (var k = 1; k <= (rows - i); k++) {
        document.write("&nbsp;");
    }
    for (var j = 1; j <= i; j++) {
        document.write("* ");
    }
    document.write("<br>");
}