var d = new Date(prompt("Enter Date"));
switch (d.getDay()) {

    case 0:
    case 6:
        alert("It's Weekend");
        break;
    case 1:
        alert("Five days to Weekend");
        break;
    case 2:
        alert("Four days to Weekend");
        break;
    case 3:
        alert("Three days to Weekend");
        break;
    case 4:
        alert("Two days to Weekend");
        break;
    case 5:
        alert("One day to Weekend");
        break;
}