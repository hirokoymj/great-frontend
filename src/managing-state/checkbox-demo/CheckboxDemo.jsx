import { useState } from 'react';

// 1
//const labels = ['english', 'maths', 'physics'];
//const [options, setOptions] = useState([]);

// 2
// const initialItems = [
//   { id: 0, title: 'Warm socks', packed: true },
//   { id: 1, title: 'Travel journal', packed: false },
//   { id: 2, title: 'Watercolors', packed: false },
// ]
//  const [items, setItems] = useState(initialItems);

export default function CheckboxDemo() {
  const [tac, setTac] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    checked
      ? setSelectedOptions((prev) => [...prev, value])
      : setSelectedOptions((prev) => prev.filter((option) => option !== value));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={tac}
        onChange={(e) => setTac(e.target.checked)}
      />
      <label htmlFor="checkbox-input">Agree to terms and conditions</label>
      <p>Agree: {tac ? 'checked' : 'unchecked'}</p>
      <hr />
      <label>
        <input
          type="checkbox"
          value="english"
          checked={selectedOptions.includes('english')}
          onChange={handleCheckboxChange}
        />
        English
      </label>
      <label>
        <input
          type="checkbox"
          value="maths"
          checked={selectedOptions.includes('maths')}
          onChange={handleCheckboxChange}
        />
        Maths
      </label>
      <label>
        <input
          type="checkbox"
          value="physics"
          checked={selectedOptions.includes('physics')}
          onChange={handleCheckboxChange}
        />
        Physics
      </label>

      <p>{selectedOptions.join(',')}</p>
    </div>
  );
}
/**
- In React, when you write onChange={handleCheckboxChange}, React automatically passes the event object to your handler.
- Writing onChange={(e) => handleCheckboxChange(e)} does the same thing but adds an unnecessary wrapper function — it’s only needed if you want to:
- Pass extra arguments (onChange={(e) => handleCheckboxChange(e, 'maths')}), or
- Perform inline logic before calling the handler.
- You don’t have to manually write (e) => handleCheckboxChange(e) unless you want to add custom arguments or extra logic inline.
*/

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
