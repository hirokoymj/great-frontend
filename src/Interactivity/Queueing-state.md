# Queueing a Series of State Updates

**References:**

- https://react.dev/learn/queueing-a-series-of-state-updates

## Ex.1

```js
const [number, setNumber] = useState(0);
<button
  onClick={() => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  }}>
  +3
</button>;
// setNumber(0 + 1);
// setNumber(0 + 1);
// setNumber(0 + 1);
// Result: 1 -> 2 -> 3 -> 4
```

| queued update | n   | returns   |
| ------------- | --- | --------- |
| number + 1    | 0   | 0 + 1 = 1 |
| number + 1    | 0   | 0 + 1 = 1 |
| number + 1    | 0   | 0 + 1 = 1 |

- **Result**: Each render’s state values are fixed, so the value of number inside the first render’s event handler is always 0, no matter how many times you call setNumber(1):

## Ex.2

- [Updating the same state multiple times before the next render](https://react.dev/learn/queueing-a-series-of-state-updates#updating-the-same-state-multiple-times-before-the-next-render)

```js
const [number, setNumber] = useState(0);
<button
  onClick={() => {
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
  }}>
  +3
</button>;
```

| queued update | n   | returns   |
| ------------- | --- | --------- |
| n => n + 1    | 0   | 0 + 1 = 1 |
| n => n + 1    | 1   | 1 + 1 = 2 |
| n => n + 1    | 2   | 2 + 1 = 3 |

- `n => n + 1` is called an updater function
- React stores 3 as the final result and returns it from useState.

## Ex.3

- [What happens if you update state after replacing it](https://react.dev/learn/queueing-a-series-of-state-updates#what-happens-if-you-update-state-after-replacing-it)

```js
const [number, setNumber] = useState(0);

<button
  onClick={() => {
    setNumber(number + 5);
    setNumber((n) => n + 1);
  }}>
  Increase the number
</button>;
```

| queued update    | n         | returns   |
| ---------------- | --------- | --------- |
| ”replace with 5” | 0(unused) | 5         |
| n => n + 1       | 5         | 5 + 1 = 6 |

**Result:**
React stores 6 as the final result and returns it from useState.

## Ex.4

- [What happens if you replace state after updating it](https://react.dev/learn/queueing-a-series-of-state-updates#what-happens-if-you-replace-state-after-updating-it)

```js
const [number, setNumber] = useState(0);
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>
```

| queued update     | n          | returns   |
| ----------------- | ---------- | --------- |
| ”replace with 5”  | 0(unused)  | 5         |
| n => n + 1        | 5          | 5 + 1 = 6 |
| ”replace with 42” | 6 (unused) | 42        |

- Result: Then React stores 42 as the final result and returns it from useState.

## Note:

```text
You may have noticed that setState(5) actually works like setState(n => 5), but n is unused!
```

## Summary

- **An updater function** (e.g. n => n + 1) gets added to the queue.
- **Any other value (e.g. number 5)** adds “replace with 5” to the queue, ignoring what’s already queued.

## Challenge

**Challenge 1**

- [Challenge 1 of 2: Fix a request counter ](https://react.dev/learn/queueing-a-series-of-state-updates#fix-a-request-counter)
- [Fork](https://codesandbox.io/p/sandbox/fqpzwf)
- [Fork solution](https://codesandbox.io/p/sandbox/6np4gg)
- Solution: Inside the handleClick event handler, the values of pending and completed correspond to what they were at the time of the click event. For the first render, pending was 0, so setPending(pending - 1) becomes setPending(-1), which is wrong. Since you want to increment or decrement the counters, rather than set them to a concrete value determined during the click, you can instead pass the updater functions:

```js
setPending(pending + 1);
await delay(3000);
setPending(pending - 1);
setCompleted(completed + 1);
```

```js
setPending((pending) => pending + 1);
await delay(3000);
setPending((pending) => pending - 1);
setCompleted((completed) => completed + 1);
```

# useState

https://react.dev/reference/react/useState#examples-updater

## The difference between passing an updater and passing the next state directly

**Example 1 of 2: Passing the updater function**
[]()

```js
export default function Counter() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge((a) => a + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}>
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}>
        +1
      </button>
    </>
  );
}
```

[Example 2 of 2: Passing the next state directly](https://react.dev/reference/react/useState#passing-the-next-state-directly)

```js
export default function Counter() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge(age + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}>
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}>
        +1
      </button>
    </>
  );
}
```
