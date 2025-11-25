// Write a program that takes input of 2 values and adds them. 
// The program should only accept numbers and floats only or otherwise display an error “invalid character entered” and take the user to re-enter the inputs .
let valid = false;

while (!valid) {
    let input1 = prompt("Enter the first number:");
    let input2 = prompt("Enter the second number:");

    // convert to numbers
    let num1 = Number(input1);
    let num2 = Number(input2);

    // check if valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid character entered! Please enter numbers only.");
    } else {
        let sum = num1 + num2;
        alert("The sum is: " + sum);
        valid = true; // exit loop
    }
}
