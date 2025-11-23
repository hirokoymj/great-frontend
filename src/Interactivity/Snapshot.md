# State as a Snapshot

**summary (draft)**

```js
- setting state requests a re-render from React
- `setIsSent(true)` tells React to re-render the UI:
- “Rendering” means that React is calling your component, which is a function.
```

https://react.dev/learn/state-as-a-snapshot

## Rendering takes a snapshot in time

“Rendering” means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated using its state at the time of the render.

```js
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}>
        +3
      </button>
    </>
  );
}
```

**Setting state only changes it for the next render**. During the first render, number was 0. This is why, in that render’s onClick handler, the value of number is still 0 even after setNumber(number + 1) was called:

```js
<button
  onClick={() => {
    setNumber(0 + 1);
    setNumber(0 + 1);
    setNumber(0 + 1);
  }}>
  +3
</button>
```

For the next render, number is 1

```js
<button
  onClick={() => {
    setNumber(1 + 1);
    setNumber(1 + 1);
    setNumber(1 + 1);
  }}>
  +3
</button>
```

## Recap

- that setting state requests a re-render from React.
- Setting state requests a new render.
- When you call useState, React gives you a snapshot of the state for that render.

## Challenge

**Challenge 1**

[Challenge 1 of 1: Implement a traffic light](https://react.dev/learn/state-as-a-snapshot#implement-a-traffic-light)
https://codesandbox.io/p/sandbox/g3zhn8

- [Fork](https://codesandbox.io/p/sandbox/sy9zw5)

```js
function handleClick() {
  walk ? alert('Walk') : alert('Stop');
  setWalk(!walk);
}
```
