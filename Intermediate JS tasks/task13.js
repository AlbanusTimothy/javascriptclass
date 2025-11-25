// Write a program that takes the email and password as input from a user and checks if they are equal to “admin@mail.com” 
// and password is “Admin@123” , if so then print  “Login is Successful” and if not print “Invalid username or password”.
//  ONLY accept 3 tries after which it notifies you that you have been blocked.
const correctEmail = "admin@mail.com";
const correctPassword = "Admin@123";
let attempts = 3;

while (attempts > 0) {
    let email = prompt("Enter your email:");
    let password = prompt("Enter your password:");

    if (email === correctEmail && password === correctPassword) {
        alert("Login is Successful");
        break; // exit loop
    } else {
        attempts--;
        if (attempts > 0) {
            alert("Invalid username or password. Attempts left: " + attempts);
        } else {
            alert("You have been blocked due to too many failed attempts.");
        }
    }
}
