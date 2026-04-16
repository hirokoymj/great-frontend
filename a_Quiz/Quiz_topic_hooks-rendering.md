# Topic - Hooks and rendering

- [Topic - Hooks and rendering](#topic---hooks-and-rendering)
	- [Q1: Stale closure in useEffect ⚠️](#q1-stale-closure-in-useeffect-️)
	- [Q2: React.memo + useCallback ❌](#q2-reactmemo--usecallback-)
		- [Answer](#answer)
	- [Q3: JSX \&\& with falsy 0 ❌](#q3-jsx--with-falsy-0-)
		- [Answer](#answer-1)
	- [Q4: Index as key prop ✅](#q4-index-as-key-prop-)
	- [Q5: useMemo vs useCallback ✅](#q5-usememo-vs-usecallback-)
	- [Q6: useEffect cleanup order ✅❌](#q6-useeffect-cleanup-order-)
		- [Answer](#answer-2)
	- [Q7: Batched state updates ✅✅](#q7-batched-state-updates-)
		- [Answer](#answer-3)
	- [Q8: useRef rendering behavior ❌](#q8-useref-rendering-behavior-)
		- [Answer](#answer-4)
	- [Q9: Fragment vs shorthand ✅](#q9-fragment-vs-shorthand-)
		- [Answer](#answer-5)
	- [Q10: useLayoutEffect vs useEffect ❌✅](#q10-uselayouteffect-vs-useeffect-)
		- [Answer](#answer-6)

## Q1: Stale closure in useEffect ⚠️

What does console.log(count) print after clicking the button 3 times?

- B) 0, 0, 0 — always logs 0

```js
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count);
    }, 1000);
    return () => clearInterval(timer);
  }, []); // onmount only

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Q2: React.memo + useCallback ❌

A) Child does NOT re-render — React.memo prevents it
B) Child re-renders — because handleClick is a new reference each render
C) Child re-renders — because React.memo doesn't work with function props

```js
const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // returns a new function reference on every Parent re-render
    console.log('clicked');
  };

  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

### Answer

- React.memo does a **shallow comparison** of props.
- Since handleClick is recreated as a new function reference on every Parent re-render, React.memo sees it as a changed prop and re-renders Child anyway.
- Wrapping handleClick with useCallback would fix this.

## Q3: JSX && with falsy 0 ❌

### Answer

- `{0 && <Component />}` renders 0 on screen. Always use count > 0 && for safety.

## Q4: Index as key prop ✅

- Since handleClick is recreated as a new function reference on every Parent re-render, React.memo sees it as a changed prop and re-renders Child anyway. Wrapping handleClick with useCallback would fix this.

## Q5: useMemo vs useCallback ✅

A) useMemo returns a memoized value, useCallback returns a memoized function

## Q6: useEffect cleanup order ✅❌

What is the order of console output when the button is clicked once, starting from the initial mount?

A) effect ran -> cleanup ran -> effect ran ✅
B) cleanup ran -> effect ran -> cleanup
C) effect ran -> effect ran -> cleanup
D) cleanup -> cleanup -> effect ran

```js
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect ran');

    return () => {
      console.log('cleanup ran');
    };
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
```

### Answer

1. **Mount** → "effect ran"
2. **count changes** → cleanup of previous effect → "cleanup ran", then new effect → "effect ran"

## Q7: Batched state updates ✅✅

### Answer

B) 1 — all three setCount calls use the same stale count value

setCount(count + 1); 0 + 1 = 1
setCount(count + 1); 0 + 1 = 1
setCount(count + 1); 0 + 1 = 1

## Q8: useRef rendering behavior ❌

If you click "Update Ref" 3 times, then "Update State" once, what appears on screen for Ref?

A) Ref: 0 — useRef resets on every render
B) Ref: 3 — ref.current updates and shows the latest value
C) Ref: 3 — but only after "Update State" triggers a re-render
D) Ref: 1 — only the last ref update is kept

```js
function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const handleState = () => {
    setCount(count + 1);
  };

  const handleRef = () => {
    ref.current += 1;
    console.log(ref.current);
  };

  return (
    <>
      <p>State: {count}</p>
      <p>Ref: {ref.current}</p>
      <button onClick={handleState}>Update State</button>
      <button onClick={handleRef}>Update Ref</button>
    </>
  );
}
```

### Answer

- C) Ref: 3 — but only after "Update State" triggers a re-render

## Q9: Fragment vs shorthand ✅

What is the difference between <React.Fragment> and <> shorthand?

### Answer

B) <React.Fragment> supports the key prop, <> shorthand does not ✅
C) <> renders faster than <React.Fragment> at runtime

## Q10: useLayoutEffect vs useEffect ❌✅

What is the correct order of the console output?

- A) render → useEffect → useLayoutEffect
- B) useLayoutEffect → render → useEffect
- C) render → useLayoutEffect → useEffect ✅

```js
function App() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, []);

  useEffect(() => {
    console.log('useEffect');
  }, []);

  console.log('render');

  return <div>{value}</div>;
}
```

### Answer

- render -> useLayoutEffect -> useEffect
- `useLayoutEffect` fires before browser paint, useEffect fires after.
