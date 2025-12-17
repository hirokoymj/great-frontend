# Learn React

## Adding Interactivity

### [Responding to Events](https://react.dev/learn/responding-to-events)

- [My Summary](./src/Interactivity/Responding-to-events.md)
- [Challenge 1](https://react.dev/learn/responding-to-events#fix-an-event-handler) - O, O
- [Challenge 2](https://react.dev/learn/responding-to-events#wire-up-the-events) - X, X
- (C1) onClick={handleClick} - an event handler must be passed or inline.
- (C1) onClicke={() => handleClick()}
- (C2) The event propagates up, and some handler above does it. -> `e.stopPropagation()`
- 10/2,11/22, 12/16

<hr />

### [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)

- [My Summary](./src/Interactivity/ComponentMemory.md)
- [Challenge 1](https://react.dev/learn/state-a-components-memory#complete-the-gallery) - O,O
- [Challenge 2](https://react.dev/learn/state-a-components-memory#fix-stuck-form-inputs) - O,O
- [Challenge 3](https://react.dev/learn/state-a-components-memory#fix-a-crash) - O,O
- 10/2, 11/22, 12/16(OOO)
<hr />

### [Render and Commit](https://react.dev/learn/render-and-commit)

- [My Summary](./src/Interactivity/Render-and-commit.md)
- Initial render ==> what is the function name? Initial render => route => calling mapped componennt
- 10/2, 11/22, 12/16(X)
<hr />

### [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)

- [My Summary](./src/Interactivity/Snapshot.md)
- [Challenge 1](https://react.dev/learn/state-as-a-snapshot#implement-a-traffic-light) - O
- (C1), Final summary
- 10/3, 11/21, 12/16(O)
<hr />

### [Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)

- [My Summary](./src/Interactivity/Queueing-state.md)
- 10/3, 11/22, 12/16(O)
<hr />

### [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)

- [My Summary](./src/Interactivity/Objects-in-state.md)
- [Challenge 1](https://react.dev/learn/updating-objects-in-state#fix-incorrect-state-updates) - XO
- (C1) - state value is an object. Update state object using a setter function.
- 10/3, 12/16(X), 12/17(O)
<hr />

### [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)

- [My Summary](./src/Interactivity/Array-in-state.md)
- [Challenge 1](https://react.dev/learn/updating-arrays-in-state#update-an-item-in-the-shopping-cart) - OO
- [Challenge 2](https://react.dev/learn/updating-arrays-in-state#remove-an-item-from-the-shopping-cart) - XO
- [Challenge 3](https://react.dev/learn/updating-arrays-in-state#fix-the-mutations-using-non-mutative-methods) - XO
- (C1) Shopping cart, state is an array of object, Update a count. --> Array.map
- (C1) [Fork](https://codesandbox.io/p/sandbox/6glq6s)
- (C2) Shopping cart +(add) -(decrease and delete)
- (C2) [Fork](https://codesandbox.io/p/sandbox/ztdx3l)
- (C2) map to produce a new array, and then filter to remove products with a count set to 0:
- (C3) Todos, array of object, add/delete/edit
- (C3) Array of object => add(array spread operator + newObj), delete(filter), edit(array spread operator + map)
- (C3) [fork](https://codesandbox.io/p/sandbox/pj3rfc?file=%2Fsrc%2FApp.js)
- Arrow functions implicitly return the expression when:
  - You **omit** {}
  - You return a **single expression**
  - Block body {} → needs **return**
- 10/2, 12/16(0XX), 12/17(OOO)

```js
const handleDecreaseClick = (productId) => {
  setProducts(
    products
      .map((p) => (p.id === productId ? { ...p, count: p.count - 1 } : p))
      .filter((p) => p.count !== 0)
  );
};
```

```js
//Todos
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];
const [todos, setTodos] = useState(initialTodos);
//==Shopping cart
const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];
const [products, setProducts] = useState(initialProducts);
```

<hr />

## Managing State

### [Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)

- [My Summary](./src/managing-state/Reacting-state.md)
- [Challenge 1](https://react.dev/learn/reacting-to-input-with-state#add-and-remove-a-css-class) ===> XXOO
- [Challenge 2](https://react.dev/learn/reacting-to-input-with-state#profile-editor)===>XOO
- (C1) `<div onclick><img onClick={(e) => e.stopPropagation()}>`
- (C1) two class name ==> space ex. className="bg bg--active"
- (C1) `const [isActive, setActive] = useState(false)`
- (C1) calculate CSS classes based on the state. ex. bg bg--active, pic pic--active
- (C2) XX cannnot see inputs.<button type=submit><form onSubmit={handleSubmit}>
- (C2) two state variable (first/last), and Edit state variable that holds whether to display the inputs or not.
- 10/1, 10/25, 11/3, 12/17(OO)
<hr />

### [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)

- [My Summary](./src/managing-state/Choosing-state.md)
- [Challenge 1](https://react.dev/learn/choosing-the-state-structure#fix-a-component-thats-not-updating) ===>OO
- [Challenge 2](https://react.dev/learn/choosing-the-state-structure#fix-a-broken-packing-list) ===>XXOO
- [Challenge 4](https://react.dev/learn/choosing-the-state-structure#implement-multiple-selection) ===>XOX
- [Q1:Avoid duplication in state](https://react.dev/learn/choosing-the-state-structure#avoid-duplication-in-state)
  - [Q1:fork](https://codesandbox.io/p/sandbox/q832nk)
  - [A1:fork](https://codesandbox.io/p/sandbox/ql4dp7?file=%2Fsrc%2FApp.js) ===>XO
- [Q2: multiple checkbox](http://localhost:5173/checkbox-demo)
- [Q4:fork](https://codesandbox.io/p/sandbox/6txrkg)
- (C1) use the color prop directly.===> O
- (!!C2!!) redundant state variable, listItems, checkboxes,
- (!!C2!!) generating checkboxes Add (...), Edit(Map id, checked), Delete(filter), [PackingList.jsx](./src/managing-state/packing-list/PackingList.jsx)
- (C4) Wrong, selectedIds `[0, 3]`
- (C4) stores only selected item ID. `selectedIds.filter((id) => id !== toggledId)`
- `onChange={handleChange}` vs `onChange={(e) => handleChange(e, 'maths')}`
  - `onChange={handleChange}` - React automatically passes the event object to an hander.
  - `onChange={(e) => handleChange(e, 'maths')}`- Extra arguments == inline: (onChange={(e) => handleCheckboxChange(e, 'maths')})
- 9/29, 10/26, 11/1, 11/4, 12/17(OOX - C4,uncheck did't work)
<hr />

### [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)

- [My Summary](./src/managing-state/Sharing-state.md)
- [Challenge 1](https://react.dev/learn/sharing-state-between-components#synced-inputs) ===>X,XO(11/2)O(12/17)
- [Challenge 2](https://react.dev/learn/sharing-state-between-components#filtering-a-list) ===>XO(11/2)O(12/17)
- (C1) lift state up into the parent component.
- (C2) A single source of true
- (C2) Pass donw the event hander (handleChange=setQuery) so the children can change the parent's state.
- (ALL) Parent/Children: SyncedInputs/Input, Accordion/Panel, FilterabeList/SearchBar
- 9/29, 10/3, 10/26, 11/2, 12/17(OO)
<hr />

- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)
- [My Summary](./src/managing-state/Preserving-state.md)
- [Challenge 1](https://react.dev/learn/preserving-and-resetting-state#fix-disappearing-input-text) ===>O
- [Challenge 2](https://react.dev/learn/preserving-and-resetting-state#swap-two-form-fields) ===>X
- (C2) Give a key to both <Field> components in both if and else branches. This tells React how to “match up” the correct state for either <Field> even if their order within the parent changes:
- 9/29, 10/26
<hr />

### [Extracting State Logic into a Reducer](https://react.dev/learn/reusing-logic-with-custom-hooks)

- [My Summary](./src/managing-state/Reducer.md)
- [Challenge 1](https://react.dev/learn/extracting-state-logic-into-a-reducer#dispatch-actions-from-event-handlers) ===>XX0
- (C1) `action == {type: xxx}`, `dispatch(action)`
- 9/29, 10/3, 10/26, 11/2, 12/17(O)
<hr />

### [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

- [My Summary](./src/managing-state/Context.md)
- [Challenge 1](https://react.dev/learn/passing-data-deeply-with-context#replace-prop-drilling-with-context) ===>XXOX
- [Q1](https://github.com/hirokoymj/great-frontend/blob/main/src/managing-state/Context.md#ex3---updating-a-context-value-object) ===>XOO
- (C1) useContext, createContext, value, Place the context on the top of the render.
- (C1) I didn't know how to pass -> `const imageSize = useContext(ImageSizeContext), not "ImageSizeContext" `;
- (Q1) how to update a context value. => uses a state value and a setter function.
- (Q1) http://localhost:5173/context-example

  ```js
  <ImageSizeContext value={imageSize}></ImageSizeContext>
  <UserContext value={{user, setUser}}></UserContext>
  ```

- 9/29, 10/3, 10/27, 12/17(XO)

<hr />

# Escape Hatches

- [==Referencing Values with Refs==](https://react.dev/learn/referencing-values-with-refs)
- [my summary](./src/Escape-Hatches/ReferencingValue-with-Refs.md)
- [Challenge 1](https://react.dev/learn/referencing-values-with-refs#fix-a-broken-chat-input) ===>XX
- [Challenge 2](https://react.dev/learn/referencing-values-with-refs#fix-a-component-failing-to-re-render) ===>OOO
- [Challenge 4](https://react.dev/learn/referencing-values-with-refs#read-the-latest-state) ===>O
- (C1) - `const myRef = useRef, how to update - myRef.current`
- (C2) - useRef does't effect UI change.
- (C4) - useRef can survive.
- 10/3, 10/23, 12/17(XOO)

<hr />

- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
<hr />

- [==Synchronizing with Effects==](https://react.dev/learn/synchronizing-with-effects)
- [My Summary](./src/Escape-Hatches/useEffect.md)
- [Challenge 1:](https://react.dev/learn/synchronizing-with-effects#focus-a-field-on-mount) ===>OO
- [Challenge 2](https://react.dev/learn/synchronizing-with-effects#focus-a-field-conditionally) ===>OX
- [Challenge 3](https://react.dev/learn/synchronizing-with-effects#fix-an-interval-that-fires-twice) ===>OX
- [Challenge 4](https://react.dev/learn/synchronizing-with-effects#fix-fetching-inside-an-effect) ===>XOX
- (C1) Calling ref.current.focus() during render is wrong.
- (C1) this Effect runs only on mount rather than after every render.
- (C2) Adding conditional logic inside useEffect. Check/Add dependencies.
- (C3) setInverval should be clearInteval(id) in a cleanup function.
- (C4) fech, async
- (C4) race conditions because two asynchronous operations are “racing”, Clean-up function
- (C4) mounts” means a component appears on the screen for the first time.
- (C4) React will call your cleanup function each time before the Effect runs again, and one final time when the component unmounts.
- (C4) Add cleanup if needed. Some Effects need to specify how to stop, undo, or clean up whatever they were doing. e.g, **connect/disconnect**, subscribe/unsubscribe, and **fetch/cancel(ignore)**.
- (C4) if an Effect gets cleaned up (such as when you select a different person), its ignore variable becomes true.
- 10/6, 10/24, 12/17(OXXX)

<hr />

- [==You Might Not Need an Effect==](https://react.dev/learn/you-might-not-need-an-effect)
- [My Summary](./src/Escape-Hatches/not-need-useEffect.md)
- [Challenge 1](https://react.dev/learn/you-might-not-need-an-effect#transform-data-without-effects) ===>OO
- [Challenge 2](https://react.dev/learn/you-might-not-need-an-effect#cache-a-calculation-without-effects) ===>XXO
- useMemo, todoList, checkbox
- (C1)redundant state
- (C2) useMemo, getVisibleTodos() will be called only if todos or showActive change. Typing into the input only changes the text state variable.
- (C2) `const cachedValue = useMemo(calculateValue, dependencies)`

```js
//Syntax Error
// const visibleTodos = useMemo(() => {
//   getVisibleTodos(todos, showActive);
// }, [todos, showActive]);

const visibleTodos = useMemo(
  () => getVisibleTodos(todos, showActive),
  [todos, showActive]
);
```

- 10/11, 10/20, 10/24, 12/17(OX)

<hr />

- [==Lifecycle of Reactive Effects==](https://react.dev/learn/lifecycle-of-reactive-effects)
- [My Summary](./src/Escape-Hatches/lifecycle.md)
- [Challenge 1](https://react.dev/learn/lifecycle-of-reactive-effects#fix-reconnecting-on-every-keystroke) ===> XO
- [Challenge 4](https://react.dev/learn/lifecycle-of-reactive-effects#fix-a-connection-switch) ===> XO
- [Challenge 5](https://react.dev/learn/lifecycle-of-reactive-effects#populate-a-chain-of-select-boxes) ===>O
- (C1) no a dependency array == runs after every re-render.
- (C1) selectbox
- (C4) createConnection is a prop, so it’s a reactive value. It can change over time!
- (C5) two async, two dropdown, fetch
- 10/25
<hr />

- [==Separating Events from Effects==](https://react.dev/learn/separating-events-from-effects)
- [My Summary](./src/Escape-Hatches/Separating-events-from-effect.md)
- [Challenge 1](https://react.dev/learn/separating-events-from-effects#fix-a-variable-that-doesnt-update) ===>O
- [Challenge 2](https://react.dev/learn/separating-events-from-effects#fix-a-freezing-counter) ===> XXXO
- (C1) missing dependency. [] -> [increment], []/runs onmount -> [increment]/onMount and increment is changed.
- (C2) const onEvent = useEffectEvent(callback)
- (C2) Effect uses the increment state variable, which is the dependency of Effect.
- (C2) Every change to increment causes the Effect to re-synchronize, which causes the interval to clear.
- (C2) Use EffectEvent and remove increment dependency, so the increment does not trigger any Effects.
- 10/23, 10/25

<hr />

- [==Removing Effect Dependencies==](https://react.dev/learn/removing-effect-dependencies)
- [My Summary](./src/Escape-Hatches/lifecycle.md)
- [Challenge 1:Fix a variable that doesn’t update](https://react.dev/learn/removing-effect-dependencies#fix-a-resetting-interval) ===>X
- [Challenge 3:Chat, avoid using object as dependency](https://react.dev/learn/removing-effect-dependencies#fix-a-reconnecting-chat) ===>0
- (C1) To remove count state dependency, use a updater function.
- (C1) `setCount(c => c + 1)` instead of `setCount(count + 1)`:
- (C1) avoid using an object as Effect dependency.
- 10/25
<hr />

- [==Reusing Logic with Custom Hooks==](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [My Sunmary](./src/Escape-Hatches/CustomHooks.md)
- [Challenge 1](https://react.dev/learn/reusing-logic-with-custom-hooks#extract-a-usecounter-hook) ===>O
- [Challenge 2](https://react.dev/learn/reusing-logic-with-custom-hooks#make-the-counter-delay-configurable) ===>O
- [Challenge 3](https://react.dev/learn/reusing-logic-with-custom-hooks#extract-useinterval-out-of-usecounter) ===> XOX
- (C1) App.js doesn’t need to import useState or useEffect.
- (C2) Pass the delay to the Hook with `useCounter(delay)`.
- (C2) `<input type=range value=delay min=10 max=2000 onChange={e => setDelay(Number(e.target.value))}/>`
- (C3) Move the Effect to useInterval including a clear function.
- 10/9, 10/10, 10/25
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

# Today

```js
// export default function Picture() {
//   let bgStyle = 'background';
//   let imgStyle = 'picture';

//   const updateCSS = (e) => {
//     e.stopPropergation();
//     if (bgStyle.includes('active')) {
//       bgStyle = `background`;
//     } else {
//       bgStyle += ` active--background`;
//     }

//     if (imgStyle.includes('active')) {
//       imgStyle = 'picture';
//     } else {
//       imgStyle += ' active--picture';
//     }
//   };

//   return (
//     <div className={bgStyle} onClick={(e) => updateCSS()}>
//       <img
//         className={imgStyle}
//         alt="Rainbow houses in Kampung Pelangi, Indonesia"
//         src="https://i.imgur.com/5qwVYb1.jpeg"
//         onClick={(e) => updateCSS()}
//       />
//     </div>
//   );
// }
const [isActive, setIsActive] = useState(false);

let backgroundClassName = 'background';
let pictureClassName = 'picture';
if (isActive) {
  pictureClassName += ' picture--active';
} else {
  backgroundClassName += ' background--active';
}

return (
  <div className={backgroundClassName} onClick={() => setIsActive(false)}>
    <img
      onClick={(e) => {
        e.stopPropagation();
        setIsActive(true);
      }}
      className={pictureClassName}
      alt="Rainbow houses in Kampung Pelangi, Indonesia"
      src="https://i.imgur.com/5qwVYb1.jpeg"
    />
  </div>
);
```

```js
const [selectedIds, setSelectedIds] = useState([]);
function handleToggle(toggledId) {
  if (selectedIds.includes(toggledId)) {
    setSelectedIds(selectedIds.filter((id) => id !== toggledId));
  } else {
    setSelectedIds([...selectedIds, toggledId]);
  }
}
```
