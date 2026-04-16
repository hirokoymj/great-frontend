# Quiz - useRef

✅❌

## Q0: Learn React - Escape Hatches

- [Referencing Values with Refs](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#referencing-values-with-refs)

## Q1: useRef

If you click "Update Ref" 3 times, then "Update State" once, what appears on screen for

- A) Ref: 0 — useRef resets on every render
- B) Ref: 3 — ref.current updates and shows the latest value ❌
- C) Ref: 3 — but only after "Update State" triggers a re-render ✅
- D) Ref: 1 — only the last ref update is kept

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

### Description

- Clicking "Update Ref" 3 times → ref.current becomes 3 in memory, but no re-render happens.
- Clicking "Update State" → triggers a re-render → now the screen reads ref.
- Triggers re-render on value change. Does not trigger re-render on value change.
