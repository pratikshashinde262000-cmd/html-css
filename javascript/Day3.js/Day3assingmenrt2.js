// Shopping Discount Calculator

let productPrice = 800;
let quantity = 3;
let discount = 200;

// Calculate Total Price
let totalPrice = productPrice * quantity;

// Calculate Final Price
let finalPrice = totalPrice - discount;

// Check if Final Price is greater than 1000
let above1000 = finalPrice > 1000;

// Print Details
console.log("Product Price:", productPrice);
console.log("Quantity:", quantity);
console.log("Total Price:", totalPrice);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);
console.log("Above 1000:", above1000);

// Challenge: Quantity > 2 AND Final Price > 1000
let challenge = quantity > 2 && finalPrice > 1000;

console.log("Quantity > 2 AND Final Price > 1000:", challenge);