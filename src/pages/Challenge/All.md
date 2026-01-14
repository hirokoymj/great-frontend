**useState**

- When state updates, a re-rendering happens.
- **Functional update** | **Direct update**
- `prev => ...` vs `setActive(false)`
- React does not update state immediately.
- React may batch multiple state updates together.
- **Functional update**: use when the next state depends on previous state (e.g., toggling a boolean).
- **Direct update**: use when setting a fixed value that does not depend on previous state.
<hr />

**useState(multi-checkbox)**

- sort() mutates the original array → mutating React state directly
- `const sorted = [...selected].sort((a, b) => a.localeCompare(b))`

<hr />

**useRef (return, update)**

- A ref value can survive during rendering.
- A ref persist across renders.
- `const inputRef = useRef(0)`;
- Returns mutable object with a single property - `current`.
- `inputRef.current = 1`

<hr />

**Form**

- radio - Only the selected radio triggers onChange

```js
<input
  type="radio"
  name="level"
  value="junior"
  checked={formData.level === 'junior'}
  onChange={handleChange}
/>;
<input
  type="checkbox"
  name="subscribe"
  checked={formData.subscribe} //true/false
  onChange={handleChange}
/>;
```

```js
const { name, value, type, checked } = e.target;
type === 'checkbox'
  ? setFormData((prev) => ({ ...prev, [name]: checked }))
  : setFormData((prev) => ({ ...prev, [name]: value }));
```

<hr />
<hr />
<hr />
<hr />
<hr />
<hr />

### State management

**Infinite Loop Trigger**: Calling setUsers directly in the body of a component (outside of a useEffect or an event handler) triggers a re-render, which calls setUsers again, leading to a crash or an infinite loop.

```js
//❌ Calling setProducts during render
export default function ProductList() {
  const filteredProducts = setProducts((prev) =>
    prev.filter((d) => d.category === selectedCategory)
  );
}
```

### A Custom hook

```js
//===useFetch
const useFetch = (url, enabled = true) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled) return;
    const fetchData = async () => {};
    fetchData();
  }, [url, enabled]);

  return { data, loading, error };
};
//====useForm
const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    gender: '',
    subscribe: false,
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const resetForm = () => {};

  const validateField = (field, value) => {};
  return {
    formData,
    errors,
    handleChange,
    validateField,
    handleSubmit,
    resetForm,
  };
};
```

### Form state

```js
const [formData, setFormData] = useState({
  name: '',
  email: '',
  role: '',
  gender: '',
  subscribe: false,
});
const handleChange = (event) => {
  const { name, value, type, checked } = event.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));
};
```

### pagination

```js
const [currentPage, setCurrentPage] = useState(1);
const PAGE_SIZE = 10;
const totalPage = Math.ceil(data.length / PAGE_SIZE);
const start = (currentPage - 1) * PAGE_SIZE;
const end = startIndex + PAGE_SIZE;
const paginatedTodos = data.slice(start, end);
<button onClick={() => setCurrentPage((p) => p - 1)} />
<button onClick={() => setCurrentPage((p) => p + 1)} />
```

### Nested object updates

```js
setUser((prev) => ({
  ...prev,
  [name]: value,
}));
```

```js
setUser((prev) => ({
  ...prev, // keep user
  address: {
    ...prev.address, // keep address
    [name]: value, // update city or country
  },
}));
```

```js
user.address.city;
// 2 dots → 2 spreads
```

```js
// level 1 → 1 spread
{ ...prev, key: value }

// level 2 → 2 spreads
{ ...prev, key: { ...prev.key, subKey: value } }
```

<hr />

### useReducer

- `const [state, dispatch] = useReducer(reducer, initialState)`
- dispatch(action) → reducer(state, action) → new state

```js
function reducer(state, action) {
  switch (action.type) {
    case 'ACTION_NAME':
      return newState;

    default:
      return state;
  }
}
```

### useCallback vs useMemo

```js
const handleDelete = useCallback((id) => {
  setUsers((prev) => prev.filter((u) => u.id !== id));
}, []);
<Child onDelete={handleDelete} />;
```

Bonus Questions (Interview Gold)

Q1. What happens if you remove useCallback?

- When the state value ("theme") is updated, re-rendering happens and the handleSelect function is re-created, which is unnecessary.
- (AI) Without useCallback, handleSelect is recreated on every render. Since ProductList receives a new function reference, React.memo cannot prevent re-rendering.

2. Why does React.memo not help without stable props?

- In JavaScript, a function () {} or () => {} always creates a different function. It means that props will never be the same, and your memo optimization won’t work. This is where useCallback comes in handy.
- React.memo only does a shallow comparison of props

```js
Same values + same references = no re-render
Same values + new references = re-render
```

- (AI) React.memo only prevents re-renders when prop references are stable. Without useMemo or useCallback, new references are created on each render, making memoization ineffective.

3. When would this optimization be unnecessary?

- if handleSelect doesn't pass to a Child component, and it stays in the parent component, useCallback is unnecessary.
- The child is not memoized
- Don’t optimize unless there is a measurable problem.
- Props are not passed to children
- The app does not suffer from performance issues”

✅ Use when:

- Function is passed as a prop
- Child is wrapped in React.memo
- Function depends on state/props

❌ Don’t use when:

- Function is local only
- No memoized children

❌ Useless useCallback

```js
const handleClick = useCallback(() => {
  setCount(count + 1);
}, [count]);
```

✅ Better

```js
const handleClick = useCallback(() => {
  setCount((c) => c + 1);
}, []);
```

🧠 How to Decide in 5 Seconds
Ask yourself:

```js
“Am I passing a function or a value?”
Function → useCallback
Value → useMemo
```

2️⃣ Bonus Questions (Interview Gold)

1. What happens if you remove useCallback?
   When the state value ("theme") is updated, re-rendering happens and the handleSelect function is re-created, which is unnecessary.
   The handleSelect should call only when selectedId changes.🚫 Functions are not called on re-render — they are re-created.

✅ Correct Answer

“Without useCallback, handleSelect is recreated on every render. Since ProductList receives a new function reference, React.memo cannot prevent re-rendering.”

2. Why does React.memo not help without stable props?

3.When would this optimization be unnecessary?
if handleSelect doesn't pass to a Child component, and it stays in the parent component, useCallback is unnecessary.

⚠️ This function still changes every render → no benefit
