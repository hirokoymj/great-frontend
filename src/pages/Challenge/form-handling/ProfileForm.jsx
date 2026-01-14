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
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    level: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // TODO: handle input change
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'radio') {
      checked && setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit logic
    console.log(JSON.stringify(formData));
    //Using a direct state update instead of a functional update
    setFormData({
      name: '',
      role: '',
      level: '',
      subscribe: false,
    });
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
          value={formData.name}
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
          value={formData.role}
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
            checked={formData.level === 'junior'}
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
            checked={formData.level === 'mid'}
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
            checked={formData.level === 'senior'}
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
          checked={formData.subscribe}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>

      <hr />

      <button type="submit" disabled={formData.name === ''}>
        Submit
      </button>

      {/* TODO: optional preview */ JSON.stringify(formData)}
    </form>
  );
}
