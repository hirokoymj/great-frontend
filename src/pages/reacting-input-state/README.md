# Reacting to Input with State

Summary
```js
- Form state - useState
- Connect the event handlers
const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);
const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'
```



https://react.dev/learn/reacting-to-input-with-state#recap

- Model the state with useState.
- Remove non-essential state to avoid bugs and paradoxes.
- Connect the event handlers to set state.



# Quiz


```js
// Form - Input/Button
//======================================
// Start: Active/disabled
// Typing: active/active
// Submitting:  disabled/disabled
// Error: Active/Active
// Success: hide/hide
//======================================
```

```js
export default function FormWithState() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');
  //=============================================
  // Q1:
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
          disabled={console.log('Question - 2')}
        />
        <br />
        <button disabled={console.log('Question - 3')}>Submit</button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}
```
