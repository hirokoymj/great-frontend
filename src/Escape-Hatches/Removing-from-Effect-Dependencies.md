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
