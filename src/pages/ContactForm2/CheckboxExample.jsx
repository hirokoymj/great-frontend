import { useState } from 'react';

//const options = ['english', 'maths', 'physics'];

function CheckboxExample() {
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
      <input
        type="checkbox"
        name="subject"
        id="checkbox-english"
        value="english"
        checked={selectedOptions.includes('english')}
        onChange={(event) => {
          const { value, checked } = event.target;
          checked
            ? setSelectedOptions((prev) => [...prev, value])
            : setSelectedOptions((prev) =>
                prev.filter((option) => option !== value)
              );
        }}
      />
      <label htmlFor="checkbox-english" style={{ display: 'inline' }}>
        English
      </label>
      <input
        type="checkbox"
        name="subject"
        id="checkbox-maths"
        value="maths"
        checked={selectedOptions.includes('maths')}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox-maths" style={{ display: 'inline' }}>
        Maths
      </label>
      <input
        type="checkbox"
        name="subject"
        id="checkbox-physics"
        value="physics"
        checked={selectedOptions.includes('physics')}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox-physics" style={{ display: 'inline' }}>
        Physics
      </label>

      <p>{selectedOptions.join(',')}</p>
    </div>
  );
}
export default CheckboxExample;
//=======Reference #1 Great Frontend
//https://www.greatfrontend.com/react-interview-playbook/react-forms#checkbox-input
//A checkbox is a boolean value (checked or unchecked).
//=======Reference #2: AI
// import React, { useState } from 'react';
// const options = ['Option A', 'Option B', 'Option C', 'Option D'];
// function MultipleCheckboxExample() {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, value]);
//     } else {
//       setSelectedOptions((prevSelectedOptions) =>
//         prevSelectedOptions.filter((option) => option !== value)
//       );
//     }
//   };

//   return (
//     <div>
//       <h2>Select your options:</h2>
//       {options.map((option, index) => (
//         <div key={index}>
//           <input
//             type="checkbox"
//             id={`checkbox-${index}`}
//             value={option}
//             checked={selectedOptions.includes(option)} // Check if option is in selectedOptions
//             onChange={handleCheckboxChange}
//           />
//           <label htmlFor={`checkbox-${index}`}>{option}</label>
//         </div>
//       ))}

//       <h3>Selected Options:</h3>
//       {selectedOptions.length > 0 ? (
//         <ul>
//           {selectedOptions.map((selected, index) => (
//             <li key={index}>{selected}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No options selected.</p>
//       )}
//     </div>
//   );
//}
