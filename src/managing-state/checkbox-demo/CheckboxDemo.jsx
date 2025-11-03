import { useState } from 'react';

//const options = ['english', 'maths', 'physics'];
// const initialItems = [
//   { id: 0, title: 'Warm socks', packed: true },
//   { id: 1, title: 'Travel journal', packed: false },
//   { id: 2, title: 'Watercolors', packed: false },
// ];

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
  const [selectedOptions, setSelectedOptions] = useState(['english']);
  const options = ['english', 'maths', 'physics'];

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
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            onChange={handleChange}
            checked={selectedOptions.includes(option)}
          />
          {option}
        </label>
      ))}
      <hr />
      Output: {selectedOptions.join(', ')}
    </div>
  );
};
