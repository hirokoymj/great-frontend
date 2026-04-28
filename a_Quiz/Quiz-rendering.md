# Quiz - Rendering

- [Quiz - Rendering](#quiz---rendering)
  - [Q1: (Products) 04/07](#q1-products-0407)
  - [Q2 (Products) 04/07](#q2-products-0407)
  - [Q3 (Tasks) 04/07](#q3-tasks-0407)
  - [Q4 (Rendering data + JS string manipulation) 04/07 ❌](#q4-rendering-data--js-string-manipulation-0407-)
  - [Q5: Airport data](#q5-airport-data)
  - [Q6: falsy value ❌](#q6-falsy-value-) - [Answer](#answer)
  - [Q7 Ternary vs if condition](#q7-ternary-vs-if-condition) - [Answer](#answer-1)
    - [Q8 - Prop management](#q8---prop-management)
    - [Virtual DOM](#virtual-dom)

<!-- create index  Ctrl+Shift+P -->

**improvement**

```js
❌ products.filter((p) => p.inStock === true)
✅ products.filter((p) => p.inStock)
const fileName = url.split('/').pop(); // airport-board.png
const nameOnly = fileName.split('.').slice(0, -1).join('.');
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(0, -1));
```

✅❌

## Q1: (Products) 04/07

```js
import React from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 1200, category: 'Electronics' },
  { id: 2, name: 'Chair', price: 150, category: 'Furniture' },
  { id: 3, name: 'Notebook', price: 5, category: 'Stationery' },
];

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Product List</h1>

      {/* TODO: Render the products here */}
    </div>
  );
}
//===OUTPUT
Laptop - $1200 - Electronics;
Chair - $150 - Furniture;
Notebook - $5 - Stationery;
```

---

## Q2 (Products) 04/07

- green → In Stock
- red → Out of Stock
- filtering (show only in-stock)
- state (useState)
- event handling (toggle button)

```js
import React from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 1200, inStock: true },
  { id: 2, name: 'Chair', price: 150, inStock: false },
  { id: 3, name: 'Notebook', price: 5, inStock: true },
];

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Product Inventory</h1>

      {/* TODO: Render products with stock status */}
    </div>
  );
}
```

## Q3 (Tasks) 04/07

**📋 Requirements**

- Displays a title: Tasks
- Renders all tasks using map()
- Each task shows: title
- If there are no tasks, display:
- "No tasks available"

**⭐ Bonus (Optional)**

- Add a boolean field completed
- Show:
  ✅ for completed tasks
  ⬜ for incomplete tasks

```js
import React from 'react';

const tasks = [];

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Tasks</h1>

      {/* TODO:
        - If no tasks → show "No tasks available"
        - Otherwise → render list
      */}
    </div>
  );
}
```

## Q4 (Rendering data + JS string manipulation) 04/07 ❌

- Output

```js
airport - board(png);
city - night(jpg);
```

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
        - loop through images
        - extract file name from url
        - render file name
      */}
    </div>
  );
}
```

---

## Q5: Airport data

```js
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
```

```js
const Airport = () => {
  const [items] = useState(data);

  return (
    <div>
      <h1>Airport</h1>
      <ul>
        {items.map(({ time, city }) => (
          <li key={`${time}-${city}`}>
            {time}, {city}
          </li>
        ))}
      </ul>
    </div>
  );
};
```

## Q6: falsy value ❌

**What is rendered on screen when count is 0?**

A) Nothing — the `<p>` is hidden when count is 0 ❌

B) The number 0 is rendered on screen ✅

C) An empty `<p>` tag is rendered

```js
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count && <p>Count is: {count}</p>}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

#### Answer

- ❌ This is one of the classic JSX traps.
- In JavaScript, 0 is indeed falsy — but the issue is how React renders it.
- 👉 0 is falsy in JS, but still rendered in React
- 👉 `{count && <p>...</p>}` → returns 0 when count = 0
- ✅ Fix: `count > 0 && ...` OR `!!count && ...`

## Q7 Ternary vs if condition

```js
const UserStatus = ({ isLoggedIn }) => {
  return <div></div>;
};

//<p>Welcome back!</p>
// <p>Please log in.</p>
```

#### Answer

```js
//Ternary - works inside JSX ✅ because it returns a value.
export default function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

// IF condition - must live outside JSX it doesn't return anything
export default function UserStatus({ isLoggedIn }) {
  // if statement must be OUTSIDE the return
  let message;
  if (isLoggedIn) {
    message = <p>Welcome back!</p>;
  } else {
    message = <p>Please log in.</p>;
  }

  return (
    <div>
      {message}
    </div>
  );
}
```

### Q8 - Prop management

- Props drilling - When data has to be passed through a deeply nested child — that's called props drilling. Context API and Redux both solve this.
- Redux is a simple global JavaScript object.
- createContext, value, useContext, useState

      ```js
      const count = useSelector((state) => state.counter.value); // read
      const dispatch = useDispatch();
      ```

- useCallback + React.memo ✅
- useCallback returns a stable function reference (instead of a new function reference) on every render.
-

```js
jsx; // Parent — useCallback prevents new function reference on every render
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);

// Child — React.memo skips re-render if props didn't change
const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});
```

Without useCallback, even React.memo won't help — because a new function reference is created on every Parent render, making the prop always look "changed" to React.memo.

- Prop drilling

- Context API - a child component can receive data directly from Context (useContext hook) instead of passing data from Parent component. It is useful in the nested component structure.

- Redux. - A redux store is a global JavaScript object, and a child component can access directly using useSelector() hook.
- Memory (Caching) - useCallback + React.memo - When an event hander has to pass down a child component from Parent, we should consider to use useCallback + React.memo - because useCallback returns a stable function reference, and it can skip unnecessary render when re-render happens.

### Virtual DOM

- Simple rule: React owns the Virtual DOM, the browser owns the real DOM.

- React ships a nearly empty HTML file + a JavaScript bundle. When a user accesses the site, the browser downloads the JS and React mounts the app using createRoot(). React then builds a Virtual DOM — when state changes, React compares old vs. new and only updates the parts of the real DOM that actually changed.

- The Virtual DOM is a lightweight, in-memory copy of the real DOM that React uses to calculate what changed — the real DOM is the actual HTML elements the browser renders on screen.

React generates the Virtual DOM and compare old and new when state change, and then . Virtual DOM is a lightweight, in-memory copy of the real DOM that React generate using createRoot() and React update only difference

The browser only knows about the real DOM. React keeps its own lightweight copy (Virtual DOM) in memory (JavaScript object), compares old vs. new when state changes, and then tells the browser exactly which real DOM nodes to update.
