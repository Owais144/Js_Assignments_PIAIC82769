var a = 6;
var b = prompt("Guess the secret number from 1 to 10");

if (b == a) {
    alert("Bingo! You guessed it right");
} else if (b == a + 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess");
}