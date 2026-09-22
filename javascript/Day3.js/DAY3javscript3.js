let maths = 75;
let science = 80;
let english = 70;
let history = 65;
let computer = 90;
let geography = 78;
let hindi = 85;

// Calculate Total Marks
let totalMarks =
  maths + science + english + history + computer + geography + hindi;

// Calculate Average Marks
let averageMarks = totalMarks / 7;

// Check Pass/Fail
let passed = averageMarks >= 40;

// Print Result
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Passed:", passed);
