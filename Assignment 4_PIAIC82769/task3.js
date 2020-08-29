function CheckPassword(input) {

    var passw = /^[A-Za-z]\w{7,14}$/;
    if (input.value.match(passw)) {
        alert('Correct')
        return true;
    } else {
        alert('Wrong Password')
        return false;
    }
}