# useEffect

**Summary (FINAL)**

```js
useEffect(() => {}); //========== Runs after every render.
useEffect(() => {}, []); //====== Runs only on mount.
useEffect(() => {}, [a, b]); //== Runs on mount and if either a or b have changed
//=====A clean up function - runs on unmount.
useEffect(() => {
  const connection = createConnection();
  connection.connect();
  return () => connection.disconnect();
}, []);
//===== Focus a field on mount.
useEffect(() => {
  ref.current.focus();
}, []);
//===== Clear an interval
useEffect(() => {
  function onTick() {
    setCount((c) => c + 1);
  }
  const intervalId = setInterval(onTick, 1000);
  return () => clearInterval(intervalId);
}, []);
//=====No cache -> Consider using ReactQuery to fetch data.
```

**References:**
[Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)

## Ex.1 - By default, Effects run after every render.

- This is why code like this will produce an **infinite loop**:

```js
const [count, setCount] = useState(0);
useEffect(() => {
  //1. Effect runs after rendering.
  setCount(count + 1);
});
```

0. initial rendering
1. After an initial rendering, runs useEffect.
2. Setting state(setCount) triggers rendering.
3. After rendering, runs useEffect
4. Setting state(setCount) triggers rendering.
5. After re-rendering, runs useEffect. ==> infinate loop

## Ex.2 - Effect dependencies

