// Write a program that prompts the user to enter the base and height of a triangle and returns its area
let base = prompt("Enter the base of the triangle:");
let height = prompt("Enter the height of the triangle:");

// convert input to numbers
base = Number(base);
height = Number(height);

// calculate area
let area = 0.5 * base * height;

// show result
alert("The area of the triangle is: " + area);
