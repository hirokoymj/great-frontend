# Quiz - State (object)

<!-- create index  Cmd+Shift+P -->

- [Quiz - State (object)](#quiz---state-object)
  - [Q0: Learn React (master note)](#q0-learn-react-master-note)
  - [Q1: State (Objects)- 04/xx](#q1-state-objects--04xx)
    - [Answer](#answer)
    - [improvement (draft)](#improvement-draft)
  - [Q2: Form with Checkbox + Object State](#q2-form-with-checkbox--object-state)
    - [Answer](#answer-1)
    - [Improvement (draft)](#improvement-draft-1)
  - [Q2: Multiple Checkboxes (4/xx)](#q2-multiple-checkboxes-4xx)
    - [Answer](#answer-2)
    - [Improvement (draft)](#improvement-draft-2)

<!--
## Q1: State (Objects)- mm/dd
**📋 Requirements**
-->
✅❌

## Q0: Learn React (master note)

- [Managing State](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#managing-state)
- [Updating Objects in State](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#updating-objects-in-state)

## Q1: State (Objects)- 04/xx

**📋 Requirements**

- Use one state object to store all form values.
- Make all inputs controlled components.
- When the user types, update only the correct field.
- Show the current state in a preview section.
- Add a Reset button to restore the initial values.

```js
import { useState } from 'react';

const initialProfile = {
  firstName: '',
  lastName: '',
  email: '',
  jobTitle: '',
};

export default function App() {
  const [profile, setProfile] = useState(initialProfile);

  function handleChange(e) {
    // TODO:
    // Update the correct property in the profile object
    // based on the input's name and value
  }

  function handleReset() {
    // TODO:
    // Reset profile back to initialProfile
  }

  return (
    <div
      style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '500px' }}>
      <h1>Profile Form</h1>

      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            // TODO: value
            // TODO: onChange
          />
        </label>

        <br />
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            // TODO: value
            // TODO: onChange
          />
        </label>

        <br />
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            // TODO: value
            // TODO: onChange
          />
        </label>

        <br />
        <br />

        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            // TODO: value
            // TODO: onChange
          />
        </label>

        <br />
        <br />

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <hr />

      <h2>Preview</h2>
      <p>
        {/* TODO:
          Hello, I am FIRSTNAME LASTNAME.
          My email is EMAIL and I work as JOBTITLE.
        */}
      </p>

      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
```

### Answer

```js
//Here is your cleaned-up version:
import { useState } from 'react';

const initialProfile = {
  firstName: '',
  lastName: '',
  email: '',
  jobTitle: '',
};

export default function App() {
  const [profile, setProfile] = useState(initialProfile);

  function handleChange(e) {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  }

  function handleReset() {
    setProfile(initialProfile);
  }

  function previewText() {
    const { firstName, lastName, email, jobTitle } = profile;
    return `Hello, I am ${firstName} ${lastName}. My email is ${email} and I work as ${jobTitle}.`;
  }

  return (
    <div
      style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '500px' }}>
      <h1>Profile Form</h1>

      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            value={profile.jobTitle}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <hr />

      <h2>Preview</h2>
      <p>{previewText()}</p>

      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
```

### improvement (draft)

## Q2: Form with Checkbox + Object State

**📋 Tasks**

1. Make all form fields controlled.
2. Update text inputs correctly.
3. Update the checkbox correctly.
4. Show a live preview under the form.
5. Disable the Submit button unless the checkbox is checked.
6. Add a Reset button.

```js
//Starter Boilerplate
import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  agreeToTerms: false,
};

export default function App() {
  const [form, setForm] = useState(initialForm);

  function handleChange(e) {
    // TODO:
    // If the input is a checkbox, use e.target.checked
    // Otherwise use e.target.value
    // Update the correct property using e.target.name
  }

  function handleReset() {
    // TODO:
    // Reset form back to initialForm
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Submitted!');
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 500 }}>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            // TODO: value
            // TODO: onChange
          />
        </label>

        <br />
        <br />

        <label>
          Email:
          <br />
          <input
            type="email"
            name="email"
            // TODO: value
            // TODO: onChange
          />
        </label>

        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="agreeToTerms"
            // TODO: checked
            // TODO: onChange
          />
          I agree to the terms
        </label>

        <br />
        <br />

        <button type="submit">Submit</button>

        <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>
          Reset
        </button>
      </form>

      <hr />

      <h2>Preview</h2>
      <p>Name: {/* TODO */}</p>
      <p>Email: {/* TODO */}</p>
      <p>Agreed: {/* TODO */}</p>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
```

### Answer

```js
//Clean corrected version
import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  agreeToTerms: false,
};

export default function App() {
  const [form, setForm] = useState(initialForm);

  function handleChange(e) {
    const { name, type, value, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleReset() {
    setForm(initialForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Submitted!');
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 500 }}>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Email:
          <br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={form.agreeToTerms}
            onChange={handleChange}
          />
          I agree to the terms
        </label>

        <br />
        <br />

        <button type="submit" disabled={!form.agreeToTerms}>
          Submit
        </button>

        <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>
          Reset
        </button>
      </form>

      <hr />

      <h2>Preview</h2>
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
      <p>Agreed: {form.agreeToTerms ? 'Yes' : 'No'}</p>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
```

### Improvement (draft)

**Score: 8/10**

```js
function handleChange(e) {
  const { name, type, value, checked } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));
}
<button type="submit" disabled={!form.agreeToTerms}>
```

## Q2: Multiple Checkboxes (4/xx)

**📋 Tasks**
Build a form where the user can select multiple hobbies using checkboxes.

1. Make the text input controlled.
2. Make all checkboxes controlled.
3. When a checkbox is checked, add that hobby to the array.
4. When a checkbox is unchecked, remove that hobby from the array.
5. Show the selected hobbies in the preview.
6. Add a Reset button.

```js
import { useState } from 'react';

const initialForm = {
  name: '',
  hobbies: [],
};

const hobbyOptions = ['Reading', 'Music', 'Sports', 'Coding'];

export default function App() {
  const [form, setForm] = useState(initialForm);

  function handleNameChange(e) {
    // TODO:
    // update form.name
  }

  function handleHobbyChange(e) {
    // TODO:
    // if checked, add the hobby to form.hobbies
    // if unchecked, remove the hobby from form.hobbies
  }

  function handleReset() {
    // TODO:
    // reset form back to initialForm
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 500 }}>
      <h1>Hobby Form</h1>

      <label>
        Name:
        <br />
        <input
          type="text"
          name="name"
          // TODO: value
          // TODO: onChange
        />
      </label>

      <br />
      <br />

      <p>Select your hobbies:</p>

      {hobbyOptions.map((hobby) => (
        <label key={hobby} style={{ display: 'block', marginBottom: 8 }}>
          <input
            type="checkbox"
            name="hobbies"
            value={hobby}
            // TODO: checked
            // TODO: onChange
          />
          {hobby}
        </label>
      ))}

      <br />

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <hr />

      <h2>Preview</h2>
      <p>Name: {/* TODO */}</p>
      <p>
        Hobbies:
        {/* TODO: show selected hobbies joined by comma */}
      </p>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
```

### Answer

```js
import { useState } from 'react';

const initialForm = {
  name: '',
  hobbies: [],
};

const hobbyOptions = ['Reading', 'Music', 'Sports', 'Coding'];

export default function App3() {
  const [form, setForm] = useState(initialForm);

  function handleNameChange(e) {
    setForm((prev) => ({ ...prev, name: e.target.value }));
  }

  function handleHobbyChange(e) {
    const { checked, value } = e.target;

    checked
      ? setForm((prev) => ({ ...prev, hobbies: [...prev.hobbies, value] }))
      : setForm((prev) => ({
          ...prev,
          hobbies: prev.hobbies.filter((hobby) => hobby !== value),
        }));
  }

  function handleReset() {
    setForm(initialForm);
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 500 }}>
      <h1>Hobby Form</h1>

      <label>
        Name:
        <br />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleNameChange}
        />
      </label>

      <br />
      <br />

      <p>Select your hobbies:</p>

      {hobbyOptions.map((hobby) => (
        <label key={hobby} style={{ display: 'block', marginBottom: 8 }}>
          <input
            type="checkbox"
            name="hobbies"
            value={hobby}
            checked={form.hobbies.includes(hobby)}
            onChange={handleHobbyChange}
          />
          {hobby}
        </label>
      ))}

      <br />

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <hr />

      <h2>Preview</h2>
      <p>Name: {form.name}</p>
      <p>
        Hobbies: {form.hobbies.length > 0 ? form.hobbies.join(', ') : 'None'}
      </p>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
```

### Improvement (draft)

``js

<p>Hobbies: {form.hobbies.length > 0 ? form.hobbies.join(', ') : 'None'}</p>
```
