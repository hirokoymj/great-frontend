# bQueueing a Series of State Updates

- You might expect that clicking the “+3” button will increment the counter three times because it calls setNumber(number + 1) three times:

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
//
setNumber(0 + 1);
setNumber(0 + 1);
setNumber(0 + 1);
```

- However, as you might recall from the previous section, each render’s state values are fixed, so the value of number inside the first render’s event handler is always 0, no matter how many times you call setNumber(1):

- But there is one other factor at play here. React waits until all code in the event handlers has run before processing your state updates. **This is why the re-render only happens after all these setNumber() calls.**

- This might remind you of a waiter taking an order at the restaurant. A waiter doesn’t run to the kitchen at the mention of your first dish! Instead, they let you finish your order, let you make changes to it, and even take orders from other people at the table.

## Updating the same state multiple times before the next render

```js
setNumber((n) => n + 1);
setNumber((n) => n + 1);
setNumber((n) => n + 1);
```

- Here, n => n + 1 is called an **updater function**. When you pass it to a state setter:
- React queues this function to be processed after all the other code in the event handler has run.
- During the next render, React goes through the queue and gives you the final updated state.

|     |     |     |
| --- | --- | --- |
|     |     |     |
|     |     |     |
|     |     |     |

## What happens if you update state after replacing it

```js
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>
```

## Note:

```text
You may have noticed that setState(5) actually works like setState(n => 5), but n is unused!
```

## What happens if you replace state after updating it

```js
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>
```

1. `setNumber(number + 5)`: number is 0, so setNumber(0 + 5). React adds “replace with 5” to its queue.
2. `setNumber(n => n + 1)`: n => n + 1 is an **updater function**. React adds that function to its queue.
3. `setNumber(42)`: React adds “replace with 42” to its queue

|     |     |     |
| --- | --- | --- |
|     |     |     |
|     |     |     |
|     |     |     |

Then React stores 42 as the final result and returns it from useState.

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
