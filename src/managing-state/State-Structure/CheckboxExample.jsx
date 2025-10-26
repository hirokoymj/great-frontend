import { useState } from 'react';

//const options = ['english', 'math', 'physics'];

function CheckboxExample() {
  const [tac, setTac] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {};

  return (
    <div>
      <h1>=====Single</h1>
      <input
        type="checkbox"
        name="tac"
        checked={tac}
        onChange={(event) => setTac(event.target.checked)}
      />
      <label>Agree to terms and conditions</label>
      <p>Agree: {tac ? 'checked' : 'unchecked'}</p>
      <hr />
      <h2>=====Multi</h2>
      <input
        type="checkbox"
        name="subject"
        value="english"
        checked={'//TODO'}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox-english" style={{ display: 'inline' }}>
        English
      </label>
      <input
        type="checkbox"
        name="subject"
        value="maths"
        checked={'//TODO'}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox-maths" style={{ display: 'inline' }}>
        Maths
      </label>

      <p>{selectedOptions.join(',')}</p>
    </div>
  );
}
export default CheckboxExample;
