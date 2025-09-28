# Reusing Logic with Custom Hooks

## Summary (FINAL)

**References:**

- url
- url

## Ex.1 - title (short text)

## Summary (DRAFT)

**Recap**
Custom Hooks let you share logic between components.
Custom Hooks must be named starting with use followed by a capital letter.
Custom Hooks only share stateful logic, not state itself.
You can pass reactive values from one Hook to another, and they stay up-to-date.
All Hooks re-run every time your component re-renders.
The code of your custom Hooks should be pure, like your component’s code.
Wrap event handlers received by custom Hooks into Effect Events.
Don’t create custom Hooks like useMount. Keep their purpose specific.
It’s up to you how and where to choose the boundaries of your code.

## Quiz

**====Quesiton 1====**

- [Challenge 1 of 5: Extract a useCounter Hook ](https://react.dev/learn/reusing-logic-with-custom-hooks#extract-a-usecounter-hook)
- Solution: Notice that App.js doesn’t need to import useState or useEffect anymore.

<hr />

**====Quesiton 2====**

- [Challenge 2 of 5: Make the counter delay configurable ](https://react.dev/learn/reusing-logic-with-custom-hooks#make-the-counter-delay-configurable)
- Solution
  Pass the delay to your Hook with useCounter(delay). Then, inside the Hook, use delay instead of the hardcoded 1000 value. You’ll need to add delay to your Effect’s dependencies. This ensures that a change in delay will reset the interval.

```js
<input
  type="range"
  value={delay}
  min="10"
  max="2000"
  onChange={(e) => setDelay(Number(e.target.value))}
/>;
useEffect(() => {
  const id = setInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);
```

<hr />

**====Quesiton 2====**

- [Challenge 3 of 5: Extract useInterval out of useCounter](https://react.dev/learn/reusing-logic-with-custom-hooks#extract-useinterval-out-of-usecounter)

**====Quesiton 3====**
