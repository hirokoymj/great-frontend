# useMemo, useCallback

**Summary (final)**

- (useMemo) Prevents recalculating the value on every render.
- (useMemo) Derived data
- (useCallback) Same values + same function references = NO re-render
- (useCallback) Same values + new function references = re-render
- (useCallback) `React.memo`
- useMemo -> memorized value, useCallBack => function itself

```text
const memorized = useMemo(() => { return num + 1;}, [num]);
const memorized = useMemo(() => num + 1, [num]);

const [a, setA] = useState(1);
const memoFunc = useCallback(() => a + 1, [a]);
<button onClick={memoFunc} />;
```

| Feature     | `useMemo`                    | `useCallback`            |
| ----------- | ---------------------------- | ------------------------ |
| Memoizes    | A **computed value**         | A **function reference** |
| Returns     | The **result** of a function | The **function itself**  |
| Common with | Derived data                 | `React.memo`             |

## starter 1 (useMemo)

**Wrong**

```js
const total = useMemo(() => {
  filtered.reduce((acc, currentVal) => {
    acc = currentVal.price + acc;
    return acc;
  }, 0),
    [search];
});
```

**Answer**

```js
const total = useMemo(() => {
  return filtered.reduce((acc, product) => acc + product.price, 0);
}, [filtered]);
```

- useMemo prevents recalculating the total price on every render and only recomputes it when the filtered product list changes, which is useful if the calculation is expensive or the list is large.

<hr />

## Starter 2 (useMemo)

**Wrong-1**

```js
//redundant state variable:
const [users, setUsers] = useState(USERS);
```

```js
const averageAge = useMemo(() => {
  if (visibleUsers.length === 0) return 0;

  const sum = visibleUsers.reduce((acc, user) => acc + user.age, 0);
  return (sum / visibleUsers.length).toFixed(2);
}, [visibleUsers]);
```

- useMemo ensures the calculation only runs when that list changes.

**Wrong-2**

```js
const filtered = PRODUCTS.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);
'laptop'.includes('la'); //true
'phone'.includes('ph'); //true
```

- useMemo prevents recalculating the total price on every render and only recomputes it when the filtered product list changes.
- I memoized the average age because it’s derived data that depends on the visible users list, and useMemo ensures the calculation only runs when that list changes.”

## Starter 3 (useMemo, useCallback)

## Quiz 1

**Question 1**: Use when: (useMemo)

**Answer**

- Calculation is expensive
- Result is derived from props/state.

<hr />

**Question 2**
Use when: (useCallback)

**Answer**

- Function is passed as a prop
- Child is wrapped in React.memo
- Function depends on state/props
- ❌ Don’t use when:
  - Function is local only.
  - No memoized children.

<hr />

**Question 3**
Please fix the problem.

```js
const handleClick = useCallback(() => {
  setCount(count + 1);
}, [count]);
```

**Answer**

- This function still changes every render → no benefit.

```js
const handleClick = useCallback(() => {
  setCount((c) => c + 1);
}, []);
```

<hr />

**Question 4:**
Which hook should you use?

```js
const handleSearch = () => {
  return products.filter((p) => p.name.includes(query));
};
```

**Answer 4**
useMemo

```js
const handleSearch = useMemo(() => {
  return products.filter((p) => p.name.includes(query));
}, [products, query]);
```

<hr />

**Question 5**
Is useCallback always necessary here?

**Answer 5**

- Only if the child is memoized or the function passes as props. If a function is local only and no memorized child, it is unnecessary.

**Question 6**
❓ What happens if you remove useCallback?

**Answer 6**
Without useCallback, handleSelect is **recreated** on every render. Since ProductList receives a **new** function reference, React.memo cannot prevent re-rendering.

<hr />

## Summary (draft)

- useMemo avoids recalculation on every render.
- useCallback memoizes **a function reference** to avoid unnecessary re-creation.
- useCallback -> function reference
- React.memo -> check if a function reference is same as a previous one.
- Value → useMemo-> value

- `const value = useMemo(() => {return d;}, [])`
- Prevcents recalculating a value on every render.
- Same values + same references = no re-render
- Same values + new references = re-render
- “Functions are recreated on every render in JavaScript, which changes their reference. useCallback stabilizes the function reference so React.memo can work properly.”

```text
const memorized = useMemo(() => { return num + 1;}, [num]);
const memorized = useMemo(() => num + 1, [num]);

const [a, setA] = useState(1);
const memoFunc = useCallback(() => a +1, [a]);
<button onClick={memoFunc} />
```

## History

- 1/7, 1/8
