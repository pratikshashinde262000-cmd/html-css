const products = [
  { name: "Laptop", price: 55000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 }
];

function findMostExpensiveProduct(products) {
  let mostExpensive = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }

  return mostExpensive;
}

console.log(findMostExpensiveProduct(products));