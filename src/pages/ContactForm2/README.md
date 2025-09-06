# React controlled form

```js
//- Controlled form = React manages the form element's state.
//- An input value is stored in a state variable and updates via an onChange handler.
//======================================
Text: <input>, value, setState(e.target.value)
Checkbox: <input>, checked, setState(e.target.checked) //boolean
Checkbox: <input>, checked/value, Array
  	useState([]);
	const { value, checked } = event.target;
	setSelectedOptions((prev) => [...prev, value]);//checked
	setSelectedOptions((prev) => prev.filter((option) => option !== value)); //else
Radio group: <input>, checked/value, setState(e.target.value)
Textarea: <textarea>, value, setState(e.target.value)
Select: <select>, value, setState(e.tartget.value)
```

## References

- https://www.greatfrontend.com/questions/user-interface/contact-form/react?framework=react
- [Form Summary](https://www.greatfrontend.com/react-interview-playbook/react-forms#summary)
- [Text input](https://www.greatfrontend.com/react-interview-playbook/react-forms#text-input)
- [Checkbox](https://www.greatfrontend.com/react-interview-playbook/react-forms#checkbox-input)
- [Radio group](https://www.greatfrontend.com/react-interview-playbook/react-forms#radio-group)
- [Textarea](https://www.greatfrontend.com/react-interview-playbook/react-forms#textarea)
- [Select dropdown](https://www.greatfrontend.com/react-interview-playbook/react-forms#select-dropdown)
- [Form event: Submit](https://www.greatfrontend.com/react-interview-playbook/react-event-handling#form-events)

```js
<form onSubmit={handleSubmit}></form>
<button type="submit">Submit</button>
```

### Checkbox

```js
const [tac, setTac] = useState(false);
const [selectedOptions, setSelectedOptions] = useState([]);
<input
  type="checkbox"
  name="tac"
  checked={tac}
  onChange={(event) => setTac(event.target.checked)}
/>
<input
  type="checkbox"
  name="subject"
  id="checkbox-english"
  value="english"
  checked={selectedOptions.includes('english')}
  onChange={handleCheckboxChange}
/>
<label htmlFor="checkbox-english">English</label>
```

### Radio Group

```js
const [gender, setGender] = useState('male');
<input
	id="radio-male"
	type="radio"
	name="gender"
	value="male"
	checked={gender === 'male'}
	onChange={(event) => setGender(event.target.value)}
/>Male
```

### Select dropdown

```js
const [fruit, setFruit] = useState('apple');
<select
  id="favorite-fruit"
  value={fruit}
  onChange={(event) => setFruit(event.target.value)}>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
</select>;
```
