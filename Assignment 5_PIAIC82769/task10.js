function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}
console.log(getVowels(prompt("Enter string")));