# Reusing Logic with Custom Hooks

## Summary (FINAL)

**References:**

- https://react.dev/learn/reusing-logic-with-custom-hooks

## Ex.1 - title (short text)

- [When to use custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks#when-to-use-custom-hooks)

```js
// Custom Hook
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

## Challenge

**Challenge 1 ()**

- [Challenge 1 of 5: Extract a useCounter Hook ](https://react.dev/learn/reusing-logic-with-custom-hooks#extract-a-usecounter-hook)
- [Fork](https://codesandbox.io/p/sandbox/wf49lm?file=%2Fsrc%2FApp.js)
- [Fork solution](https://codesandbox.io/p/sandbox/779q4z?file=%2Fsrc%2FApp.js)

```js
export default function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
```

- 10/9 (ok)

<hr />

**Challenge 2**

- [Challenge 2 of 5: Make the counter delay configurable](https://react.dev/learn/reusing-logic-with-custom-hooks#make-the-counter-delay-configurable)
- [Fork](https://codesandbox.io/p/sandbox/w6cdfc?file=%2Fsrc%2FApp.js)
- [Fork solution](https://codesandbox.io/p/sandbox/q55v6y)
- 10/9 (ok)
<hr />

**Challenge 3**

[Challenge 3 of 5: Extract useInterval out of useCounter](https://react.dev/learn/reusing-logic-with-custom-hooks#extract-useinterval-out-of-usecounter)

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

- 10/9 (x)

<hr />

**Challenge 4**

- [Challenge 4 of 5: Fix a resetting interval](https://react.dev/learn/reusing-logic-with-custom-hooks#fix-a-resetting-interval)
- [Fork](https://codesandbox.io/p/sandbox/zyymtm)
- (Hint): It looks like your useInterval Hook accepts an event listener as an argument. Can you think of some way to wrap that event listener so that it doesn’t need to be a dependency of your Effect?
- [Fork solution](https://codesandbox.io/p/sandbox/fml87k)
- (Solution) Inside useInterval, wrap the tick callback into an Effect Event, as you did earlier on this page.

This will allow you to omit onTick from dependencies of your Effect. The Effect won’t re-synchronize on every re-render of the component, so the page background color change interval won’t get reset every second before it has a chance to fire.

<hr />
