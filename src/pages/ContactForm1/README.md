# React Form

**Summary (Final)**

```js
Text: <input>, value, setState(e.target.value)
Checkbox: <input>, checked, setState(e.target.checked)
Radio group: <input>, checked, setState(e.target.value)
Textarea: <textarea>, value, setState(e.target.value)
Dropdown: <select>, value, setState(e.tartget.value)
```

## Error handling (onBlur) 12/21/2025

```js
const [errors, setErrors] = useState({
  name: false,
  email: false,
});
const handleBlur = (field, value) => {
  setErrors((prev) => ({
    ...prev,
    [field]: value.trim() === '',
  }));
};
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  onBlur={() => handleBlur('name', name)}
/>;
{
  errors.name && <p>'Required field'</p>;
}
```

## Function reference vs Arrow function wrapper, Function call

- React event handlers must receive a function
- Use function reference when **no arguments** are needed
- Use arrow function wrapper when **arguments are needed**
- Avoid calling functions directly in JSX

| Pattern                | Example                           | Correct |
| ---------------------- | --------------------------------- | ------- |
| Function reference     | `onClick={handleClick}`           | ✅      |
| Arrow function wrapper | `onClick={() => handleClick(id)}` | ✅      |
| Function call          | `onClick={handleClick(id)}`       | ❌      |

**Example 1**

```js
//==React calls it later, when blur happens
<input onBlur={() => handleBlur('name', name)} />

//This calls handleBlur immediately during render, not on blur.
<input onBlur={handleBlur('name', name)} />
```

## Tutorial

- https://www.greatfrontend.com/questions/user-interface/contact-form/react?framework=react
- JSON.stringify(...).then is not a function - React JS
- stringify - typo
- <label>email: <input name="email"></label>

# Forms in React Interviews

- https://www.greatfrontend.com/react-interview-playbook/react-forms
- **Controlled form:** React manages the form element's state.
- The value of the input is stored in a state variable and updated via an onChange handler.
- **Uncontrolled form** - the form element's value is managed by the DOM

- Text input
- Checkbox

```js
function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <input
        id="checkbox-input"
        type="checkbox"
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}
      />
      <label htmlFor="checkbox-input">Agree to terms and conditions</label>
      <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
}
```

- Radio group

```js
function RadioGroupExample() {
  const [gender, setGender] = useState('');

  return (
    <div>
      <div>
        <input
          id="radio-male"
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="radio-male">Male</label>
      </div>
      <div>
        <input
          id="radio-female"
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="radio-female">Female</label>
      </div>
      <p>Selected gender: {gender}</p>
    </div>
  );
}
```

- Textarea

```js
<textarea
  value={bio}
  onChange={(event) => setBio(event.target.value)}
  rows={10}
  cols={10}
/>
```

- Select dropdown

```js
function SelectExample() {
  const [fruit, setFruit] = useState('apple');

  return (
    <div>
      <label htmlFor="favorite-fruit">Favorite fruit</label>
      <select
        id="favorite-fruit"
        value={fruit}
        onChange={(event) => setFruit(event.target.value)}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <p>Selected fruit: {fruit}</p>
    </div>
  );
}
```

## nested from structures

```js
const [subjects, setSubjects] = useState({
  english: true,
  maths: false,
  physics: false,
});

setSubjects((prev) => ({
  ...prev,
  [sub]: !prev[sub],
}));
```

## Submit

- https://www.greatfrontend.com/react-interview-playbook/react-event-handling#form-events

```js
<form onSubmit={handleSubmit}></form>
<button type="submit">Submit</button>
```

## Summary draft

```js
const [errors, setErrors] = useState({
  name: false,
  email: false,
});
const handleBlur = (field, value) => {
  setErrors((prev) => ({
    ...prev,
    [field]: value.trim() === '',
  }));
};
<input onBlur={() => handleBlur('name', name)} />;
errors.name && <p>'Required field'</p>;
```

## References:

- https://www.greatfrontend.com/react-interview-playbook/react-forms#summary
