// Write a program that prints the largest of 4 inputs taken as input from a user.
let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));
let c = Number(prompt("Enter the third number:"));
let d = Number(prompt("Enter the fourth number:"));

let largest = a; // assume a is largest

if (b > largest) {
    largest = b;
}
if (c > largest) {
    largest = c;
}
if (d > largest) {
    largest = d;
}

alert("The largest number is: " + largest);
