# Sharing State Between Components

Lifting states **up** a parent component, then pass them down.

```js
//===Ex1. Parent=<Accordion>, Children=<Panel>
Accordion;
const [activeIndex, setActiveIndex] = useState(0);
<Panel
  title="About"
  isActive={activeIndex === 0}
  onShow={() => setActiveIndex(0)}>
  aaa
</Panel>;

//=== Ex2. Parent=FilterableList, Children=SearchBar
FilterableList;
const [query, setQuery] = useState('');
const results = filterItems(foods, query);
function handleChange(e) {
  setQuery(e.target.value);
}
<SearchBar query={query} onChange={handleChange} />;
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

## Challenge

**Challenge 1 (sync input)**

- [Challenge 1 of 2: Synced inputs](https://react.dev/learn/sharing-state-between-components#synced-inputs) -[Q1 Code](./SharingStateBtwComp/Quiz1/App.js)
- [Fork](https://codesandbox.io/p/sandbox/g5pgdd?file=%2Fsrc%2FApp.js)

<hr />

**Challenge 2 (Filter a list)**

- [Challenge 2 of 2: Filtering a list ](https://react.dev/learn/sharing-state-between-components#filtering-a-list)
- [Fork](https://codesandbox.io/p/sandbox/qmyrll?file=%2Fsrc%2FApp.js)
- [Fork solution](https://codesandbox.io/p/sandbox/58kfgp)
- 10/3 (x)
<hr />
