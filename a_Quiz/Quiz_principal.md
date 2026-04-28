# Quiz - Principal

Where does state live? → Single Source of Truth
How do children update it? → Inverse Data Flow

## Q0: Pattern

- both
- Where does state live? → Single Source of Truth
- How do children update it? → Inverse Data Flow

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
        title="Profile"
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

#### Answer

Lifting state up The standard practice for sharing state between components is to "lift" it up to their closest common parent. The parent component then becomes the single source of truth for that piece of state and passes the data down to its children via props. When the state changes, the parent component re-renders, and the changes flow down to all the child components that need that information.

---

## Q1: Pattern ✅

**What pattern does this code demonstrate?**

B) Lifting state up — sharing state between siblings via a common parent ✅

```js
function Parent() {
  const [temp, setTemp] = useState(0);

  return (
    <>
      <Celsius temp={temp} onChange={setTemp} />
      <Fahrenheit temp={temp} onChange={setTemp} />
    </>
  );
}

function Celsius({ temp, onChange }) {
  return (
    <input value={temp} onChange={(e) => onChange(Number(e.target.value))} />
  );
}

function Fahrenheit({ temp, onChange }) {
  return (
    <input
      value={(temp * 9) / 5 + 32}
      onChange={(e) => onChange(((Number(e.target.value) - 32) * 5) / 9)}
    />
  );
}
```

#### Answer: B

Exactly right — the temp state lives in Parent as the single source of truth. Both Celsius and Fahrenheit are kept in sync because they both read from and write to the same state. Neither child owns the data — they just receive it as props and report changes up via onChange.

## Q2: Pattern ❌

**What pattern does this code demonstrate?**

A) Lifting state up — state is moved from Child to Parent
B) Prop drilling — passing state through unnecessary components
C) Inverse data flow — Child updates Parent's state via a callback prop ✅
D) Context API — sharing state without passing props

```js
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child onIncrement={setCount} />
      <p>Count: {count}</p>
    </div>
  );
}

function Child({ onIncrement }) {
  return (
    <button onClick={() => onIncrement((prev) => prev + 1)}>Increment</button>
  );
}
```

#### Answer

In this code, the state was never in Child to begin with — count lives in Parent from the start. Child simply receives onIncrement as a prop and calls it to update the Parent's state.
