function CheckEmail(email) {
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mail)) {
        document.myform.email.focus();
        return true;
    } else {
        alert("You have entered an invalid email address");
        document.myform.email.focus();
        return false;
    }
}