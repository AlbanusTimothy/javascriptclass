// Write a program which accepts email as form input or from terminal. Validate the email by checking if it's a valid email. 
// Hint: Check if it contains an “@” symbol and “.” symbol.
let email = prompt("Enter your email:");

// trim spaces
email = email.trim();

// checks
if (email.includes("@") && email.includes(".")) {

    // ensure the dot comes AFTER the @
    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");

    if (dotIndex > atIndex) {
        alert("Valid email!");
    } else {
        alert("Invalid email! '.' must come after '@'");
    }

} else {
    alert("Invalid email! Must contain '@' and '.'");
}
