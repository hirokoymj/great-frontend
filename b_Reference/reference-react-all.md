# React master reference

- [React master reference](#react-master-reference)
  - [useState](#usestate)
  - [useState (array)](#usestate-array)
  - [useMemo](#usememo)
  - [useRef](#useref)
  - [Rendering](#rendering)
  - [useCallback + memo](#usecallback--memo)
  - [useActionState (React 19)](#useactionstate-react-19)
  - [RESTful](#restful)
  - [Propagation](#propagation)
  - [useEffect](#useeffect)
  - [useContext](#usecontext)

<!-- create index  cmd+Shift+P -->

⭐

## useState

- [state, setterFn] = useState()
- Trigger re-render
- Batch: not update immidiately === State as a snapshot
- Update: (prev) => {(...prev, [name]: e.target.value)}
- Update: (prev) => ({...prev, [name]: type === 'checkbox' ? checked : value})
- const { name, type, value, checked } = e.target;

```js
const [person, setPerson] = useState({
  firstName: 'David',
  lastName: 'Smith',
});

function handleChange(e) {
  setPerson({
    ...person,
    [e.target.name]: e.target.value,
  });
}
const [number, setNumber] = useState(0);
onClick={() => {
  setNumber(number + 1);
  setNumber(number + 1);
  setNumber(number + 1);
} //RESULT : 1

onClick={() => {
  setNumber((number) => number + 1);
  setNumber((number) => number + 1);
  setNumber((number) => number + 1);
}} // RESULT : 3
```

## useState (array)

- ADD: `[...arr, newItem]`, DELETE: `filter`, REPLACE: `map`

```js
// Add
setArtists([
	...artists,
	{id: nextId++, name}
]
// Remove
setArtists(artists.filter((a) => a.id !== artist.id));
// Change
setTodos(todos.map(t => {
if (t.id === nextTodo.id) {
	return nextTodo;
} else {
	return t;
}
}));
```

## useMemo

- `const cached = useMemo(() => {return xxx}, [A, B, C])`
- Re-runs only when a dependency (A, B, C) changes. Otherwise returns the cached value.
- “How do I know which state changed?” => You don’t check inside useMemo
- `useMemo` → caches a **value**
- `useCallback` → caches a **function**
- **Use cases (deriving data)**
  - Subtotal / total price in a shopping cart
  - Filtered todo list by status

```js
const visibleTodos = useMemo(() => {
  const result = showActive ? todos.filter((todo) => !todo.completed) : todos;
  return result;
}, [todos, showActive]);

const initialCart = [
  { id: 1, name: 'Laptop', price: 1200, qty: 1 },
  { id: 2, name: 'Mouse', price: 25, qty: 2 },
];

const output = useMemo(() => {
  let items = [...cart];

  const subtotal = items.reduce((acc, currentVal) => {
    return acc + currentVal.price * currentVal.qty;
  }, 0);

  let discountRate = 0;
  if (discountCode === 'SAVE10') {
    discountRate = 0.1;
  } else if (discountCode === 'SAVE20') {
    discountRate = 0.2;
  }

  const discount = subtotal * discountRate;
  const tax = (subtotal - discount) * taxRate;
  const total = subtotal - discount + tax;

  return { subtotal, discount, tax, total };
}, [cart, discountCode, taxRate]);

const computedProducts = useMemo(() => {
  let result = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  if (category !== 'All') {
    result = result.filter((product) => product.category === category);
  }

  if (sortBy === 'price-low-high') {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high-low') {
    result = [...result].sort((a, b) => b.price - a.price);
  }
  return result;
}, [searchTerm, category, sortBy]);
```

## useRef

```js
- ✅ useRef returns a mutable object with a single property { current }.
- ✅ current can hold any value (DOM element, number, object, function, etc.).
- useRef vs useState: A ref value can survive a value during re-render, but a state value cannot.
```

| Feature      | useState                            | useRef                                                         |
| ------------ | ----------------------------------- | -------------------------------------------------------------- |
| Re-render    | Triggers re-render on value change. | Does not trigger re-render on value change.                    |
| Purpose      | Manages state that affects UI.      | Returns a mutable object, store any value( DOM or non-UI data) |
| Value Access | Accessed directly (e.g., count).    | Accessed via .current (e.g., inputRef.current)                 |
| Mutability   | setter function                     | myRef.current                                                  |

## Rendering

- map, object destructure

```js
const products = [
  { id: 1, name: 'Laptop', price: 1200, inStock: true },
  { id: 2, name: 'Chair', price: 150, inStock: false },
];

items.map(({ time, city }) => (
  <li key={`${time}-${city}`}>
    {time}, {city}
  </li>
));
```

---

## useCallback + memo

- App → ProductList → ProductItem with memo
- An event handler will pass down to `App -> ProductList -> ProductItem`
- `const cachedFn = useCallback(fn, [])`
- `const ProductItem = React.memo(()=>{})`
- Returns a stable function reference.
- The function is passed to child components as a prop.
- React.memo skips child re-render if props are unchanged.

```js
//App → ProductList → ProductItem
// App
const handleSelect = useCallback((product) => {}, []);
<ProductList products={products} handleSelect={handleSelect} />;

// ProductList
function ProductList({ products, handleSelect }) {
  return <ProductItem product={product} handleSelect={handleSelect} />;
}

// ProductItem with memo (arrow syntax)
const ProductItem = memo(({ product, handleSelect }) => {
  return <button onClick={() => handleSelect(product)}>Select</button>;
});
```

## useActionState (React 19)

- A hook that manages form state, async submission, and pending UI automatically.
- `const [state, formAction, isPending] = useState(fn, initState)`
- `state` — return value of the action (error or success)
- `formAction` — pass directly to `<form action={formAction}>`
- `isPending` — `true` while the action is running
- No `onChange` needed — state updates automatically from the action's return value.
- (Validation): On submit: Yup schema (`validateAt`)
- (Validation - real-time): `useState` + `onBlur`
- [SimpleForm.jsx](../src/pages/simpleForm/SimpleForm.jsx)

## RESTful

```js
//✅ [async-await / try-catch]
const getUser = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    const data = await response.json();
    setUsers(data);
  } catch (e) {}
};
//✅ [then.then.catch.finally]
const getUser = () =>{
	fetch(url, option)
	.then(response=>{ if(response.ok) return response.json()})
	.then(data=>{})
	.catch(e=>{})
	.finally(()=>{})
}
//✅ [HTTP Options]
------------------------------
method: 'GET/POST/PUT/DELETE'
headers: {
	'Authorization': `Bearer ${token}`,
	'Content-Type': 'application/json'
},
body: JSON.stringify({ user }) //POST
body: JSON.stringify({ ...user, name: 'dummy' }) //PUT
------------------------------
useEffect(()=>{}, [])
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
```

## Propagation

- ` e.stopPropagation()`
- `<div><img onClick={(e) => e.stopPropagation()}></img></div>`

```js
<div onClick={() => setIsActive(false)}>
  <img
    onClick={(e) => {
      e.stopPropagation();
      setIsActive(true);
    }}
  />
</div>
```

---

## useEffect

```js
useEffect(() => {}); //Effects run after *every* render.
useEffect(() => {}, []); //Once (mount only)
useEffect(() => {}, [a]); //Mount + when "a" changes
// Cleanup: runs before next effect + on unmount
useEffect(() => {
  return () => {};
});

//=====useEffect and Async
useEffect(() => {
  fetchBio(person).then((result) => {});
}, [person]);

useEffect(() => {
  fetchData('/planets').then((result) => {});
}, []);

//=== Clean up
useEffect(() => {
  const intervalId = setInterval(onTick, 1000);
  return () => clearInterval(intervalId); // ✅
}, []);
```

## useContext

-Instead of passing down props in nested components, a child component can directly receive data from a parent component.

```js
import {createContext, useContext, useState} from "react"

//===EX1
const ThemeContext = createContext(null)
<ThemeContext value="dark"><App /></ThemeContext>
const theme = useContext(ThemeContext)

//===EX2
const UserContext = createContext(null)
const [user, setUser] = useState(null);
<UserContext value={{user, setUser}}></UserContext> ✅
const {user, setUser} = useContext(UserContext);
<p>You logged in as {user.name}.</p>
onClick={() => setUser({ name: 'Advika' }) }
```
