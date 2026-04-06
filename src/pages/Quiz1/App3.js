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
        Hobbies:
        {hobbies.join(', ')}
      </p>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
