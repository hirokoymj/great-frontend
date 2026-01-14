import { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  role: 'user',
  address: {
    city: '',
    country: '',
  },
};
////❌ Why this is wrong
function userReducer(state, action) {
  // TODO: handle updates
  const { type, field, value } = action;
  switch (type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [field]: value,
      };
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        address: {
          ...state.address,
          [field]: value,
        },
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function UserProfileReducer() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <div>
      <h2>User Profile (useReducer version)</h2>

      <input
        value={state.name}
        placeholder="Name"
        onChange={(e) =>
          dispatch({
            type: 'UPDATE_FIELD',
            field: 'name',
            value: e.target.value,
          })
        }
      />

      <input
        value={state.email}
        placeholder="Email"
        onChange={(e) =>
          dispatch({
            type: 'UPDATE_FIELD',
            field: 'email',
            value: e.target.value,
          })
        }
      />

      <input
        value={state.address.city}
        placeholder="City"
        onChange={(e) =>
          dispatch({
            type: 'UPDATE_ADDRESS',
            field: 'city',
            value: e.target.value,
          })
        }
      />

      <input
        value={state.address.country}
        placeholder="Country"
        onChange={(e) =>
          dispatch({
            type: 'UPDATE_ADDRESS',
            field: 'country',
            value: e.target.value,
          })
        }
      />

      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
