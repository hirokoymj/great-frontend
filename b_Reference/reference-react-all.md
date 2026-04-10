# React Reference (short notes)

- [React Reference (short notes)](#react-reference-short-notes)
  - [useState (object)](#usestate-object)
  - [RESTful](#restful)
  - [useState (array)](#usestate-array)
  - [useMemo](#usememo)
  - [useRef](#useref)
  - [Rendering](#rendering)
  - [useCallback](#usecallback)
  - [useActionState (React 19)](#useactionstate-react-19)

<!-- create index  cmd+Shift+P -->

## useState (object)

- [state, setterFn] = useState()
- Trigger re-render
- Batch: not update immidiately
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
```

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
//✅ [then.catch]
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

```js
- `const cached = useMemo(fn, [A, B, C])`
- ❓ “How do I know which state changed?”
-  👉 You don’t check inside useMemo
- ❗ useMemo does NOT tell you which state changed

const visibleTodos = useMemo(() => {
  const result = showActive ? todos.filter((todo) => !todo.completed) : todos;
  return result;
}, [todos, showActive])
```

## useRef

```js
- ✅ useRef returns a mutable object with a single property { current }.
- ✅ current can hold any value (DOM element, number, object, function, etc.).
```

| Feature      | useState                            | useRef                                                    |
| ------------ | ----------------------------------- | --------------------------------------------------------- |
| Re-render    | Triggers re-render on value change. | Does not trigger re-render on value change.               |
| Purpose      | Manages state that affects UI.      | Creates mutable references, often for DOM or non-UI data. |
| Value Access | Accessed directly (e.g., count).    | Accessed via .current property (e.g., inputRef.current)   |
| Mutability   | setter function                     | Ref.current property                                      |

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

## useCallback

```js
const handleSelect = useCallback((product) => {
  setSelectedProduct(product);
}, []);
<ProductList products={products} onSelect={handleSelect} />;
```

```
- const cachedFn = useCallback(fn, [])
- useCallback returns a stable function reference.
- The function is passed to child components as a prop.
- memo skips child re-render if props are unchanged.useCallback returns a stable function reference
- By default, when a component re-renders, all children re-render.
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
