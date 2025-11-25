// Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
// Example If rows is 5, it should print the following:
// *
// **
// ***
// ****
// *****.....
let rows = Number(prompt("Enter number of rows:"));

let stars = "";

for (let i = 1; i <= rows; i++) {
    stars += "*";   // add one star each loop
    console.log(stars);
}
