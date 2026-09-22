const numbers = [12, 5, 8, 21, 44, 7, 10, 3];

const evenNumbers = [];
let sum = 0;

for (let num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
        sum += num;
    }
}

console.log("Even numbers:", evenNumbers);
console.log("Sum:", sum);