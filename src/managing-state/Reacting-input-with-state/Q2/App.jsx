// My Code - 9/27 Sat. Not working.
// Runtime Error
// App.js: e is not defined (19:73)

//   16 |       <div>
//   17 |         <label>
//   18 |         First name:{' '}
// > 19 |         <input name="fistName" value={firstName} onChange={setFirstName(e.target.value)} />
///===========ANSWER
// <input name="fistName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
// SUBMIT - WRONG
//	<button type="submit" onClick={handleFormSubmit}> // WRONG
//  	{editMode ? 'Save Profile' : 'Edit Profile'}
//	</button >
///In a controlled form component, React manages the form element's state. The value of the input is stored in a state variable and updated via an onChange handler.		  
//https://www.greatfrontend.com/react-interview-playbook/react-forms#controlled-form-components

{/* <form onSubmit={handleSubmit}>
<button type="submit">Submit</button> */}

// const handleSubmit = (event) => {
// event.preventDefault(); // Prevents the default browser behavior of refreshing the page
// console.log('Form submitted!');
// };


import { useState } from 'react';

export default function EditProfile() {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  return (
    <form>
      {editMode ? (
        <div>
          <label>
            First name:{' '}
            <input
              name="fistName"
              value={firstName}
              onChange={setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last name:{' '}
            <input
              name="lastName"
              value={lastName}
              onChange={setLastName(e.target.value)}
            />
          </label>
        </div>
      ) : (
        <div>
          <label>
            First name: <b>{firstName}</b>
          </label>
          <label>
            Last name: <b>{lastName}</b>
          </label>
        </div>
      )}

      <button type="submit" onClick={handleFormSubmit}>
        {editMode ? 'Save Profile' : 'Edit Profile'}
      </button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
///=========ANSWER
//
import { useState } from 'react';

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>
        First name:{' '}
        {isEditing ? (
          <input
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? (
          <input
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}
