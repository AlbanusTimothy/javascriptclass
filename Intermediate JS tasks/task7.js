// Write that prompts the user to input student marks. The input should be between 0 and 100.Then output the correct grade: 
// A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40
let marks = Number(prompt("Enter student marks (0 - 100):"));

// validate input
if (marks < 0 || marks > 100) {
    alert("Invalid marks! Must be between 0 and 100.");
} else {
    let grade;

    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    alert("Grade: " + grade);
}
