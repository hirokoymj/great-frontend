# Lifecycle of Reacting Effect

https://react.dev/learn/lifecycle-of-reactive-effects#recap

**Challenge 1**

- [Challenge 1 of 5: Fix reconnecting on every keystroke](https://react.dev/learn/lifecycle-of-reactive-effects#fix-reconnecting-on-every-keystroke)
- [Fork]()
- [Fork - solution]()
- 10/14
<hr />

**Challenge 2**

- [Challenge 2 of 5: Switch synchronization on and off](https://react.dev/learn/lifecycle-of-reactive-effects#switch-synchronization-on-and-off)
- [Fork]()
- [Fork - solution]()
- 10/14

<hr />

**Challenge 3 (skip)**

**Challenge 4**

- [Challenge 4 of 5: Fix a connection switch ](https://react.dev/learn/lifecycle-of-reactive-effects#fix-a-connection-switch)
- [Fork]()
- [Fork - solution]()
- 10/14
<hr />

**Challenge 5**

- [Challenge 5 of 5: Populate a chain of select boxes](https://react.dev/learn/lifecycle-of-reactive-effects#populate-a-chain-of-select-boxes)
- [Fork]()
- [Fork - solution]()
- 10/14 (x)

<hr />

# Separating Events from Effect

**Challenge 1**

- [Challenge 1 of 4: Fix a variable that doesn’t update](https://react.dev/learn/separating-events-from-effects#fix-a-variable-that-doesnt-update)
- [Fork]()
- [Fork - Solution]()
- 10/15 (ok)
<hr />

**Challenge 2**

- [Challenge 2 of 4: Fix a freezing counter](https://react.dev/learn/separating-events-from-effects#fix-a-variable-that-doesnt-update)
- [Fork]()
- [Fork - Solution]()
- 10/15 (x)
<hr />

**Challenge 3 (skip)**

**Challenge 4**

- [Challenge 4 of 4: Fix a delayed notification](https://react.dev/learn/separating-events-from-effects#fix-a-delayed-notification)
- [Fork]()
- [Fork - Solution]()
- 10/15 (x)
<hr />

# Removing from Effect Dependencies

**Challenge 1(Count)**

- (Hint) It seems like this Effect’s code depends on count. Is there some way to not need this dependency? There should be a way to update the count state based on its previous value without adding a dependency on that value.

- To solve this, use the updater function and write setCount(c => c + 1) instead of setCount(count + 1):
- 10/16 (x)

<hr />

**Challenge 2(skip)**

**Challenge 3(chat)**

- Challenge 3 of 4: Fix a reconnecting chat
- 10/16
- ???, good question
- (Hint) There’s more than one way to fix this, but ultimately you want to avoid having an object as your dependency.
- (Solution:) Your Effect is re-running because it depends on the options object. Objects can be re-created unintentionally, you should try to avoid them as dependencies of your Effects whenever possible.

The least invasive fix is to read roomId and serverUrl right outside the Effect, and then make the Effect depend on those primitive values (which can’t change unintentionally). Inside the Effect, create an object and pass it to createConnection:

<hr />

**Challenge 4 (chat)**
[Challenge 4 of 4: Fix a reconnecting chat, again]()

- (Hint) You’re passing down two functions: onMessage and createConnection. Both of them are created from scratch every time App re-renders. They are considered to be new values every time, which is why they re-trigger your Effect.

One of these functions is an event handler. Do you know some way to call an event handler an Effect without “reacting” to the new values of the event handler function? That would come in handy!

Another of these functions only exists to pass some state to an imported API method. Is this function really necessary? What is the essential information that’s being passed down? You might need to move some imports from App.js to ChatRoom.js.

```js
export default function ChatRoom({ roomId, createConnection, onMessage }) {
  const onReceiveMessage = useEffectEvent(onMessage);

  useEffect(() => {
    const connection = createConnection();
    connection.on('message', (msg) => onReceiveMessage(msg));
    // ...
```

<hr />
