function palindrome(str) {
    if (str == str.split('').reverse().join('')) {
        return alert(str + " is Palindrome");
    } else {
        return alert(str + " is not Palindrome")
    }
}
palindrome("madam");
palindrome("tibit");