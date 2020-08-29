var a = prompt("Enter any traffic signal color");

if (a == "Red" || "red") {
    alert("Must Stop");
} else if (a == "Yellow" || "yellow") {
    alert("Ready to move");
} else if (a == "Green" || "green") {
    alert("Move now");
} else {
    alert("invalid color");
}