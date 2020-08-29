function cashier(amount) {
    var hundred = amount / 100;
    var fifty = ((amount % 100) / 50);
    var ten = (((amount % 100) % 50) / 10);
    document.write("You will have " + Math.floor(hundred) + " notes of hundred, " + Math.floor(fifty) + " notes of fifty and " + Math.floor(ten) + " notes of ten");
}
var amount = parseInt(prompt("Enter amount to withdraw"));
cashier(amount);