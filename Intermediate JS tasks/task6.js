// Write a program that lets the user input a password.
//  Give them only 4 attempts to check the passwords entered against “admin@123”. If the password is correct access is granted.
//  After you show them a message , the account is blocked.
let correctPassword = "admin@123";
let attempts = 4;

while (attempts > 0) {
    let entered = prompt("Enter your password:");

    if (entered === correctPassword) {
        alert("Access granted!");
        break;   // stop the loop
    } else {
        attempts--;
        alert("Wrong password! Attempts left: " + attempts);
    }
}

if (attempts === 0) {
    alert("Account blocked due to too many failed attempts.");
}
