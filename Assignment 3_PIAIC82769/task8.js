Counting = [];
Reverse_Counting = [];
Even = [];
Odd = [];
Series = [];

for (i = 0; i <= 15; i++) {
    Counting.push(i);
}
document.write("Counting: " + Counting + "<br>");

for (j = 15; j > 0; j -= 1) {
    Reverse_Counting.push(j);
}
document.write("Reverse_Counting: " + Reverse_Counting + "<br>");

for (k = 0; k < 15; k += 2) {
    Even.push(k);
}
document.write("Even: " + Even + "<br>");
for (k = 0; k <= 20; k += 2) {
    Even.push(k);
}
document.write("Even: " + Even + "<br>");
for (j = 1; j <= 20; j += 2) {
    Odd.push(j);
}
document.write("Odd: " + Odd + "<br>");
for (l = 0; l <= 20; l += 2) {
    Series.push(l + "k");
}
document.write("Series: " + Series + "<br>");