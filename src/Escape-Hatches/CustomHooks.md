# Reusing Logic with Custom Hooks

**Summary (final)**

```js
// Custom Hook is a JavaScript function to share logic btw components.
//=== Ex.1
const count = useCounter();
export function useCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return count;
}
//=== Ex.2 delay
const [delay, setDelay] = useState(1000);
const count = useCounter(delay);
//=== Ex.3
const cities = useData(`/api/cities?country=${country}`);
const areas = useData(`/api/areas?city=${city}`);

function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [url]);
  return data;
}
```

**References:**

- https://react.dev/learn/reusing-logic-with-custom-hooks

## Ex.1 - useData

- [When to use custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks#when-to-use-custom-hooks)

```js
function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [url]);
  return data;
}
//
function ShippingForm({ country }) {
  const cities = useData(`/api/cities?country=${country}`);
  const [city, setCity] = useState(null);
  const areas = useData(city ? `/api/areas?city=${city}` : null);
```

## Recap

- Custom Hooks let you share logic between components.
- Custom Hooks only share stateful logic, not state itself.
  You can pass reactive values from one Hook to another, and they stay up-to-date.
- All Hooks re-run every time your component re-renders.

## Challenge

**Challenge 1**

- [Challenge 1 of 5: Extract a useCounter Hook ](https://react.dev/learn/reusing-logic-with-custom-hooks#extract-a-usecounter-hook)
- [Fork](https://codesandbox.io/p/sandbox/wf49lm?file=%2Fsrc%2FApp.js)
- [Fork solution](https://codesandbox.io/p/sandbox/779q4z?file=%2Fsrc%2FApp.js)
- Notice that App.js doesn’t need to import useState or useEffect anymore.

```js
export default function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
```

- 10/9 (ok), 10/10 (review)

<hr />

**Challenge 2**

- [Challenge 2 of 5: Make the counter delay configurable](https://react.dev/learn/reusing-logic-with-custom-hooks#make-the-counter-delay-configurable)
- [Fork](https://codesandbox.io/p/sandbox/w6cdfc?file=%2Fsrc%2FApp.js)
- [Fork solution](https://codesandbox.io/p/sandbox/q55v6y)
- 10/9 (ok)
<hr />

**Challenge 3 (Passing an event handler to custom hooks)**

- [Challenge 3 of 5: Extract useInterval out of useCounter](https://react.dev/learn/reusing-logic-with-custom-hooks#extract-useinterval-out-of-usecounter)
- Note that there is a bit of a problem with this solution, which you’ll solve in the next challenge.

```js
export function useCounter(delay) {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount((c) => c + 1);
  }, delay);
  return count;
}

export function useInterval(onTick, delay) {
  useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [onTick, delay]);
}
```

- 10/9 (x), challenge 4 is the complete solution.

<hr />

**Challenge 4**

- [Challenge 4 of 5: Fix a resetting interval](https://react.dev/learn/reusing-logic-with-custom-hooks#fix-a-resetting-interval)
- App: 1. useCounter ->calls useInterval, 2. useInterval ===> Not working
- [Fork](https://codesandbox.io/p/sandbox/zyymtm)
- (Hint): It looks like your useInterval Hook accepts an event listener as an argument.
- [Fork solution](https://codesandbox.io/p/sandbox/fml87k)
- (Solution) Inside useInterval, wrap the tick callback into an Effect Event, this will allow you to omit onTick from dependencies of your Effect. The Effect won’t re-synchronize on every re-render of the component, so the page background color change interval won’t get reset every second before it has a chance to fire.

```js
import { useEffect } from 'react';
import { useEffectEvent } from 'react';

export function useInterval(callback, delay) {
  const onTick = useEffectEvent(callback);
  useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
```

<hr />
