// Write a program that takes the date of birth of a person
//  and the program outputs the age in terms of years,months,days TODAY.datetime
// Prompt user for date of birth in yyyy-mm-dd format
let dobInput = prompt("Enter your date of birth (YYYY-MM-DD):");

// Convert input to a Date object
let dob = new Date(dobInput);
let today = new Date();

// Calculate differences
let years = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() - dob.getDate();

// Adjust months and years if necessary
if (days < 0) {
    months -= 1;
    // get days in previous month
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
}

if (months < 0) {
    years -= 1;
    months += 12;
}

alert(`You are ${years} years, ${months} months, and ${days} days old.`);
