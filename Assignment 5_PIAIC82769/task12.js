function guessNumber() {


    var a = Math.floor(Math.random() * (100 - 1) + 1);
    var guess, text;
    var maxAttempts = 3;
    var attemptsNumber = 0;
    alert("Guess the number from 1 to 100");
    var doContinue = true;
    while (doContinue) {

        do {
            guess = prompt(text)
            if (a > guess) {
                console.log("Your number is less");
            } else if (a < guess) {
                console.log("Your number is greater");
            } else {
                console.log("Your number was correct it was" + a);

            }
        } while (a != guess && ++attemptsNumber < maxAttempts);
        if (attemptsNumber == maxAttempts) {
            console.log("The correct number was " + a);
        }
        var input = prompt("Press Y to continue")
        if (input.toLowerCase() !== "y") {
            doContinue = false;
        }
    }
}
guessNumber();