# Reacting to Input with State

**Summary (FINAL)**

```js
//===Form (Ex.1)
const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'
const [error, setError] = useState(null);
<form onSubmit={handleSubmit} />
<textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'} />
<button type="submit" disabled={answer.length === 0 || status === 'submitting'} />

//=== Form (Challenge 2)
const [isEditing, setIsEditing] = useState(false);
<input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
<button type="submit" />
<form onSubmit={e => {e.preventDefault();  setIsEditing(!isEditing)}}/>
{isEditing ? (<input />): (<label/>)}

//===CSS (Challenge 1)
const [isActive, setIsActive] = useState(false);
let backgroundClassName = 'background';
let pictureClassName = 'picture';
if (isActive) pictureClassName += ' picture--active';
<div onClick={() => setIsActive(false)}>
  <dic onClick={e => e.stopPropagation()} />
</div>
```

**References:**

- https://react.dev/learn/reacting-to-input-with-state

## Ex.1 - Form (typing/submitting/success status)

- Computer inputs, like a network response arriving, a timeout completing, an image loading.
- In both cases, you must set state variables to update the UI.
- Notice that human inputs often require `event handlers`!
- https://react.dev/learn/reacting-to-input-with-state#step-5-connect-the-event-handlers-to-set-state
- [Fork](https://codesandbox.io/p/sandbox/4vyzrg?file=%2Fsrc%2FApp.js)

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

## Challenge

**Challenge 1 (add/remove CSS)**

- [Challenge 1 of 3: Add and remove a CSS class](https://react.dev/learn/reacting-to-input-with-state#add-and-remove-a-css-class)
- [Fork](https://codesandbox.io/p/sandbox/ymmt45?file=%2Fsrc%2FApp.js)
- [Fork solution](https://codesandbox.io/p/sandbox/dfydsv?file=%2Fsrc%2FApp.js)
- (Hint:) When the image is active, the CSS classes are background and picture picture--active.
- (Hint:) When the image is inactive, the CSS classes are background background--active and picture

<hr />

**Challenge 2 (Profile)**

- [Challenge 2 of 3: Profile editor](https://react.dev/learn/reacting-to-input-with-state#profile-editor)
- [Fork](https://codesandbox.io/p/sandbox/2tgl4z?file=%2Fsrc%2Findex.js)
- [Fork - solution](https://codesandbox.io/p/sandbox/8p2tgt?file=%2Fsrc%2FApp.js)
- **my wrong point**

```js
// Wrong
<input name="fistName" value={firstName} onChange={setFirstName(e.target.value)} />
// Correct
<input name="fistName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
// Submit
<form onSubmit={handleSubmit}>
<button type="submit">Submit</button>
const handleSubmit = (event) => {event.preventDefault()};
//e.stopPropagation()
<div onClick={() => setIsActive(false)}>
  <dic onClick={e => e.stopPropagation()} />
</div>
```

<hr />
