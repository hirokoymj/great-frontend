import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      //Code
    }
    case 'changed_name': {
      //Code
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };

export default function TestForm() {
  const [state, dispatch] = useReducer(); ///Code here

  function handleButtonClick() {
    //Code here
  }

  function handleInputChange(e) {
    //Code here
  }

  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
}

///My Test #1 not working both input and increment button.
//{type: 'incremented_age', age: NaN} --> Action object
//dispatch({}) dispatch send ACTION object
//wrong!!! e.target.name!!! -> e.target.value
