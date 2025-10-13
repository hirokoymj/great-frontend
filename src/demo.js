// let myObject = {
//   name: 'Alice',
//   age: 30,
// };

// //Add
// myObject.city = 'New York';

// //Update
// const updated = {
//   ...myObject,
//   age: 31,
// };
// console.log(updated);

//Delete
//delete myObject.age;
// console.log(myObject);
//const result = { age, ...myObject };
//console.log(result);
// Remove the 'age' property
// const { age, ...newObj } = myObject;
// console.log(newObj);

const person = {
  name: 'Bob',
  age: 25,
  country: 'Canada',
};
//Add
// person.city = 'los Angeles';
// console.log(person);

// //Update
// const result1 = { ...person, age: 30 };
// console.log(result1);

// //Delete
// delete person.age;
// console.log(person);

//Delete 2
// person.age = 40;
// console.log(person);
// let output = {};
// Object.keys(person).forEach((key) => {
//   if (key !== 'age') {
//     output[key] = person[key];
//   }
// });
// console.log(output);

//console.log(Object.values(person)); //[ 'Bob', 25, 'Canada' ]
//console.log(Object.keys(person)); //[ 'name', 'age', 'country' ]
console.log(Object.entries(person)); //[ [ 'name', 'Bob' ], [ 'age', 25 ], [ 'country', 'Canada' ] ]
