# Reacting to Input with State

**Summary (FINAL)**

```js
//===Form (Ex1)
const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);
const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'
<form onSubmit={handleSubmit} />
<button type="submit" disabled={answer.length === 0 || status === 'submitting'}>Submit</button>

//=== Form (Q2)
<input name="fistName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
<button type="submit">Submit</button>
<form onSubmit={e => {
  e.preventDefault();
  setIsEditing(!isEditing);
}}/>

//===CSS
const [isActive, setIsActive] = useState(false);
let backgroundClassName = 'background';
let pictureClassName = 'picture';
if (isActive) pictureClassName += ' picture--active';
e.stopPropagation();
```

**References:**

- https://react.dev/learn/reacting-to-input-with-state

## Ex.1 - Form (typing/submitting/success status)

**Step 1: Identify your component’s different visual states**

**Step 2: Determine what triggers those state changes**

- Human inputs, like clicking a button, typing in a field, navigating a link.
- Computer inputs, like a network response arriving, a timeout completing, an image loading.
- In both cases, you must set state variables to update the UI.

```js
const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);
const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'
```

```js
import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
```

## Recap

- Identify all its visual states.
- Determine the human and computer triggers for state changes.
- Model the state with useState.
- Remove non-essential state to avoid bugs and paradoxes.
- Connect the event handlers to set state.

## Quiz/Challenge

**====Quesiton 1 (CSS)====**

-[Challenge 1 of 3: Add and remove a CSS class](https://react.dev/learn/reacting-to-input-with-state#add-and-remove-a-css-class)

- [Q1](./Reacting-input-with-state/Q1/App.jsx)

**Solution**

- When the image is active, the CSS classes are background and picture picture--active.
- When the image is inactive, the CSS classes are background background--active and picture
- A single boolean state variable is enough to remember whether the image is active
- Need to stop the propagation so that clicking the image doesn’t register as a click on the background.

```js
const [isActive, setIsActive] = useState(false);

let backgroundClassName = 'background';
let pictureClassName = 'picture';
if (isActive) {
  pictureClassName += ' picture--active';
} else {
  backgroundClassName += ' background--active';
}

<div className={backgroundClassName} onClick={() => setIsActive(false)}>
  <img
    onClick={(e) => {
      e.stopPropagation();
      setIsActive(true);
    }}
  />
</div>;
```

<hr />

**====Quesiton 2 (Profile)====**

- [Challenge 2 of 3: Profile editor](https://react.dev/learn/reacting-to-input-with-state#profile-editor)
- [Q2](./Reacting-input-with-state/Q2/App.jsx)

```js
// Wrong
<input name="fistName" value={firstName} onChange={setFirstName(e.target.value)} />
// Correct
<input name="fistName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
// Submit
<form onSubmit={handleSubmit}>
<button type="submit">Submit</button>
const handleSubmit = (event) => {event.preventDefault(); };
```
