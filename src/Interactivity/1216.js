const products = [
  { id: 0, name: 'Baklava', count: 1 },
  { id: 1, name: 'Cheese', count: 5 },
  { id: 2, name: 'Spaghetti', count: 2 },
];

//Add
// const output1 = [...products, { id: 3, name: 'aaa', count: 1 }];
// console.log(output1);

// //delete
// const output2 = products.filter((d) => d.id !== 2);
// console.log(output2);

//Edit
const output3 = products.map((d) => {
  if (d.id === 2) {
    return { ...d, count: d.count + 5 };
  }
  return d;
});
console.log(output3);
