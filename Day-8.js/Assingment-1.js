// Arrow function for square of Number
const square = (num) => num * num;

// Arrow function for cube of number
const cube = (num) => num * num * num;

// Arrow function to check if number is even
const isEven = (num) => num % 2 === 0;

// Arrow function to calculate total price
const calculateTotal = (price, quantity) => price * quantity;

console.log("square:", square(4));
console.log("cube:", cube(5));
console.log("IsEven:", isEven(6));
console.log("Total:", calculateTotal(2000, 5));