// function countBusinessDays(startDate, endDate) {
//   const output = [];
//   const start = new Date(startDate);
//   const end = new Date(endDate);
//   let nextDay = start;

//   while (nextDay < end) {
//     const dayNum = nextDay.getDay();
//     if (dayNum === 0 || dayNum === 6) return;
//     output.push(dayNum);
//     let nextDay = new Date(
//       start.getFullYear(),
//       start.getMonth(),
//       start.getDate() + 1
//     );
//   }
// }

/**
 * Hints
 *  - new Date("YYYY-MM-DD")
 *  - date.getDay() → 0 (Sun) to 6 (Sat)
 *  - date.setDate(date.getDate() + 1) to move to the next day
 *  - countBusinessDays("2023-09-01", "2023-09-07"); //5
 */

function countBusinessDays(startDate, endDate) {
  // your code here
  let start = new Date(startDate);
  const end = new Date(endDate);
  let count = 0;

  while (start <= end) {
    const dayNum = start.getDay();
    if (dayNum !== 0 && dayNum !== 6) count++;
    start.setDate(start.getDate() + 1);
  }
  return count;
}
console.log('========countBusinessDays');
console.log(countBusinessDays('2023-09-01', '2023-09-07'));

// function countBusinessDays(startDate, endDate) {
//   let count = 0;
//   let current = new Date(startDate);
//   const end = new Date(endDate);

//   while (current <= end) {
//     const dayNum = current.getDay();
//     if (dayNum !== 0 && dayNum !== 6) count++;

//     current.setDate(current.getDate() + 1);
//     console.log(current); // 2023-09-02T00:00:00.000Z, 2023-09-03T00:00:00.000Z, ....2023-09-08T00:00:00.000Z
//   }
//   return count;
// }
// console.log(countBusinessDays('2023-09-01', '2023-09-07')); // 5

// setDate - Changes the Date object in place, and returns its new timestamp.
// const start = new Date('2023-09-05');
// start.setDate(start.getDate() + 1);
// console.log(start); // 2023-09-06T00:00:00.000Z

// // Returns a timestamp
// console.log('----Nextday');
// const nextDay = start.setDate(start.getDate() + 1);
// console.log(nextDay); //1694044800000
// console.log(new Date(nextDay));
