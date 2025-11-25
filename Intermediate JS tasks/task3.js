// Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”
let phone = prompt("Enter your phone number:");

// remove spaces just in case
phone = phone.trim();

// Convert to +254 format
if (phone.startsWith("+254")) {
    // already correct format
    phone = phone;

} else if (phone.startsWith("254")) {
    phone = "+" + phone;

} else if (phone.startsWith("07")) {
    phone = "+254" + phone.slice(1);   // remove the leading 0

} else if (phone.startsWith("01")) {
    phone = "+254" + phone.slice(1);   // remove the leading 0

} else if (phone.startsWith("7")) {
    phone = "+254" + phone;

} else if (phone.startsWith("1")) {
    phone = "+254" + phone;

} else {
    alert("Invalid phone number format!");
}

// display final result
alert("Converted phone number: " + phone);
