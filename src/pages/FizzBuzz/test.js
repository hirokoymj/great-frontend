// function fizzBuzz(n) {
//   // Write your code here
//   const min = 1;
//   const max = n;
//   let output = '';

//   for (let i = 1; i <= max; i++) {
//     output = '';
//     if (i % 3 === 0 && i % 5 === 0) {
//       output = 'FizzBuzz';
//     } else if (i % 3 === 0) {
//       output = 'Fizz';
//     } else if (i % 5 === 0) {
//       output = 'Buzz';
//     } else {
//       output = i;
//     }
//     console.log(output);
//   }
// }

// function main() {
//   const n = parseInt(readLine().trim(), 10);
//   fizzBuzz(n);
// }
// //MATH
// //isEven
// const n = 5;
// const isEven = n % 2 === 0 ? 'even' : 'odd';
// console.log(n % 2);
// console.log(isEven);
// console.log(Math.floor(1.6));
// console.log(Math.ceil(1.4));
// console.log(Math.round(2.4));
// console.log(Math.round(2.5));

// //isFloat
// const num = 3;
// const isInt = num % 1 === 0 ? 'Int' : 'Float';
// console.log(isInt);

// //isInt
// const array = [3, 4.5, 2, 6.3];
// const result = array.filter((num) => num % 1 === 0);

// //FindDigit
// //findDigit(-43,5)); //00043
// const mynum = Math.abs(-43).toString();
// console.log(mynum.padStart(5, '0'));

// const findDigit = (num, length) => {
//   const formatted = Math.abs(num).toString();
//   const result = formatted.padStart(length, '0');
//   console.log(result);
// };
// findDigit(-43, 5);
// // Max, Min
// const array1 = [2, 5, 6, 9];
// const min = Math.min(...array1);
// const max = Math.max(...array1);
// console.log('min', min);
// console.log('max', max);
// //Missing num
// const myArray = [2, 6, 1, 3]; //4
// const minimum = Math.min(...myArray);
// const maximum = Math.max(...myArray);
// const output = [];
// for (let i = minimum; i <= maximum; i++) {
//   if (!myArray.includes(i)) output.push(i);
// }
// console.log('missing num', JSON.stringify(output));
// //SUM
// const myArray1 = [3, 5, 2];
// const sum = myArray1.reduce((acc, currentVal) => {
//   acc = acc + currentVal;
//   return acc;
// }, 0);
// console.log('Sum', sum);
// //Random
// //Math.floor(Math.random() * 100);
// console.log(Math.floor(Math.random() * myArray1.length));
