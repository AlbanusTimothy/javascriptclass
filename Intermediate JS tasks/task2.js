// Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, display  either “odd” or “even” to the user.
// If the number is a multiple of 4, print out “divisible by 4”
let num = prompt("Enter a number:");

// convert to number
num = Number(num);

if (num % 2 === 0) {
    alert("even");

    // check if divisible by 4
    if (num % 4 === 0) {
        alert("divisible by 4");
    }

} else {
    alert("odd");
}
