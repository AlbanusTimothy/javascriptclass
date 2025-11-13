// Take user inputs
let num1 = Number(prompt("Enter the first number:"))
let num2 = Number(prompt("Enter the second number:"))

// Perform operations
let sum = num1 + num2
let subtraction = num1 - num2
let modulus = num1 % num2
let exponent = num1 ** num2

// Display results on console
console.log("Sum:", sum)
console.log("Subtraction:", subtraction)
console.log("Modulus:", modulus)
console.log("Exponent:", exponent)

// Display results on the webpage
    document.write("<b>Sum:</b> " + sum + "<br>")
    document.write("<b>Subtraction:</b> " + subtraction + "<br>")
    document.write("<b>Modulus:</b> " + modulus + "<br>")
    document.write("<b>Exponent:</b> " + exponent + "<br>")
