// Implement a program that takes 3 users  inputs from the terminal or the Browser, and stores them in three variables. Return the largest of the three.
//  Do this without using the the inbuilt max () function!
let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));
let c = Number(prompt("Enter the third number:"));

let largest;

if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}

alert("The largest number is: " + largest);
