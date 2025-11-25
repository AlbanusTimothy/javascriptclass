// TASK 15: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
// To find the Kenya NHIF Rate using THIS LINK:  
// Write a normal program but use functions if you feel comfortable.

// TASK 16: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the program above, then use  the gross salary to find the NSSF. 
// To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 
// Write a normal program but use functions if you feel comfortable.

// Task 17: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s NHDF using:
//  i.e NHDF = gross_salary *  0.015
// Write a normal program but use functions if you feel comfortable.

// Task 18: Using Python or PHP or Java or Ruby or JavaScript
// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 
// Write a normal program but use functions if you feel comfortable.

// TASK 19: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and find the person's PAYEE using the taxable income above.
// Find the Kenya PAYEE Tax Rate using THIS LINK
// Write a normal program but use functions if you feel comfortable.

// Task 20: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s Net Salary using:
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)
let salary = Number(prompt("Enter your gross salary:"));

// Validate input
if (isNaN(salary) || salary < 0) {
    alert("Invalid input! Please enter a valid salary.");
} else {
    // NSSF: 6% only if salary >= 18000
    let nssf = salary >= 18000 ? salary * 0.06 : 0;

    // NHDF: 1.5% of gross salary (applies to everyone)
    let nhdf = salary * 0.015;

    // NHIF: simplified flat rates
    let nhif;
    if (salary <= 5999) nhif = 150;
    else if (salary <= 7999) nhif = 300;
    else if (salary <= 11999) nhif = 400;
    else if (salary <= 14999) nhif = 500;
    else if (salary <= 19999) nhif = 600;
    else if (salary <= 24999) nhif = 750;
    else if (salary <= 29999) nhif = 850;
    else if (salary <= 34999) nhif = 900;
    else if (salary <= 39999) nhif = 950;
    else if (salary <= 44999) nhif = 1000;
    else if (salary <= 49999) nhif = 1100;
    else if (salary <= 59999) nhif = 1200;
    else if (salary <= 69999) nhif = 1300;
    else if (salary <= 79999) nhif = 1400;
    else if (salary <= 89999) nhif = 1500;
    else if (salary <= 99999) nhif = 1600;
    else nhif = 1700;

    // PAYE: progressive tax (simplified)
    let taxable = salary - nssf;
    let paye;
    if (taxable <= 12298) paye = taxable * 0.1;
    else if (taxable <= 23885) paye = (12298 * 0.1) + ((taxable - 12298) * 0.15);
    else if (taxable <= 35472) paye = (12298 * 0.1) + ((23885 - 12298) * 0.15) + ((taxable - 23885) * 0.2);
    else if (taxable <= 47059) paye = (12298 * 0.1) + ((23885 - 12298) * 0.15) + ((35472 - 23885) * 0.2) + ((taxable - 35472) * 0.25);
    else paye = (12298 * 0.1) + ((23885 - 12298) * 0.15) + ((35472 - 23885) * 0.2) + ((47059 - 35472) * 0.25) + ((taxable - 47059) * 0.3);

    paye -= 2400; // personal relief
    if (paye < 0) paye = 0;

    let totalDeductions = nssf + nhdf + nhif + paye;
    let netSalary = salary - totalDeductions;

    alert(
        `Gross Salary: KES ${salary}\n` +
        `NSSF: KES ${nssf.toFixed(2)}\n` +
        `NHDF: KES ${nhdf.toFixed(2)}\n` +
        `NHIF: KES ${nhif}\n` +
        `PAYE: KES ${paye.toFixed(2)}\n` +
        `Total Deductions: KES ${totalDeductions.toFixed(2)}\n` +
        `Net Salary: KES ${netSalary.toFixed(2)}`
    );
}
