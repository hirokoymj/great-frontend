// const now = new Date();
// console.log(now);
// console.log(now.toISOString().split('T')[0]); //2025-12-24
// console.log(now.toString().split('T')[0]); //2025-12-24

// //next day: setDate - Changes a date and returns timestamp
// const date = new Date('2025-12-01');
// const date2 = date.setDate(date.getDate() + 1);
// console.log('----next day');
// console.log(date); //2025-12-02T00:00:00.000Z
// console.log('----next day: setDate returns a timestamp');
// console.log(date2); //1764633600000

//- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
//Date object to string (ISO format)

// //--last month (1)
// const d1 = new Date('2025-12-01');
// const start = new Date(d1.getFullYear(), d1.getMonth() - 1, 1);
// const end = new Date(d1.getFullYear(), d1.getMonth(), 0);
// console.log('Last month');
// console.log(start);
// console.log(end);

//--last month (2)
// Use numbers for the constructor: (year, monthIndex, day)
// Month 0 = January, Month 11 = December
// const d1 = new Date(2026, 0, 1); // Local Midnight, Jan 1, 2026
// const end = new Date(d1);
// end.setDate(0);
// const start = new Date(end);
// start.setDate(1);

// console.log('---Date object -> to ISO String');
// console.log('Start:', start.toISOString().split('T')[0]); //2025-12-01
// console.log('End:', end.toISOString().split('T')[0]); // 2025-12-31

//---tomorrow (today is mutated)
// const today = new Date();
// today.setDate(today.getDate() + 1);
// console.log(today); //tomorrow

//---tomorrow (today is NOT mutated.)
const t = new Date();
const tomorrow = new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1);
console.log(t.toISOString()); //2026-01-01T17:32:57.420Z
console.log(tomorrow.toISOString()); //2026-01-02T06:00:00.000Z
