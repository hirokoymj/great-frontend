import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  agreeToTerms: false,
};

export default function App() {
  const [form, setForm] = useState(initialForm);

  //   function handleChange(e) {
  //     const checked = e.target.checked;
  //     const name = e.target.name;
  //     const value = e.target.value;

  //     checked
  //       ? setForm((prev) => ({ ...prev, agreeToTerms: checked }))
  //       : setForm((prev) => ({ ...prev, [name]: value }));
  //   }

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

        <button type="submit">Submit</button>

        <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>
          Reset
        </button>
      </form>

      <hr />

      <h2>Preview</h2>
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
      <p>Agreed: {form.agreeToTerms}</p>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
