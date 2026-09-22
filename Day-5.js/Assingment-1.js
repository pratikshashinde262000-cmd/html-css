let marks = 85;

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
}
else if (marks >= 75 && marks <= 89) {
    console.log("Grade: A");
}
else if (marks >= 60 && marks <= 74) {
    console.log("Grade: B");
}
else if (marks >= 40 && marks <= 59) {
    console.log("Grade: C");
}
else if (marks < 40) {
    console.log("Grade: Fail");
}
else {
    console.log("Invalid Marks");
}

// Check whether student passed
let passed = marks >= 40;

console.log("Marks:", marks);
console.log("Passed:", passed);