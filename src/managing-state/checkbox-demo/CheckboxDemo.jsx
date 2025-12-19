import { useState } from 'react';

// 1. single checkbox
//const [isAgreed, setIsAgreed] = useState(false);

// 2. Multi-checkbox
//const labels = ['english', 'maths', 'physics'];
//const [selectedOptions, setSelectedOptions] = useState([]);

/**IMPORTANT
- In React, when you write onChange={handleCheckboxChange}, React automatically passes the event object to your handler.
- Writing onChange={(e) => handleCheckboxChange(e)} does the same thing but adds an unnecessary wrapper function — it’s only needed if you want to:
- Pass extra arguments (onChange={(e) => handleCheckboxChange(e, 'maths')}), or
- Perform inline logic before calling the handler.
- You don’t have to manually write (e) => handleCheckboxChange(e) unless you want to add custom arguments or extra logic inline.
*/
export default function CheckboxDemo() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]); //['english', 'maths', 'physics']
  const labels = ['english', 'maths', 'physics'];

  const onHandleCheckboxChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
        Agree?
      </label>
      <p>{isAgreed.toString()}</p>
      <hr />
      {labels.map((label) => (
        <label key={label}>
          <input
            type="checkbox"
            value={label}
            checked={selectedOptions.includes(label)}
            onChange={onHandleCheckboxChange}
          />
          {label}
        </label>
      ))}
      <p>{selectedOptions.join(', ')}</p>
    </div>
  );
}

const CreateCheckbox1 = () => {
  const [options, setOptions] = useState([]);
  const labels = ['english', 'maths', 'physics'];

  const handleChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked) {
      setSelectedOptions((prev) => [...prev, value]);
    } else {
      setSelectedOptions((prev) => prev.filter((d) => d !== value));
    }
  };

  return (
    <div>
      {labels.map((label) => (
        <label key={label}>
          <input
            type="checkbox"
            value={label}
            checked={options.includes(label)}
            onChange={handleChange}
          />
          {label}
        </label>
      ))}
      <hr />
      Output: {options.join(', ')}
    </div>
  );
};

const MultiCheckBox = () => {
  const [items, setItems] = useState([
    { id: 0, title: 'Warm socks', packed: true },
    { id: 1, title: 'Travel journal', packed: false },
    { id: 2, title: 'Watercolors', packed: false },
  ]);

  const handleChange = (e, id) => {
    const checked = e.target.checked;
    const updated = items.map((item) =>
      item.id === id ? { ...item, packed: checked } : item
    );
    setItems(updated);
  };

  render(
    <div>
      <h1>Multi checkboxes</h1>
      {items.map((item) => (
        <label key={item.id}>
          <input
            type="checkbox"
            checke={item.packed}
            onChange={(e) => handleChange(item.id)}
          />
          item.title
        </label>
      ))}
    </div>
  );
};
