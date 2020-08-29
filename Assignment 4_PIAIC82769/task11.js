var num = prompt("Enter number");

var result = num.split('').reduce(function(a, b) { return +a + +b; });
alert(result / num.length);