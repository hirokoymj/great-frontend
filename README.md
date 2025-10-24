# Learn React

## Describing the UI

- [Your First Component](https://react.dev/learn/your-first-component)
- [Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)
- [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Rendering Lists](https://react.dev/learn/rendering-lists)
- [Keeping Components Pure](https://react.dev/learn/keeping-components-pure)
- [Understanding Your UI as a Tree](https://react.dev/learn/understanding-your-ui-as-a-tree)

## Adding Interactivity

- [Responding to Events](https://react.dev/learn/responding-to-events)
- [My Summary](./src/Interactivity/Responding-to-events.md)
- 10/2
<hr />

- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [My Summary](./src/Interactivity/ComponentMemory.md)
- 10/2
<hr />

- [Render and Commit](https://react.dev/learn/render-and-commit)
- [My Summary](./src/Interactivity/Render-and-commit.md)
- 10/2
<hr />

- [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
- [My Summary](./src/Interactivity/Snapshot.md)
- 10/3
<hr />

- [Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)
- [My Summary](./src/Interactivity/Queueing-state.md)
- 10/3
<hr />

- [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)
- [My Summary](./src/Interactivity/Objects-in-state.md)
- 10/3
<hr />

- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [My Summary](./src/Interactivity/Array-in-state.md)
- 10/2
<hr />

## Managing State - !!! 9/29

- [Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)
- [My Summary](./src/managing-state/Reacting-input-with-state.md)
- 10/1
<hr />

- [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)
- [My Summary](./src/managing-state/StateStructure.md)
- 9/29
<hr />

- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [My Summary](./src/managing-state/SharingStateBtwComp.md)
- 10/3
<hr />

- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)
- [My Summary](./src/managing-state/Preserving.md)
<hr />

- [Extracting State Logic into a Reducer](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [My Summary](./src/managing-state/Reducer.md)
- 10/3
<hr />

- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
- [My Summary](./src/managing-state/Context.md)
- 10/3

<hr />

- [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)
<hr />

# Escape Hatches

- [==Referencing Values with Refs==](https://react.dev/learn/referencing-values-with-refs)
- [my summary](./src/Escape-Hatches/ReferencingValue-with-Refs.md)
- [Challenge 1](https://react.dev/learn/referencing-values-with-refs#fix-a-broken-chat-input)
- [Challenge 2](https://react.dev/learn/referencing-values-with-refs#fix-a-component-failing-to-re-render)
- [Challenge 4](https://react.dev/learn/referencing-values-with-refs#read-the-latest-state)
- 10/3

<hr />

- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
<hr />

- [==Synchronizing with Effects==](https://react.dev/learn/synchronizing-with-effects)
- [My Summary](./src/Escape-Hatches/useEffect.md)
- [Challenge 1:](https://react.dev/learn/synchronizing-with-effects#focus-a-field-on-mount)
- [Challenge 2](https://react.dev/learn/synchronizing-with-effects#focus-a-field-conditionally)
- [Challenge 3](https://react.dev/learn/synchronizing-with-effects#fix-an-interval-that-fires-twice)
- [Challenge 4](https://react.dev/learn/synchronizing-with-effects#fix-fetching-inside-an-effect) ===>XO
- race conditions because two asynchronous operations are “racing”, Clean-up function
- 10/6

<hr />

- [==You Might Not Need an Effect==](https://react.dev/learn/you-might-not-need-an-effect)
- [My Summary](./src/Escape-Hatches/not-need-useEffect.md)
- [Challenge 1](https://react.dev/learn/you-might-not-need-an-effect#transform-data-without-effects)
- [Challenge 2](https://react.dev/learn/you-might-not-need-an-effect#cache-a-calculation-without-effects) ===>XXO
- 10/11, 10/20, 10/24

<hr />

- [==Lifecycle of Reactive Effects==](https://react.dev/learn/lifecycle-of-reactive-effects)
- [My Summary](./src/Escape-Hatches/lifecycle.md)
- [Challenge 1](https://react.dev/learn/lifecycle-of-reactive-effects#fix-reconnecting-on-every-keystroke) ===> XO
- [Challenge 4](https://react.dev/learn/lifecycle-of-reactive-effects#fix-a-connection-switch) ==> XO
- [Challenge 5:two selectbox](https://react.dev/learn/lifecycle-of-reactive-effects#populate-a-chain-of-select-boxes)

<hr />

- [==Separating Events from Effects==](https://react.dev/learn/separating-events-from-effects)
- [My Summary](./src/Escape-Hatches/Separating-events-from-effect.md)
- [Challenge 1](https://react.dev/learn/separating-events-from-effects#fix-a-variable-that-doesnt-update)
- [Challenge 2](https://react.dev/learn/separating-events-from-effects#fix-a-freezing-counter) ===> XXX
- Const onEvent = useEffectEvent(callback)
- `[increment]` -> `[]` -> OK
- `useEffectEven`t` ->OK
- `setInterval()`
- The first version creates a new anonymous arrow function that, when executed, calls onTick. The second version passes the onTick function directly to setInterval. Since onTick is a function that takes no arguments, passing it directly is a more concise and common way to write this.
- 10/23 (challenge 2 x)
<hr />

- [==Removing Effect Dependencies==](https://react.dev/learn/removing-effect-dependencies)
- [My Summary](./src/Escape-Hatches/lifecycle.md)
- [Challenge 1:Fix a variable that doesn’t update](https://react.dev/learn/removing-effect-dependencies#fix-a-resetting-interval)
- [Challenge 3:Chat, avoid using object as dependency](https://react.dev/learn/removing-effect-dependencies#fix-a-reconnecting-chat)

<hr />

- [==Reusing Logic with Custom Hooks==](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [My Sunmary](./src/Escape-Hatches/CustomHooks.md)
- [Challenge 1](https://react.dev/learn/reusing-logic-with-custom-hooks#extract-a-usecounter-hook)
- [Challenge 2](https://react.dev/learn/reusing-logic-with-custom-hooks#make-the-counter-delay-configurable)
- [Challenge 3](https://react.dev/learn/reusing-logic-with-custom-hooks#extract-useinterval-out-of-usecounter) ===> XO
- 10/9, 10/10
<hr />

## JavaScript

**Q1**

```js
const imageUrl = '/images/airport-board.png';
const imageName = imageUrl.split('/').pop();
```

<hr />

**Q2**

```js
const data = [
  {
    time: '10:50',
    city: 'MOSCOW/SVO',
  },
  {
    time: '11:05',
    city: 'EDINBURGH',
  },
  {
    time: '11:05',
    city: 'LONDON/LHR',
  },
  {
    time: '11:10',
    city: 'BUCHAREST/OTP',
  },
  {
    time: '11:30',
    city: 'KIEV/BORISPOL',
  },
  {
    time: '11:35',
    city: 'DUBLIN',
  },
  {
    time: '11:45',
    city: 'EAST MIDLANDS',
  },
  {
    time: '12:15',
    city: 'SOFIA',
  },
  {
    time: '12:30',
    city: 'LONDON/LGW',
  },
  {
    time: '12:30',
    city: 'NEWCASTLE',
  },
  {
    time: '12:40',
    city: 'ST PETERSBURG',
  },
  {
    time: '12:40',
    city: 'LONDON/LGW',
  },
  {
    time: '12:45',
    city: 'MANCHESTER',
  },
];
//display: list: 12:40, LONDON/LGW
//=====Ex.1 - Array or not
Array.isArray();
const myArray = [1, 2, 3];
const myObject = { a: 1, b: 2 };
const myString = 'hello';
console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myObject)); // false
console.log(Array.isArray(myString)); // false
//======Ex.2
const displayData = (data) => {
  if (Array.isArray(data)) {
    return (
      <ul>
        {data.map((item, i) => (
          <li key={i}>{Object.values(item).join(', ')}</li>
        ))}
      </ul>
    );
  }
  return data;
};
//=====Ex.3
const object = {
  a: 'some string',
  b: 42,
  c: false,
};

console.log(Object.values(object));
// Expected output: Array ["some string", 42, false]
```
