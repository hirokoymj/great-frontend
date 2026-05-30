# Quiz - State (object)

<!-- create index  Cmd+Shift+P -->

- [Quiz - State (object)](#quiz---state-object)
  - [Q1: Learn React](#q1-learn-react)
  - [Q2: Form (Input, Checkbox, multi-checkbox, radio, dropdown), and validation ❌(05/25), ❌(05/28)](#q2-form-input-checkbox-multi-checkbox-radio-dropdown-and-validation-0525-0528)
    - [Answer](#answer)
  - [Form Validation Strategy by Field Type](#form-validation-strategy-by-field-type)

✅❌

## Q1: Learn React

- [Managing State](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#managing-state)
- [Updating Objects in State](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#updating-objects-in-state)
- [State as Snapshot](https://github.com/hirokoymj/great-frontend/blob/main/src/Interactivity/Snapshot.md)
- `setNumber((prev) => prev + 1)`; //Updater Function
- `setNumber(number + 1)` - Direct Value Update

```js
const [number, setNumber] = useState(0);

onClick={() => {
  setNumber(number + 1);
  setNumber(number + 1);
  setNumber(number + 1);
} //RESULT : 1

onClick={() => {
  setNumber((number) => number + 1);
  setNumber((number) => number + 1);
  setNumber((number) => number + 1);
}} // RESULT : 3
```

---

## Q2: Form (Input, Checkbox, multi-checkbox, radio, dropdown), and validation ❌(05/25), ❌(05/28)

```js
import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  agreed: false,
  hobbies: [],
  gender: '',
  country: '',
};

const hobbyOptions = ['Reading', 'Music', 'Sports'];
const countryOptions = ['USA', 'Japan', 'Canada', 'UK', 'Other'];

export default function Demo() {
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    // TODO: destructure name and value from e.target
    // TODO: update formValues using name as the key
  };

  const handleHobbyChange = (e) => {
    // TODO: destructure value and checked from e.target
    // TODO: if checked, add value to hobbies; if unchecked, remove it
    // TODO: set formErrors.hobbies to true if newHobbies is empty
  };

  const handleReset = () => {
    // TODO: reset formValues back to initialForm
  };

  const handleBlur = (name, value) => {
    // TODO: set formErrors[name] to true if value is falsy
  };

  const handleSubmit = (e) => {
    // TODO: prevent default
    // TODO: alert 'Submitted!'
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 500 }}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* 1. Text inputs */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            // TODO: value
            // TODO: onChange
            // TODO: onBlur
          />
        </label>
        {formErrors.name && <p style={{ color: 'red' }}>Name is required</p>}
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            // TODO: value
            // TODO: onChange
            // TODO: onBlur
          />
        </label>
        {formErrors.email && <p style={{ color: 'red' }}>Email is required</p>}
        <hr />
        {/* 2. Simple checkbox — validate on onChange */}
        <label>
          <input
            type="checkbox"
            name="agreed"
            // TODO: checked
            onChange={(e) => {
              // TODO: get checked from e.target
              // TODO: update formValues.agreed
              // TODO: set formErrors.agreed to !checked
            }}
          />{' '}
          Agreed
        </label>
        {formErrors.agreed && (
          <p style={{ color: 'red' }}>agreed is required</p>
        )}
        <hr />
        {/* 3. Multi-checkbox */}
        <p>Hobbies:</p>
        {hobbyOptions.map((hobby) => (
          <label key={hobby} style={{ display: 'block', marginBottom: 8 }}>
            <input
              type="checkbox"
              name="hobbies"
              value={hobby}
              // TODO: checked
              // TODO: onChange
            />{' '}
            {hobby}
          </label>
        ))}
        {formErrors.hobbies && (
          <p style={{ color: 'red' }}>At least one hobby is required</p>
        )}
        <hr />
        {/* 4. Radio buttons */}
        <p>Gender:</p>
        {['Male', 'Female'].map((option) => (
          <label key={option} style={{ marginRight: 16 }}>
            <input
              type="radio"
              name="gender"
              value={option}
              // TODO: checked
              onChange={(e) => {
                // TODO: call handleChange
                // TODO: set formErrors.gender to false
              }}
              // TODO: onBlur
            />{' '}
            {option}
          </label>
        ))}
        {formErrors.gender && (
          <p style={{ color: 'red' }}>Gender is required</p>
        )}
        <hr />
        {/* 5. Dropdown */}
        <label>
          Country:{' '}
          <select
            name="country"
            // TODO: value
            onChange={(e) => {
              // TODO: call handleChange
              // TODO: set formErrors.country to !e.target.value
            }}
            // TODO: onBlur
          >
            <option value="">-- Select --</option>
            {countryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        {formErrors.country && (
          <p style={{ color: 'red' }}>Country is required</p>
        )}
        <hr />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>
          Reset
        </button>
      </form>

      <hr />
      <h2>Preview</h2>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </div>
  );
}
```

### Answer

```js
import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  agreed: false,
  hobbies: [],
  gender: '',
  country: '',
};

const hobbyOptions = ['Reading', 'Music', 'Sports'];
const countryOptions = ['USA', 'Japan', 'Canada', 'UK', 'Other'];

export default function Demo() {
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    setFormValues((prev) => {
      const newHobbies = checked
        ? [...prev.hobbies, value]
        : prev.hobbies.filter((hobby) => hobby !== value);
      setFormErrors((errPrev) => ({
        ...errPrev,
        hobbies: newHobbies.length === 0,
      }));
      return { ...prev, hobbies: newHobbies };
    });
  };

  const handleReset = () => {
    setFormValues(initialForm);
  };

  const handleBlur = (name, value) => {
    setFormErrors((prev) => ({ ...prev, [name]: !value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 500 }}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* 1. Text inputs */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name', formValues.name)}
          />
        </label>
        {formErrors.name && <p style={{ color: 'red' }}>Name is required</p>}
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            onBlur={() => handleBlur('email', formValues.email)}
          />
        </label>
        {formErrors.email && <p style={{ color: 'red' }}>Email is required</p>}
        <hr />

        {/* 2. Simple checkbox */}
        <label>
          <input
            type="checkbox"
            name="agreed"
            checked={formValues.agreed}
            onChange={(e) => {
              const checked = e.target.checked;
              setFormValues((prev) => ({ ...prev, agreed: checked }));
              setFormErrors((prev) => ({ ...prev, agreed: !checked }));
            }}
          />{' '}
          I agree to the terms
        </label>
        {formErrors.agreed && (
          <p style={{ color: 'red' }}>agreed is required</p>
        )}

        <hr />

        {/* 3. Multi-checkbox */}
        <p>Hobbies:</p>
        {hobbyOptions.map((hobby) => (
          <label key={hobby} style={{ display: 'block', marginBottom: 8 }}>
            <input
              type="checkbox"
              name="hobbies"
              value={hobby}
              checked={formValues.hobbies.includes(hobby)}
              onChange={handleHobbyChange}
            />{' '}
            {hobby}
          </label>
        ))}
        {formErrors.hobbies && (
          <p style={{ color: 'red' }}>At least one hobby is required</p>
        )}
        <hr />

        {/* 4. Radio buttons */}
        <p>Gender:</p>
        {['Male', 'Female'].map((option) => (
          <label key={option} style={{ marginRight: 16 }}>
            <input
              type="radio"
              name="gender"
              value={option}
              checked={formValues.gender === option}
              onChange={(e) => {
                handleChange(e);
                setFormErrors((prev) => ({ ...prev, gender: false }));
              }}
              onBlur={() => handleBlur('gender', formValues.gender)}
            />{' '}
            {option}
          </label>
        ))}
        {formErrors.gender && (
          <p style={{ color: 'red' }}>Gender is required</p>
        )}
        <hr />

        {/* 5. Dropdown */}
        <label>
          Country:{' '}
          <select
            name="country"
            value={formValues.country}
            onChange={(e) => {
              handleChange(e);
              setFormErrors((prev) => ({ ...prev, country: !e.target.value }));
            }}
            onBlur={() => handleBlur('country', formValues.country)}>
            <option value="">-- Select --</option>
            {countryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        {formErrors.country && (
          <p style={{ color: 'red' }}>Country is required</p>
        )}
        <hr />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>
          Reset
        </button>
      </form>

      <hr />
      <h2>Preview</h2>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </div>
  );
}
```

## Form Validation Strategy by Field Type

| Field      | `onChange`  | `onBlur`          | Why                                                                   |
| ---------- | ----------- | ----------------- | --------------------------------------------------------------------- |
| Text input | —           | validate          | User types then leaves; blur is the natural "done" signal             |
| Checkbox   | validate    | —                 | Binary click; feedback should be instant                              |
| Radio      | clear error | validate if empty | Can't unselect; once picked, error clears immediately                 |
| Select     | validate    | validate if empty | Same as radio — selection is instant, but blur catches "skipped" case |
