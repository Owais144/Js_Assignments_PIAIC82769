var a = prompt("Enter first number");
var b = prompt("Enter second number");

var op = prompt("Enter operation from +,-,*,/");

if (op == "+") {
    c = parseInt(a) + parseInt(b);
    alert("Result: " + c);
} else if (op == "-") {
    c = parseInt(a) - parseInt(b);
    alert("Result: " + c);
} else if (op == "*" || "x") {
    c = parseInt(a) * parseInt(b);
    alert("Result: " + c);
} else if (op == "/") {
    c = parseInt(a) / parseInt(b);
    alert("Result: " + c);
}