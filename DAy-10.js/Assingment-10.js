const products = [
    { name: "Laptop", price: 70000 },
    { name: "Mobile", price: 28000 },
    { name: "Headphones", price: 700 },
    { name: "Smart Watch", price: 5500 },
    { name: "Keyboard", price: 900 }
];

// 1. Print all products
console.log("All Products:");
products.forEach(product => {
    console.log(product.name, "-", "₹" + product.price);
});

// 2. Create a new array containing product names
const productNames = products.map(product => product.name);

console.log("\nProduct Names:");
console.log(productNames);

// 3. Find products above ₹5000
const productsAbove5000 = products.filter(product => product.price > 5000);

console.log("\nProducts above ₹5000:");
console.log(productsAbove5000);

// 4. Find the first product below ₹1000
const firstProductBelow1000 = products.find(product => product.price < 1000);

console.log("\nFirst product below ₹1000:");
console.log(firstProductBelow1000);