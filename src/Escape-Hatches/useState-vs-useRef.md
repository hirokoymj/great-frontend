# useState vs useRef

| Feature      | useState                            | useRef                                                    |
| ------------ | ----------------------------------- | --------------------------------------------------------- |
| Re-render    | Triggers re-render on value change. | Does not trigger re-render on value change.               |
| Purpose      | Manages state that affects UI.      | Creates mutable references, often for DOM or non-UI data. |
| Value Access | Accessed directly (e.g., count).    | Accessed via .current property (e.g., inputRef.current)   |
| Mutability   | setter function                     | Ref.current property                                      |

**Summary (FINAL)**

```text
useState - Trigger re-render on value change, Affect UI
useRef - Does NOT trigger re-render on value change, Not affect UI using non-UI data (clearTimer)
Access: state, myRef.current,
Update: setter function, Ref.current
clearInterval(intervalRef.current);
```

**References:**

- https://react.dev/learn/referencing-values-with-refs
- url

## Ex.1 - stopwatch

**Example: building a stopwatch**

- This information is used for rendering, so you’ll keep it in state:
  ```js
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  ```
- Since the interval ID is not used for rendering, you can keep it in a ref:

```js
import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
```

**Differences between refs and state**

useState vs useRef

| Feature      | useState                            | useRef                                                    |
| ------------ | ----------------------------------- | --------------------------------------------------------- |
| Re-render    | Triggers re-render on value change. | Does not trigger re-render on value change.               |
| Purpose      | Manages state that affects UI.      | Creates mutable references, often for DOM or non-UI data. |
| Value Access | Accessed directly (e.g., count).    | Accessed via .current property (e.g., inputRef.current)   |
| Mutability   | setter function                     | Ref.current property                                      |

## Ex.2 - Counter useState vs useRef

**Using useState**

```js
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>You clicked {count} times</button>;
}
```

- Because the count value is displayed, it makes sense to use a state value for it. When the counter’s value is set with setCount(), React re-renders the component and the screen updates to reflect the new count.

**useRef - does not update its text:**

```js
export default function Counter() {
  let countRef = useRef(0);

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
  }

  return (
    <button onClick={handleClick}>You clicked {countRef.current} times</button>
  );
}
```

- If you tried to implement this with a ref, React would never re-render the component, so you’d never see the count change! See how clicking this button does not update its text:

**When to use refs**

## Summary (DRAFT)

```text
useState - Trigger re-render on value change, Affect UI
useRef - Does NOT trigger re-render on value change, Not affect UI using non-UI data (clearTimer)
Access: state, myRef.current,
Update: setter, myRef.current
clearInterval(intervalRef.current);

```

## Quiz

**====Quesiton 1====**

- [Challenge 1 of 4: Fix a broken chat input ](https://react.dev/learn/referencing-values-with-refs#fix-a-broken-chat-input)
- Solution
  Whenever your component re-renders (such as when you set state), all local variables get initialized from scratch. This is why you can’t save the timeout ID in a local variable like timeoutID and then expect another event handler to “see” it in the future. Instead, store it in a ref, which React will preserve between renders.
- 9/26

<hr />

**====Quesiton 2====**

- [Challenge 2 of 4: Fix a component failing to re-render ](https://react.dev/learn/referencing-values-with-refs#fix-a-component-failing-to-re-render)
- Solution
  In this example, the current value of a ref is used to calculate the rendering output: {isOnRef.current ? 'On' : 'Off'}. This is a sign that this information should not be in a ref, and should have instead been put in state. To fix it, remove the ref and use state instead:
- 9/26

<hr />

**====Quesiton 3====**

<hr />

**====Quesiton 4====**

- [Challenge 4 of 4: Read the latest state](https://react.dev/learn/referencing-values-with-refs#read-the-latest-state)
- Solution
  State works like a snapshot, so you can’t read the latest state from an asynchronous operation like a timeout. However, you can keep the latest input text in a ref. A ref is mutable, so you can read the current property at any time. Since the current text is also used for rendering, in this example, you will need both a state variable (for rendering), and a ref (to read it in the timeout). You will need to update the current ref value manually.
- 9/26

<hr />
