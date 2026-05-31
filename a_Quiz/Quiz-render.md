# Quiz - Rendering

- [Quiz - Rendering](#quiz---rendering)
	- [Sumamry](#sumamry)
	- [Q1: Rendering Image List ❌❌✅(05/25),✅(05/31)](#q1-rendering-image-list-05250531)
		- [Answer](#answer)
	- [Q2: Ternary vs if condition](#q2-ternary-vs-if-condition)
		- [Answer - if condition](#answer---if-condition)
	- [Q3: If condition - dynamic CSS ✅(05/31)](#q3-if-condition---dynamic-css-0531)
		- [Answer](#answer-1)

## Sumamry

```js
const fileName = '/images/airport-board.png'.split('/').pop();
const [file, ext] = fileName.split('.');

items.map(({ id, name }) => {
  return <p></p>;
});
let message = <p>test</p>;
let imgClass=""
<div onClick={}>
	<img onClick={ e.stopPropagation()}>
</div>
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

## Q2: Ternary vs if condition

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

## Q3: If condition - dynamic CSS ✅(05/31)

- [Challenge 1 of 3: Add and remove a CSS class](https://react.dev/learn/reacting-to-input-with-state#add-and-remove-a-css-class)
- Two visual states: when the image is active, and when the image is inactive:
- When the image is active, the CSS classes are background and picture picture--active.
- When the image is inactive, the CSS classes are background background--active and picture.

```js
import { useState } from 'react';
import './styles4.css';

export default function Picture() {
  return (
    <div className="background background--active">
      <img
        className="picture"
        alt="Rainbow houses"
        src="https://react.dev/images/docs/scientists/5qwVYb1.jpeg"
      />
    </div>
  );
}
```

### Answer

```js
import { useState } from 'react';
import './styles4.css';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses"
        src="https://react.dev/images/docs/scientists/5qwVYb1.jpeg"
      />
    </div>
  );
}
```
