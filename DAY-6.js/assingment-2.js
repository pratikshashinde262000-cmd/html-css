// Assignment 2 - Number Analyzer

let totalEven = 0;
let totalOdd = 0;
let sumEven = 0;
let sumOdd = 0;

for (let i = 1; i <= 50; i++) {

    // Check even number
    if (i % 2 === 0) {
        console.log(i + " -> Even");

        totalEven++;
        sumEven += i;
    }

    // Check odd number
    else {
        console.log(i + " -> Odd");

        totalOdd++;
        sumOdd += i;
    }
}

// Additional Requirements
console.log("-----------------------");
console.log("Total Even Numbers:", totalEven);
console.log("Total Odd Numbers:", totalOdd);
console.log("Sum of Even Numbers:", sumEven);
console.log("Sum of Odd Numbers:", sumOdd);

// Challenge
console.log("-----------------------");
console.log("First number divisible by both 3 and 5:");

for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
        break;
    }
}