- [Step 2: Specify the Effect dependencies](https://react.dev/learn/synchronizing-with-effects#step-2-specify-the-effect-dependencies)
- By default, Effects run after every render. Often, this is not what you want:

**Pitfall**

```js
// By default, useEffect run after every render.
useEffect(() => {});
// This runs only on mount (when the component appears)
useEffect(() => {}, []);
// This runs on mount *and also* if either a or b have changed since the last render
useEffect(() => {}, [a, b]);
```

## Ex.3 Add cleanup if needed

[Step 3: Add cleanup if needed](https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed)

```js
// step 1
useEffect(() => {
  const connection = createConnection();
  connection.connect();
});
// step2 - add dependencies
useEffect(() => {
  const connection = createConnection();
  connection.connect();
}, []);
// Connecting...
// Connecting..
// **the connections would keep piling up.**

// step 4. Add a cleanup function.
useEffect(() => {
  const connection = createConnection();
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, []);
// Connecting...
// Disconnected.
// Connecting...
```

1. The component mounts and calls connection.connect()
2. Then imagine the user navigates to another screen—for example, to the Settings page.The ChatRoom component unmounts.
3. Finally, the user clicks Back and ChatRoom mounts again. This would set up a second connection— but the first connection was never destroyed! As the user navigates across the app, **the connections would keep piling up.**

## Ex.4 Fetching data

- [Fetching data](https://react.dev/learn/synchronizing-with-effects#fetching-data)
- If your Effect fetches something, the cleanup function should either abort the fetch or ignore its result:
- You can’t “undo” a network request that already happened, but your cleanup function should ensure that the fetch that’s not relevant anymore does not keep affecting your application. If the userId changes from 'Alice' to 'Bob', cleanup ensures that the 'Alice' response is ignored even if it arrives after 'Bob'.

```js
useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
```

**What are good alternatives to data fetching in Effects?**

- Fetching directly in Effects usually means you don’t preload or cache data. For example, if the component unmounts and then mounts again, it would have to fetch the data again.
- race conditions.
- Popular open source solutions - **React Query**, useSWR, and React Router 6.4+.

## Recap

- Unlike events, Effects are caused by rendering itself rather than a particular interaction.
  Effects let you synchronize a component with some external system (third-party API, network, etc).
- By default, Effects run after every render (including the initial one).
- React will skip the Effect if all of its dependencies have the same values as during the last render.
- You can’t “choose” your dependencies. They are determined by the code inside the Effect.
- Empty dependency array ([]) corresponds to the component “mounting”, i.e. being added to the screen.
- In Strict Mode, React mounts components twice (in development only!) to stress-test your Effects.

## Summary (DRAFT)

```js
// By default, useEffect run after every render.
useEffect(() => {});
// Runs only on mount only
useEffect(() => {}, []);
// Runs on mount *and also* if either a or b have changed since the last render
useEffect(() => {}, [a, b]);
// The connection keep piling up.
useEffect(() => {
  const connection = createConnection();
  connection.connect();
}, []);
// A clean up function - runs when the component is unmounted.
useEffect(() => {
  const connection = createConnection();
  connection.connect();
  return () => connection.disconnect(); // !! clean-up function!!
}, []);
// No cache -> Considering to use ReactQuery
// Ex1. Focus a field when a component is mouted.
useEffect(() => {
  ref.current.focus();
}, []);
// Ex2. Interval
useEffect(() => {
  function onTick() {
    setCount((c) => c + 1);
  }

  const intervalId = setInterval(onTick, 1000);
  return () => clearInterval(intervalId);
}, []);
```

## Challenge

**Challenge 1 (Focus a field)**

- [Challenge 1 of 4: Focus a field on mount](https://react.dev/learn/synchronizing-with-effects#focus-a-field-on-mount)
- [Fork](https://codesandbox.io/p/sandbox/pd22pr)
- 9/29, 10/4
- (Hint) Effect runs only on mount rather than after every render, add the empty []
- (Solution)

```js
useEffect(() => {
  ref.current.focus();
}, []);
```

**Challenge 2 (useEffect with condition)**

- [Challenge 2 of 4: Fix a broken packing list ]()
- [Fork](https://codesandbox.io/p/sandbox/pd22pr)
- [Fork solution](https://codesandbox.io/p/sandbox/3mg9sq?file=%2Fsrc%2FApp.js)

```js
useEffect(() => {
  if (shouldFocus) {
    ref.current.focus();
  }
}, [shouldFocus]);
```

<hr />

**Challenge 3 (clean up function)**

- [Challenge 3 of 4: Fix an interval that fires twice ](https://react.dev/learn/synchronizing-with-effects#fix-an-interval-that-fires-twice)
- (Hint) Keep in mind that setInterval returns an interval ID, which you can pass to clearInterval to stop the interval.
- [Fork solution](https://codesandbox.io/p/sandbox/mhhckg?file=%2Fsrc%2FApp.js)

```js
useEffect(() => {
  function onTick() {
    setCount((c) => c + 1);
  }
  setInterval(onTick, 1000);
}, []);

// Solution
useEffect(() => {
  function onTick() {
    setCount((c) => c + 1);
  }
  const intervalId = setInterval(onTick, 1000);
  return () => clearInterval(intervalId);
}, []);
```

In development, React will still remount your component once to verify that you’ve implemented cleanup well. So there will be a setInterval call, immediately followed by clearInterval, and setInterval again. In production, there will be only one setInterval call. The user-visible behavior in both cases is the same: the counter increments once per second.

<hr />

**Challenge 4 (fetching data)**

- [Challenge 4 of 4: Fix fetching inside an Effect
  ](https://react.dev/learn/synchronizing-with-effects#fix-fetching-inside-an-effect)

```js
// Quiz
useEffect(() => {
  setBio(null);
  fetchBio(person).then((result) => {
    setBio(result);
  });
}, [person]);

// Solution
const [person, setPerson] = useState('Alice');
const [bio, setBio] = useState(null);
useEffect(() => {
  let ignore = false;
  setBio(null);
  fetchBio(person).then((result) => {
    if (!ignore) {
      setBio(result);
    }
  });
  return () => {
    ignore = true;
  };
}, [person]);
```

- (Hint) If an Effect fetches something asynchronously, it usually needs cleanup. avoiding race condition.
- You can’t “undo” a network request that already happened, but your cleanup function should ensure that the fetch that’s not relevant anymore does not keep affecting your application.
- No cache data -> Consider to use a third-party tool (React Query)
<hr />
