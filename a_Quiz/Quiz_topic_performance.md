# Topic - Performance

- [Topic - Performance](#topic---performance)
	- [Q1: React.memo basics ✅](#q1-reactmemo-basics-)
	- [Q2: useMemo recomputation ✅](#q2-usememo-recomputation-)
	- [Q3: React.lazy \& Suspense ✅](#q3-reactlazy--suspense-)
	- [Q4: React.memo + object props ❌](#q4-reactmemo--object-props-)
		- [Answer](#answer)
	- [Q5: useMemo with multiple states ✅](#q5-usememo-with-multiple-states-)
	- [Q6: setState same value bail out ❌](#q6-setstate-same-value-bail-out-)
		- [Answer](#answer-1)
	- [Q7: Lazy loading timing ✅](#q7-lazy-loading-timing-)
	- [Q8: Default child re-render ✅](#q8-default-child-re-render-)
	- [Q9: useMemo dependency array ❌](#q9-usememo-dependency-array-)
		- [Answer](#answer-2)
	- [Q10: useMemo performance benefit✅](#q10-usememo-performance-benefit)

## Q1: React.memo basics ✅

## Q2: useMemo recomputation ✅

## Q3: React.lazy & Suspense ✅

## Q4: React.memo + object props ❌

Why does Child re-render every time "Increment" is clicked, despite using React.memo?

- A) React.memo doesn't work with object props ❌
- B) style is a new object reference on every render, so React.memo's shallow comparison sees it as changed ✅
- C) React.memo only prevents re-renders when no props are passed
- D) The color property inside style changes on every render

```js
function Parent() {
  const [count, setCount] = useState(0);

  const style = { color: 'red' };

  return (
    <>
      <Child style={style} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

const Child = React.memo(({ style }) => {
  console.log('Child rendered');
  return <p style={style}>Hello</p>;
});
```

### Answer

- B) style is a new object reference on every render, so React.memo's shallow comparison sees it as changed ✅
- React.memo uses shallow comparison to check if each prop's reference is the same as the previous render. If all props are unchanged, the re-render is skipped. If any prop has a new reference, the component re-renders.
- Child re-render every time
- useMemo(fn, [])

```js
// new reference each time! ⚠️
const style = { color: 'red' };
// Same reference across renders unless deps change
const style = useMemo(() => ({ color: 'red' }), []);
```

## Q5: useMemo with multiple states ✅

## Q6: setState same value bail out ❌

### Answer

— React bails out of re-render when new state equals current state via Object.is comparison.

## Q7: Lazy loading timing ✅

## Q8: Default child re-render ✅

## Q9: useMemo dependency array ❌

Is there a problem with this useMemo usage?

- A) No problem — items never changes so an empty dependency array is correct ❌
- B) Yes — items should be in the dependency array since it's used inside useMemo ✅
- C) Yes — useMemo cannot be used with reduce, use useCallback instead
- D) Yes — useMemo requires at least one dependency, empty array is invalid

```js
function App() {
  const [count, setCount] = useState(0);

  const items = [1, 2, 3, 4, 5]; // a new reference created on every render.

  const total = useMemo(() => {
    console.log('calculating total...');
    return items.reduce((acc, item) => acc + item, 0);
  }, []);

  return (
    <div>
      <p>Total: {total}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Answer

— items is defined inside the component, which means it's recreated as a new array reference on every render.

```js
// ✅ Option 1 — add items to deps
const total = useMemo(() => {
  return items.reduce((acc, item) => acc + item, 0);
}, [items]);

// ✅ Option 2 — move items outside component
const items = [1, 2, 3, 4, 5]; // Stable reference

function App() {
  const total = useMemo(() => {
    return items.reduce((acc, item) => acc + item, 0);
  }, []); // ✅ safe now, items is not inside component
}
```

## Q10: useMemo performance benefit✅
