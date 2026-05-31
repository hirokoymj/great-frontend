# Quiz - Rendering

- [Quiz - Rendering](#quiz---rendering)
	- [Sumamry](#sumamry)
	- [Q1: Rendering Image List ❌❌✅(05/25),✅(05/31)](#q1-rendering-image-list-05250531)
		- [Answer](#answer)
	- [Q2: Airport data ✅05/28,](#q2-airport-data-0528)
		- [Answer](#answer-1)
	- [Q3: Ternary vs if condition](#q3-ternary-vs-if-condition)
		- [Answer - if condition](#answer---if-condition)

## Sumamry

```js
const fileName = '/images/airport-board.png'.split('/').pop();
const [file, ext] = fileName.split('.');
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(0, -1));
```

❌✅

## Q1: Rendering Image List ❌❌✅(05/25),✅(05/31)

- airport - board(png);
- city - night(jpg);

```js
import React from 'react';

const images = [
  { id: 1, url: '/images/airport-board.png' },
  { id: 2, url: '/images/city-night.jpg' },
  { id: 3, url: '/images/beach-sunset.jpeg' },
];

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Image List</h1>

      {/* TODO:
		airport - board(png);
		city - night(jpg);
      */}
    </div>
  );
}
```

### Answer

```js
export default function App() {
  const displayImage = () => {
    if (data.length === 0) {
      return <p>No data</p>;
    }
    return (
      <ul style={{ textAlign: 'left' }}>
        {data.map(({ id, url }) => {
          const filename = url.split('/').pop(); // !!IMPORTANT✅
          const [name, ext] = filename.split('.'); //!! IMPORTANT✅
          return (
            <li key={id}>
              {name} ({ext})
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Image List</h1>
      {displayImage()}
    </div>
  );
}
```

---

## Q2: Airport data ✅05/28,

```js
import { useState } from 'react';
const data = [
  {
    time: '10:50',
    city: 'MOSCOW/SVO',
  },
  {
    time: '11:05',
    city: 'EDINBURGH',
  },
  {
    time: '11:05',
    city: 'LONDON/LHR',
  },
  {
    time: '11:10',
    city: 'BUCHAREST/OTP',
  },
  {
    time: '11:30',
    city: 'KIEV/BORISPOL',
  },
  {
    time: '11:35',
    city: 'DUBLIN',
  },
  {
    time: '11:45',
    city: 'EAST MIDLANDS',
  },
  {
    time: '12:15',
    city: 'SOFIA',
  },
  {
    time: '12:30',
    city: 'LONDON/LGW',
  },
  {
    time: '12:30',
    city: 'NEWCASTLE',
  },
  {
    time: '12:40',
    city: 'ST PETERSBURG',
  },
  {
    time: '12:40',
    city: 'LONDON/LGW',
  },
  {
    time: '12:45',
    city: 'MANCHESTER',
  },
];

const Demo = () => {
  const [items] = useState(data);

  return (
    <div>
      <h1>Airport</h1>
      <ul>{}</ul>
    </div>
  );
};
```

### Answer

```js
const Demo = () => {
  const [items] = useState(data);
  return (
    <div>
      <h1>Airport</h1>
      <ul>
        {items.map(({ time, city }, index) => (
          <li key={index}>
            {time}, {city}
          </li>
        ))}

        {items.map(({ time, city }, index) => {
          return <li key={index}>{time}</li>;
        })}
      </ul>
    </div>
  );
};

export default Demo;
```

## Q3: Ternary vs if condition

```js
export default function Demo() {
  return (
    <>
      <h1>IF vs Ternary</h1>
      <UserStatus isLoggedIn={true} />
    </>
  );
}

const UserStatus = ({ isLoggedIn }) => {};
```

### Answer - if condition

```js
export default function Demo() {
  return (
    <>
      <h1>IF vs Ternary</h1>
      <UserStatus isLoggedIn={true} />
    </>
  );
}

const UserStatus = ({ isLoggedIn }) => {
  let message = '';
  if (isLoggedIn) {
    message = <p>User logged in.</p>;
  } else {
    message = <p>Not logged in</p>;
  }
  return <div>{message}</div>;
};
```
