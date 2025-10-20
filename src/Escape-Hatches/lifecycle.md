# Lifecycle of Reacting Effect

- https://react.dev/learn/lifecycle-of-reactive-effects#recap

**Summary (final)**

```js
//=====Q1, dependency, roomId only, why?
const serverUrl = 'https://localhost:1234';
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
//=====Q4: `createConnection` is a prop, so it’s a reactive value. It can change over time!
export default function ChatRoom({ roomId, createConnection }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, createConnection]);
//=====Q5
useEffect(() => {
  let ignore = false;
  fetchData('/planets').then((result) => {
    if (!ignore) {
      setPlanetList(result);
      setPlanetId(result[0].id); // Select the first planet
    }
  });
  return () => {
    ignore = true;
  };
}, []);

useEffect(() => {
  if (planetId === '') {
    return;
  }
  let ignore = false;
  fetchData('/planets/' + planetId + '/places').then((result) => {
    if (!ignore) {
      setPlaceList(result);
      setPlaceId(result[0].id); // Select the first place
    }
  });
  return () => {
    ignore = true;
  };
}, [planetId]);
```

<hr />

**Challenge 1**

- [Challenge 1 of 5: Fix reconnecting on every keystroke](https://react.dev/learn/lifecycle-of-reactive-effects#fix-reconnecting-on-every-keystroke)
- [Fork]()
- [Fork - solution]()
- (Solution) This Effect didn’t have a dependency array at all, so it re-synchronized after every re-render.
- (Solution) On the other hand, serverUrl is defined outside the component. This is why it doesn’t need to be in the array.

```js
//BEFORE

const serverUrl = 'https://localhost:1234';
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  });
}
//AFTER
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
```

- 10/14, 10/17(x)
<hr />

**Challenge 2 (skip)**

**Challenge 3 (skip)**

**Challenge 4 (chat, checkbox)**

- [Challenge 4 of 5: Fix a connection switch ](https://react.dev/learn/lifecycle-of-reactive-effects#fix-a-connection-switch)
- [Fork](https://codesandbox.io/p/sandbox/fxkpp2)
- [Fork - solution](https://codesandbox.io/p/sandbox/k78rsd?file=%2Fsrc%2FApp.js)
- (Quesiton) Fix the bug so that toggling the checkbox also causes the chat to reconnect.
- (Solution) If you remove the linter suppression, you will see a lint error. The problem is that `createConnection` is a prop, so it’s a reactive value. It can change over time! (And indeed, it should—when the user ticks the checkbox, the parent component passes a different value of the createConnection prop.) This is why it should be a dependency. Include it in the list to fix the bug:

```js
//BEFORE
export default function ChatRoom({ roomId, createConnection }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

//AFTER
export default function ChatRoom({ roomId, createConnection }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, createConnection]);

```

- 10/14, 10/17

<hr />

**Challenge 5(select boxes)**

- [Challenge 5 of 5: Populate a chain of select boxes](https://react.dev/learn/lifecycle-of-reactive-effects#populate-a-chain-of-select-boxes)
- [Fork](https://codesandbox.io/p/sandbox/g7kfgh)
- [Fork - solution](https://codesandbox.io/p/sandbox/s3fzgs?file=%2Fsrc%2FApp.js)
- (Solution) There are two independent synchronization processes:

1. The first select box is synchronized to the remote list of planets.
2. The second select box is synchronized to the remote list of places for the current planetId.

```js
useEffect(() => {
  let ignore = false;
  fetchData('/planets').then((result) => {
    if (!ignore) {
      console.log('Fetched a list of planets.');
      setPlanetList(result);
      setPlanetId(result[0].id); // Select the first planet
    }
  });
  return () => {
    ignore = true;
  };
}, []);

useEffect(() => {
  if (planetId === '') {
    // Nothing is selected in the first box yet
    return;
  }

  let ignore = false;
  fetchData('/planets/' + planetId + '/places').then((result) => {
    if (!ignore) {
      console.log('Fetched a list of places on "' + planetId + '".');
      setPlaceList(result);
      setPlaceId(result[0].id); // Select the first place
    }
  });
  return () => {
    ignore = true;
  };
}, [planetId]);
```

- 10/14 (x)

<hr />

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

<hr />

# Removing from Effect Dependencies

**Summary (final)**

```js
//=====Q1:
useEffect(() => {
  setCount(count + 1); //!!!
}, [count]);
//=====After
useEffect(() => {
  setCount((c) => c + 1); //updater function
}, []);
//=====Updater function
setState(5);
setState((n) => 5); // `n` is unused.
//=====Q3:
useEffect(() => {
  const connection = createConnection(options);
  connection.connect();
  return () => connection.disconnect();
}, [options]); //options={}

//===AFTER
const { roomId, serverUrl } = options;
useEffect(() => {
  const connection = createConnection({ roomId, serverUrl });
  connection.connect();
  return () => connection.disconnect();
}, [roomId, serverUrl]);
//Avoid using Object as dependencies for useEffect.
```

**Challenge 1(Removing useEffect dependency)**

- [Challenge 1 of 4: Fix a resetting interval -](https://react.dev/learn/removing-effect-dependencies#fix-a-resetting-interval)
- [Fork](https://codesandbox.io/p/sandbox/jq24lg)
- [Fork solution](https://codesandbox.io/p/sandbox/3n7kn8?file=%2Fsrc%2FApp.js)
- (Hint) Is there some way to not need this dependency?
- (Hint) There should be a way to update the count state based on its previous value without adding a dependency on that value.
- (Solution) You want to update the count state to be count + 1 from inside the Effect. However, this makes your Effect depend on count, which changes with every tick, and that’s why your interval gets re-created on every tick. To solve this, use the updater function and write setCount(c => c + 1) instead of setCount(count + 1):
- `setState(5)` is same as `setState(n => 5)`, but `n` is unused!
- 10/16 (x)

```js
useEffect(() => {
  const id = setInterval(() => {
    console.log('⏰ Interval tick');
    setCount(count + 1);
  }, 1000);
  return () => {
    clearInterval(id);
  };
}, [count]); //!!! HOW TO REMOVE THIS DEPENDENCYPOINT !!!
//AFTER

seEffect(() => {
  const id = setInterval(() => {
    console.log('⏰ Interval tick');
    setCount((c) => c + 1); //HERE
  }, 1000);
  return () => {
    clearInterval(id);
  };
}, []); //!!! POINT !!!
```

<hr />

**Challenge 2(skip)**

**Challenge 3(chat, good question, reconnect when theme change)**

- [Challenge 3 of 4: Fix a reconnecting chat](https://react.dev/learn/removing-effect-dependencies#fix-a-reconnecting-chat)
- [Fork](https://codesandbox.io/p/sandbox/dy9f2l)
- [Fork solution](https://codesandbox.io/p/sandbox/4fn2m9?file=%2Fsrc%2FApp.js)
- 10/16 (x)
- (Hint) you want to avoid having an object as your dependency.
- (Solution:) Your Effect is re-running because it depends on the options object. Objects can be re-created unintentionally, you should try to avoid them as dependencies of your Effects whenever possible.

```js
//BEFORE
useEffect(() => {
  const connection = createConnection(options);
  connection.connect();
  return () => connection.disconnect();
}, [options]); //options={}

//AFTER
const { roomId, serverUrl } = options;
useEffect(() => {
  const connection = createConnection({
    roomId: roomId,
    serverUrl: serverUrl,
  });
  connection.connect();
  return () => connection.disconnect();
}, [roomId, serverUrl]);
```

<hr />

**Challenge 4 (chat, skip at this time)**

<hr />
