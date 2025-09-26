# Sharing State Between Components

## Summary (FINAL)

- Two components(Parent/Children) -> state and eventHander ==Parent.
- Pass **the event handlers** down so that **the children can change the parent’s state.**

```js
Accordion;
const [activeIndex, setActiveIndex] = useState(0);
<Panel
  title="About"
  isActive={activeIndex === 0}
  onShow={() => setActiveIndex(0)}>
  aaa
</Panel>;
///
SyncedInputs;
const [text, setText] = useState('');
function handleChange(e) {
  setText(e.target.value);
}
<Input label="First input" value={text} onChange={handleChange} />;
///
FilterableList; //Parent
const [query, setQuery] = useState('');
const results = filterItems(foods, query);

function handleChange(e) {
  setQuery(e.target.value);
}
<SearchBar query={query} onChange={handleChange} />; //Children
```

**References:**

- https://react.dev/learn/sharing-state-between-components

## Ex.1 - Accordion

- Accordion
  - Panel
  - Panel

```js
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}>
        aaa
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}>
        bb
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
```

**Recap**

- Two components ==> move their state to their parent.
- Then pass the information down through props from their parent.
- Pass **the event handlers** down so that **the children can change the parent’s state.**

## Quiz

**====Quesiton 1====**

- [Challenge 1 of 2: Synced inputs](https://react.dev/learn/sharing-state-between-components#synced-inputs) -[Q1 Code](./SharingStateBtwComp/Quiz1/App.js)
- Solution:
  Move the text state variable into the parent component along with the handleChange handler. Then pass them down as props to both of the Input components. This will keep them in sync.

<hr />

**====Quesiton 2====**

- [Challenge 2 of 2: Filtering a list ](https://react.dev/learn/sharing-state-between-components#filtering-a-list)
- [Q2 Code](./SharingStateBtwComp/Quiz2/App.jsx)
- Solution:
  Lift the query state up into the FilterableList component. Call filterItems(foods, query) to get the filtered list and pass it down to the List. Now changing the query input is reflected in the list:
