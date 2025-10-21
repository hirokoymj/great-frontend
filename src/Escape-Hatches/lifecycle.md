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
