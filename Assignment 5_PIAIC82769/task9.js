function addWeeks(numWeeks) {
    let now = new Date();
    now.setDate(now.getDate() + numWeeks * 7);
    alert(now);
}
addWeeks(parseInt(prompt("Enter weeks")));