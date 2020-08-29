a = ["Michael", "John", "Tony"];
b = [320, 230, 480];
percentage = []
total = 500;

b.forEach(item => {
    percentage.push((item * 100) / total);
})
document.write("Score of " + a[0] + " is " + b[0] + "." + "Percentage: " + percentage[0] + "%<br>");
document.write("Score of " + a[1] + " is " + b[1] + "." + "Percentage: " + percentage[1] + "%<br>");
document.write("Score of " + a[2] + " is " + b[2] + "." + "Percentage: " + percentage[2] + "%<br>");