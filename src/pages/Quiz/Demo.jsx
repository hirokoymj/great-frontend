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
