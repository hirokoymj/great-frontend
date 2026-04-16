# Topic 5- Common Pitfalls

- [Topic 5- Common Pitfalls](#topic-5--common-pitfalls)
	- [Q1. Stale closure in setInterval ⚠️](#q1-stale-closure-in-setinterval-️)
		- [Answer](#answer)
	- [Q2. Multiple useEffects order ⚠️](#q2-multiple-useeffects-order-️)
		- [Answer](#answer-1)
	- [Q3. Memory leak on unmount ⚠️](#q3-memory-leak-on-unmount-️)
		- [Answer](#answer-2)
	- [Q4. Missing dependency array ✅💀](#q4-missing-dependency-array-)
		- [Answer](#answer-3)
	- [Q5. Unnecessary dependencies ✅](#q5-unnecessary-dependencies-)
	- [Q6. Missing setTimeout cleanup ✅](#q6-missing-settimeout-cleanup-)
	- [Q7. exhaustive-deps ESLint rule ✅](#q7-exhaustive-deps-eslint-rule-)
	- [Q8. Circuit breaker in useEffect ✅💀](#q8-circuit-breaker-in-useeffect-)
	- [Q9. Async useEffect pattern ❌](#q9-async-useeffect-pattern-)
		- [Answer](#answer-4)
	- [Q10. useRef previous value timing ❌](#q10-useref-previous-value-timing-)
		- [Answer](#answer-5)

## Q1. Stale closure in setInterval ⚠️

**What is the bug in this code?**

B) Stale closure — count is always 0 inside the interval, so count never increments correctly ✅

```js
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>{count}</p>;
}
```

### Answer

- The empty dependency array [] means the effect runs once on mount.
- Fix 1 - use functional update with the empty dependenty array []
- Fix 2- Add count in the dependency array.

```js
// Option 1 — functional updater form (best solution)
useEffect(() => {
  const interval = setInterval(() => {
    setCount((prev) => prev + 1); // ✅ always uses latest value
  }, 1000);
  return () => clearInterval(interval);
}, []);

// Option 2 — add count to dependencies
useEffect(() => {
  const interval = setInterval(() => {
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(interval);
}, [count]);
```

## Q2. Multiple useEffects order ⚠️

```js
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect ran');
  }, [count]);

  useEffect(() => {
    console.log('second effect ran');
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
```

### Answer

- The button clicked -> count changes -> re-render -> useEffect 1 -> useEffect 2
- Multiple useEffect top to bottom

## Q3. Memory leak on unmount ⚠️

### Answer

- AbortController is the industry standard solution — it's worth knowing for the Outlier screening!
- Cancel async request.
  https://react.dev/reference/react/useActionState#cancelling-queued-actions
- https://react.dev/learn/synchronizing-with-effects#fix-fetching-inside-an-effect -> Show Answer
- https://developer.mozilla.org/en-US/docs/Web/API/AbortController

```js
useEffect(() => {
  const controller = new AbortController();

  fetch('https://api.example.com/user', { signal: controller.signal })
    .then((res) => res.json())
    .then((data) => setUser(data))
    .catch((err) => {
      if (err.name === 'AbortError') return; // ignore cancelled requests
      console.error(err);
    });

  return () => controller.abort(); // ✅ cancels fetch on unmount
}, []);
```

## Q4. Missing dependency array ✅💀

B) Missing dependency array — useEffect runs after every render, which may cause performance issues

```js
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      console.log('count is:', count);
    }
  });

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
```

### Answer

```js
// ❌ Runs after every render — wasteful
useEffect(() => {
  if (count > 0) {
    console.log('count is:', count);
  }
});

// ✅ Runs only when count changes
useEffect(() => {
  if (count > 0) {
    console.log('count is:', count);
  }
}, [count]);
```

💀 Infinite loop -> state update → re-render → effect runs → state update...

## Q5. Unnecessary dependencies ✅

- B) text is an unnecessary dependency — the effect only uses count, so text should be removed

## Q6. Missing setTimeout cleanup ✅

- B) Missing cleanup — the timeout is never cleared, potentially causing a memory leak

## Q7. exhaustive-deps ESLint rule ✅

- Exactly — double is a function defined inside the component, so it's a new reference every render.
- a new reference vs stable reference

## Q8. Circuit breaker in useEffect ✅💀

- count = 6 → effect runs → count > 5 is true → setCount(0)
- count = 0 → effect runs → count > 5 is false → nothing happens ✅ stops here!
- with the same condition?" If yes → infinite loop. If no → safe! 🎯

```js
// 💀 Infinite loop — no circuit breaker
useEffect(() => {
  setCount(count + 1);
}, [count]);

// ✅ Safe — if condition breaks the cycle
useEffect(() => {
  if (count > 5) {
    setCount(0); // runs once, then condition is false → stops
  }
}, [count]);
```

## Q9. Async useEffect pattern ❌

### Answer

- useEffect callback must return either nothing or a cleanup function.

```js
// ❌ Wrong — async callback returns a Promise, not a cleanup function
useEffect(async () => {
  const res = await fetch('...');
  setData(await res.json());
}, []);
// React expects: nothing OR () => cleanup
// Gets instead: Promise — React ignores it but warns you ⚠️

// ✅ Correct — define async function inside, call it immediately
useEffect(() => {
  async function fetchData() {
    const res = await fetch('...');
    setData(await res.json());
  }
  fetchData(); // call it
}, []);
```

## Q10. useRef previous value timing ❌

What is displayed as "Previous" after clicking the button twice (count = 2)?

A) Previous: 0 — useRef never updates after mount
B) Previous: 2 — useRef always matches the current value
C) Previous: 1 — useRef stores the previous render's value ✅

```js
function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Answer

- The key is timing — useEffect runs **after** the render and paint.

```text
## Initial mount:
- count: 0
- useEffect runs: prevCountRef.current = 0
- Display: Current: 0, Previous: 0

## Click 1 (count = 1):
- render runs -> prevCount = prevCountRef.current = 0
- Display: Current: 1, Previous: 0
- useEffect runs AFTER paint: prevCountRef.current = 1

## Click 2 (count = 2):
- render runs -> prevCount = prevCountRef.current = 1
- Display: Current: 2, Previous: 1
- useEffect runs AFTER paint: prevCountRef.curent = 2
```

🙌

- `useEffect` is always last — after the user already sees the screen.
- Render → useLayoutEffect → Paint → useEffect
