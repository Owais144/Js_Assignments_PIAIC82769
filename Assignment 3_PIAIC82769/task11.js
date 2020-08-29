bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var a = prompt("Welcome to ABC Bakery, What do you want to eat");
var found = false;
for (var i = 0; i < bakery.length; i++) {
    if (bakery[i] === a) {
        console.log("Found " + a + "on index = " + i);
        found = true;
    }
}
if (!found) {
    console.log("Not found");
}