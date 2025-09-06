import { useState } from 'react';

function RadioGroupExample() {
  const [gender, setGender] = useState('male');

  return (
    <div>
      <div>
        <label htmlFor="radio-male">
          <input
            id="radio-male"
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(event) => setGender(event.target.value)}
          />
          Male
        </label>
        <label htmlFor="radio-female">
          <input
            id="radio-female"
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(event) => setGender(event.target.value)}
          />
          Female
        </label>
      </div>
      <p>Selected gender: {gender}</p>
    </div>
  );
}

export default RadioGroupExample;

//https://www.greatfrontend.com/react-interview-playbook/react-forms#radio-group
