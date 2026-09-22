const cart = [
  { name: "T-Shirt", price: 500, quantity: 2 },
  { name: "Jeans", price: 1200, quantity: 1 },
  { name: "Shoes", price: 2000, quantity: 2 }
];

let grandTotal = 0;

cart.forEach(product => {
  const total = product.price * product.quantity;
  console.log(`${product.name}: ${total}`);
  grandTotal += total;
});

console.log(`Grand Total: ${grandTotal}`);