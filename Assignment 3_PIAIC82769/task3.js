color = [];

color.unshift(prompt("Enter color to add on top"));
console.log(color);
color.push(prompt("Enter color to add on bottom"));
console.log(color);
color.unshift(prompt("Enter color to add on top"));
color.unshift(prompt("Enter color to add on top"));
console.log(color);
color.shift()
console.log(color);
color.pop();
console.log(color);
var a = parseInt(prompt("At what index do you want to add the color"))
color.splice(a, 0, prompt("Enter the color"));
console.log(color);
var b = parseInt(prompt("At what index do you want to delete the color"));
var c = parseInt(prompt("How many do you want to delete"));
color.splice(b, c);
console.log(color);