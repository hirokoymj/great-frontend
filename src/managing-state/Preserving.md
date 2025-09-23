# Preserving and Resetting State

- https://react.dev/learn/preserving-and-resetting-state#resetting-a-form-with-a-key

## Ex.1

```js
export default function App() {
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {counter}
    </div>
  );
}
```

- div --> Counter (0)
- div --> Counter (0)
- These are two separate counters because each is rendered at its own position in the tree.

## Ex.2

```js
const [isFancy, setIsFancy] = useState(false);
return (
  <div>
    {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
  </div>
);
```

- It’s the same component at the same position, so from React’s perspective, it’s the same counter.

## Ex 3 - Resetting state at the same position

**Question**

```js
isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />;
```

**Answer**

Option 1: Rendering a component in different positions

```js
<div>
  {isPlayerA &&
    <Counter person="Taylor" />
  }
  {!isPlayerA &&
    <Counter person="Sarah" />
  }
```

<hr />

**Question**

```js
isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />;
```

**Answer**

Option 2: Resetting state with a key

```js
  return (
    <div>
      {isPlayerA ? (
        <Counter key="Taylor" person="Taylor" />
      ) : (
        <Counter key="Sarah" person="Sarah" />
      )}
```

# Ex 4 - Resetting a form with a key

- https://react.dev/learn/preserving-and-resetting-state#resetting-a-form-with-a-key

**Question**

```js
export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  )
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

//Chat.js
export default function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
```

**Answer**

```js
<Chat key={to.id} contact={to} />
```

## Recap

- React keeps state for as long as the same component is rendered at the same position.
- State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.
- You can force a subtree to reset its state by giving it a different key.

## Challenge

### Challenge 1 of 5: Fix disappearing input text

https://react.dev/learn/preserving-and-resetting-state#challenges

```js
export default function App() {
  const [showHint, setShowHint] = useState(false);
  if (showHint) {
    return (
      <div>
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
        <Form />
        <button
          onClick={() => {
            setShowHint(false);
          }}>
          Hide hint
        </button>
      </div>
    );
  }
  return (
    <div>
      <Form />
      <button
        onClick={() => {
          setShowHint(true);
        }}>
        Show hint
      </button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
```

**Answer**

```js
export default function App() {
  const [showHint, setShowHint] = useState(false);
  if (showHint) {
    return (
      <div>
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
        <Form />
        <button
          onClick={() => {
            setShowHint(false);
          }}>
          Hide hint
        </button>
      </div>
    );
  }
  return (
    <div>
      <Form />
      <button
        onClick={() => {
          setShowHint(true);
        }}>
        Show hint
      </button>
    </div>
  );
}
```

<hr />

### Challenge 2 of 5: Swap two form fields

```js
import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field label="Last name" />
        <Field label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" />
        <Field label="Last name" />
        {checkbox}
      </>
    );
  }
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
```
