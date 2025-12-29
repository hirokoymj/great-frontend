// //Question 1 (Easy – 4 minutes)
// const scores = [65, 72, 80, 59, 90];
// const hasFailingScore = (scores) => {
//   return scores.some((score) => score < 60);
// };

// console.log(hasFailingScore(scores)); // true

// //Question 2 (Medium – 6 minutes)
// const users = [
//   { name: 'Alice', role: 'admin', active: true },
//   { name: 'Bob', role: 'user', active: false },
//   { name: 'Charlie', role: 'user', active: true },
// ];

// const hasInactiveAdmin = (users) => {
//   const result = users.some((user) => user.role === 'admin' && !user.active);
//   return result;
// };

// console.log(hasInactiveAdmin(users));

// const orders = [
//   { id: 1, total: 120, paid: true },
//   { id: 2, total: 75, paid: true },
//   { id: 3, total: 200, paid: false }, //true
// ];

// const hasUnpaidLargeOrder = (orders) => {
//   return orders.some((order) => order.total > 100 && !order.paid);
// };
// console.log(hasUnpaidLargeOrder(orders)); //trie

// //Array.some() returns true or false value when the given condition (callback argument) matches at least one.

const products = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 80, inStock: true },
];

const hasExpensiveOutOfStockProduct = (products) => {
  return products.some((product) => product.price > 100 && !product.inStock);
};
console.log(hasExpensiveOutOfStockProduct(products));

//I used Array.some() because I only need to know whether at least one item matches the condition, and it stops iterating as soon as it finds one.