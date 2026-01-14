import { useState } from 'react';

export default function ProfileForm() {
  // TODO: initialize form state
  // Example shape:
  // {
  //   name: "",
  //   role: "",
  //   level: "",
  //   subscribe: false,
  // }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // TODO: handle input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Profile</h2>

      {/* Text Input */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          // TODO: value
          onChange={handleChange}
        />
      </label>

      <hr />

      {/* Dropdown */}
      <label>
        Role:
        <select
          name="role"
          // TODO: value
          onChange={handleChange}>
          <option value="">Select role</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
      </label>

      <hr />

      {/* Radio Buttons */}
      <fieldset>
        <legend>Experience Level</legend>

        <label>
          <input
            type="radio"
            name="level"
            value="junior"
            // TODO: checked
            onChange={handleChange}
          />
          Junior
        </label>

        <label>
          <input
            type="radio"
            name="level"
            value="mid"
            // TODO: checked
            onChange={handleChange}
          />
          Mid
        </label>

        <label>
          <input
            type="radio"
            name="level"
            value="senior"
            // TODO: checked
            onChange={handleChange}
          />
          Senior
        </label>
      </fieldset>

      <hr />

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          name="subscribe"
          // TODO: checked
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>

      <hr />

      <button type="submit">Submit</button>

      {/* TODO: optional preview */}
    </form>
  );
}
