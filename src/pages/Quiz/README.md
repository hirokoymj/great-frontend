# React.js Quiz

**Summary(final)**

```js
- Avoiding mutation
- const { rank, ...rest } = prev;
- return rest;
- if ('rank' in prev) return prev;
- return { ...prev, rank: 'Beginner' };
- React state updates are asynchronous and can be batched.
- setState form gives me the latest state value.
```

## My note

### PlayerProfile (12/26/2025)

- [in operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
- [...rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- Add/Remove a property for a state object

```js
const [player, setPlayer] = useState({
  name: 'Alex',
  level: 3,
  points: 150,
});

//Add a rank==> if in obj, make in car
setPlayer((prev) => {
  if ('rank' in prev) return prev;

  return {
    ...prev,
    rank: 'Beginner',
  };
});
//Remove a rank
setPlayer((prev) => {
  const { rank, ...rest } = prev;
  return rest;
});
```

**Rest**

```js
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log(one); // Output: 1
console.log(two); // Output: 2
console.log(rest); // Output: [3, 4, 5, 6]
```

**Summary(draft)**

```js
- const { rank, ...rest } = prev;
- return rest;
- if ('rank' in prev) return prev;
- return {  ...prev,  rank: 'Beginner',};
```

- Directly reading state can lead to stale values because React state updates are asynchronous and batched.
  Using prev guarantees I’m updating from the latest state, even if multiple updates happen before a re-render.
- React State Is a Snapshot
- React’s render lifecycle
- State immutability
- Concurrency & batching
- Not just syntax, but behavior
- React state updates are **asynchronous** and can be **batched**.
  If I read state directly, I might be reading a stale snapshot from the current render.
  Using the functional setState form gives me the latest state value, so updates are predictable and safe, especially when multiple updates happen quickly.

Real-World Situations Where This Breaks

**Direct access fails when:**

- Multiple button clicks
- Rapid user interactions
- Event handlers firing quickly
- Async callbacks
- Concurrent React rendering
- Strict Mode (double render in dev)

<hr />
