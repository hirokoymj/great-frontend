# Date object

**Summary (final)**

- `new Date(year, month, day, hour, minute, second, ms)`
- **setDate()** : Changes **the Date** object and returns new **timestamp**

```js
//---tomorrow: Mutated version ===> setDate is mutated the Date object.
const today = new Date();
today.setDate(today.getDate() + 1);
console.log(today); //tomorrow

//---tomorrow: NO-mutated version ===> today is NOT mutated.
const t = new Date();
const tomorrow = new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1);
console.log(t.toISOString()); //2026-01-01T17:32:57.420Z
console.log(tomorrow.toISOString()); //2026-01-02T06:00:00.000Z

//--last month (d1 is not mutated)
const d1 = new Date('2025-12-01');
const start = new Date(d1.getFullYear(), d1.getMonth() - 1, 1);
const end = new Date(d1.getFullYear(), d1.getMonth(), 0);
console.log('Last month');
console.log(start);
console.log(end);
```

### Example 1 (tomorrow - mutated and not-mutated version)

```js
//---tomorrow (today is mutated)
const today = new Date();
today.setDate(today.getDate() + 1);
console.log(today); //tomorrow

//---tomorrow (today is NOT mutated. === without setDate function)
const t = new Date();
const tomorrow = new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1);
console.log(t.toISOString()); //2026-01-01T17:32:57.420Z
console.log(tomorrow.toISOString()); //2026-01-02T06:00:00.000Z
```

### Example 2 (Last month: mutated and not-mutated version)

```js
//--last month #1
const d1 = new Date('2025-12-01');
const start = new Date(d1.getFullYear(), d1.getMonth() - 1, 1);
const end = new Date(d1.getFullYear(), d1.getMonth(), 0);
console.log('Last month');
console.log(start);
console.log(end);

//--last month #2 -using setDate()
const d1 = new Date(2026, 0, 1); // Local Midnight, Jan 1, 2026
const end = new Date(d1);
end.setDate(0);
const start = new Date(end);
start.setDate(1);

console.log('---Date object -> to ISO String');
console.log('Start:', start.toISOString().split('T')[0]); //2025-12-01
console.log('End:', end.toISOString().split('T')[0]); // 2025-12-31
```

### Example 3 (Comparing two dates)

```js
const d1 = new Date('2024-12-31');
const d2 = new Date('2025-01-01');

if (d2 > d1) {
  console.log('Happy New Year');
}
```

### Example 4 (Condition)

```js
const data = [
  {
    orderid: 'ORD-2025-1001',
    userid: 'USR-4521',
    orderdate: '2025-12-10T14:30:00Z',
    price: 49.99,
  },
  {
    orderid: 'ORD-2025-1002',
    userid: 'USR-8832',
    orderdate: '2025-11-11T15:15:22Z',
    price: 120.5,
  },
  {
    orderid: 'ORD-2025-1003',
    userid: 'USR-1094',
    orderdate: '2025-11-30T18:45:10Z',
    price: 500.0,
  },
];

const now = new Date();
const start = new Date(now.getFullYear(), getMonth() - 1, 1);
const end = new Date(now.getFullYear(), getMonth(), 0); //'2025-11-30T23:59:59Z'

const output = data.filter((item) => {
  const orderDate = new Date(item.orderdate); //Convert "string" to "Date" object
  return item.price > 100 && orderDate >= start && orderDate <= end;
});

console.log(output);
```

### Q1 - Count business days

- new Date("YYYY-MM-DD")
- date.getDay() → 0 (Sun) to 6 (Sat)
- move the next day: `date.setDate(date.getDate() + 1)`

```js
function countBusinessDays(startDate, endDate) {}
countBusinessDays('2023-09-01', '2023-09-07');
// Output: 5
```

**Answer**

```js
function countBusinessDays(startDate, endDate) {
  let count = 0;
  let current = new Date(startDate);
  const end = new Date(endDate);

  while (current <= end) {
    const day = current.getDay(); // 0 = Sun, 6 = Sat
    if (day !== 0 && day !== 6) {
      count++;
    }
    current.setDate(current.getDate() + 1); // move to next day
  }

  return count;
}

countBusinessDays('2023-09-01', '2023-09-07'); // 5
```

2. Mutation vs. Return Value
   The setDate() method performs two separate actions:
   Mutation: It changes the internal state of the existing Date object (start or current) "in place".
   Return: It returns the new date's timestamp as a number.

### References

- https://www.youtube.com/watch?v=LwYwz67l1lA
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

I have a question about the Date object in JavaScript. The next date is generated in both Code1 and Code2. However, when I debug the code, the value in Code 1 is formatted as "2023-09-02T00:00:00.000Z", while the value in Code 2 is printed as "1693958400000". Can you please explain why?

===Code #1
function countBusinessDays(startDate, endDate) {
let count = 0;
let current = new Date(startDate);
const end = new Date(endDate);

while (current <= end) {
const dayNum = current.getDay();
if (dayNum !== 0 && dayNum !== 6) count++;

    current.setDate(current.getDate() + 1);
    console.log(current);

// 2023-09-02T00:00:00.000Z
//2023-09-03T00:00:00.000Z
//2023-09-08T00:00:00.000Z
}
return count;
}
console.log(countBusinessDays('2023-09-01', '2023-09-07')); // 5

===Code 2
const start = new Date('2023-09-05');
console.log(start); //2023-09-05T00:00:00.000Z
const nextDay = start.setDate(start.getDate() + 1);
console.log(nextDay); //1693958400000
