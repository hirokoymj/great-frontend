# Separating Events from Effect

**Summary (final)**

```js
//===useEffectEvent
const onSomething = useEffectEvent(callback);
const onTick = useEffectEvent(() => {
  setCount((c) => c + increment);
});
//===Q2
useEffect(() => {
  const id = setInterval(() => {
    setCount((c) => c + increment);
  }, 1000);
  return () => {
    clearInterval(id);
  };
}, [increment]); //!! POINT
//AFTER === removed the "increment" dependency
const onTick = useEffectEvent(() => {
  setCount((c) => c + increment);
});

useEffect(() => {
  const id = setInterval(() => {
    onTick(); //!!
  }, 1000);
  return () => {
    clearInterval(id);
  };
}, []); //!!
```

**Challenge 1**

- [Challenge 1 of 4: Fix a variable that doesn’t update](https://react.dev/learn/separating-events-from-effects#fix-a-variable-that-doesnt-update)
- [Fork](https://codesandbox.io/p/sandbox/cqqgf2)
- [Fork - Solution](https://codesandbox.io/p/sandbox/vnsrrl?file=%2Fsrc%2FApp.js)
- 10/15 (ok), 10/17 (ok)

<hr />

**Challenge 2 (Fix a freezing counter, useEffectEvent)**

- [Challenge 2 of 4: Fix a freezing counter](https://react.dev/learn/separating-events-from-effects#fix-a-variable-that-doesnt-update)
- [Fork](https://codesandbox.io/p/sandbox/t6jytl)
- [Fork - Solution]()
- (Hint) It seems like the Effect which sets up the timer “reacts” to the increment value. Does the line that uses the current increment value in order to call setCount really need to be reactive?
- (Solution) The issue is that the code inside the Effect uses the increment state variable. Since it’s a dependency of your Effect, every change to increment causes the Effect to re-synchronize, which causes the interval to clear. If you keep clearing the interval every time before it has a chance to fire, it will appear as if the timer has stalled.
- Since onTick is an Effect Event, the code inside it isn’t reactive. The change to increment does not trigger any Effects.

```js
//BEFORE
const [count, setCount] = useState(0);
const [increment, setIncrement] = useState(1);

useEffect(() => {
  const id = setInterval(() => {
    setCount((c) => c + increment);
  }, 1000);
  return () => {
    clearInterval(id);
  };
}, [increment]); //!! POINT
//AFTER === removed the "increment" dependency
const onTick = useEffectEvent(() => {
  setCount((c) => c + increment);
});

useEffect(() => {
  const id = setInterval(() => {
    onTick();
  }, 1000);
  return () => {
    clearInterval(id);
  };
}, []); ///
```

- 10/15 (x), 10/16 (x), 10/17

<hr />

**Challenge 3 (skip)**

**Challenge 4 (Fix a delayed notification, chat, useEffectEvent, Difficult)**

- 10/15 (x), 10/17(x)
