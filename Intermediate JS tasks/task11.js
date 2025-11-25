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


///A----------------------------------------------------------------------------------ANOTHER METHOD-----------------------------------------------------------------------


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function calculateAge(birthDate) {
    // Split the birth date
    let dateParts = birthDate.split('-');
    let birthYear = Number(dateParts[0]);
    let birthMonth = Number(dateParts[1]);
    let birthDay = Number(dateParts[2]);

    // Get today's date
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1; // JS months are 0-based
    let todayDay = today.getDate();

    // Days in each month
    let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(isLeapYear(todayYear)) monthDays[1] = 29;

    // Borrow days if needed
    if(todayDay < birthDay){
        todayMonth--;
        todayDay += monthDays[(todayMonth - 1 + 12) % 12];
    }

    // Borrow months if needed
    if(todayMonth < birthMonth){
        todayYear--;
        todayMonth += 12;
    }

    // Calculate age
    let ageYears = todayYear - birthYear;
    let ageMonths = todayMonth - birthMonth;
    let ageDays = todayDay - birthDay;

    return { years: ageYears, months: ageMonths, days: ageDays };
}

// Example usage:
let birth_date = prompt("Enter birth date in the format: YYYY-MM-DD");
let age = calculateAge(birth_date);
console.log(`Age is ${age.years} years, ${age.months} months, and ${age.days} days.`);
