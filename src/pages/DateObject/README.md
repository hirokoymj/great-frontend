# Date object

**Summary (final)**

- Date objects - Objects that contain dates and times.
- `Date(year, month, day, hour, minute, second, ms)`

```js
const date = new Date(); //current time
const date1 = new Date(2024, 0, 1, 2, 3, 4, 5); //2024-01-01T08:03:04.005Z
const date2 = new Date('2024-01-01T12:00:00Z'); //T=time, Z=UTC
//===today, tomorrow, yesterday
const now = new Date();
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
const yesterday = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() - 1
);
console.log(today.toLocaleDateString()); //12/19/2025
console.log(tomorrow.toLocaleDateString()); //12/20/2025
console.log(yesterday.toLocaleDateString()); //12/18/2025
//===Last month
const start = new Date(now.getFullYear(), now.getMonth() - 1, 1); //(Year, Month - 1, Day 1)
const end = new Date(now.getFullYear(), now.getMonth(), 0); //(Year, Current Month, Day 0)

///===Get the data for the price greater than 100 last month(11/1-11/30).
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
];
const output = data.filter((item) => {
  const orderDate = new Date(item.orderdate); //Convert "string" to "Date" object
  return item.price > 100 && orderDate >= start && orderDate <= end;
});
```

### Basic 1

```js
const date = new Date(); //current time
const date1 = new Date(2024, 0, 1, 2, 3, 4, 5); //2024-01-01T08:03:04.005Z
const date2 = new Date('2024-01-01T12:00:00Z'); //2024-01-01T12:00:00.000Z (T=time, Z=UTC)
console.log(date);
console.log(date1);
console.log(date2);

const year = date.getFullYear();
const month = date.getMonth(); //between 0 and 11 (0=January)
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay(); //between 0 and 6 (0=Sunday)
console.log(year);
console.log(month);
console.log(day);
console.log(minutes);
console.log(dayOfWeek);

const date3 = new Date();
date3.setFullYear(2024);
date3.setMonth(0);
date3.setDate(1);
date3.setHours(2);
date3.setHours(3);
date3.setSeconds(4);
console.log(date3.toLocaleString()); //1/1/2024, 3:12:04 AM
```

### Example 1 (today, tomorrow and yesterday)

```js
//===
const today = new Date();
const tomorrow = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 1
);
const yesterday = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 1
);

console.log(today.toLocaleDateString()); //12/19/2025
console.log(tomorrow.toLocaleDateString()); //12/20/2025
console.log(yesterday.toLocaleDateString()); //12/18/2025
```

### Example 2 (Last month)

```js
const now = new Date();
const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1); //(Year, Month - 1, Day 1)
const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0); //(Year, Current Month, Day 0)

console.log('===last month===');
console.log(startOfLastMonth.toLocaleDateString()); //11/1/2025
console.log(endOfLastMonth.toLocaleDateString()); //11/30/2025
```

### Example 3 (Comparing two dates)

```js
const d1 = new Date('2024-12-31');
const d2 = new Date('2025-01-01');

if (d2 > d1) {
  console.log('Happy New Year');
}
```

### Example 4 (Condition: a price is greater than 100 on last month.)

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

### References

- https://www.youtube.com/watch?v=LwYwz67l1lA
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
