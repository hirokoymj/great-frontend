import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  role: 'user',
  address: {
    city: '',
    country: '',
  },
};

export default function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: 'user',
    address: {
      city: '',
      country: '',
    },
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    // TODO: handle both top-level and nested updates
    const { name, value } = e.target;
    const isAddressField = ['city', 'country'].includes(name);

    // setUser((prev) => {
    //   return name === 'city' || name === 'country'
    //     ? { ...prev, address: { ...prev.address, [name]: value } }
    //     : { ...prev, [name]: value };
    // });
    setUser((prev) => {
      return isAddressField
        ? { ...prev, address: { ...prev.address, [name]: value } }
        : { ...prev, [name]: value };
    });
  };

  const onReset = () => {
    setUser(initialState);
    setError(null);
  };
  //❌ city error is lost
  const validateField = (field, value) => {
    setError((prev) => {
      return {
        ...prev,
        address: {
          ...prev?.address,
          [field]: !value,
        },
      };
    });
  };

  return (
    <div>
      <h2>User Profile</h2>

      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />

      <input
        name="city"
        placeholder="City"
        value={user.address.city}
        onChange={handleChange}
        onBlur={(e) => validateField('city', e.target.value)}
      />
      <p>{error?.address?.city && 'City is required.'}</p>
      <p>
        {error && error.address && error.address.city && 'City is required.'}
      </p>

      <input
        name="country"
        placeholder="Country"
        value={user.address.country}
        onChange={handleChange}
        onBlur={(e) => validateField('country', e.target.value)}
      />
      <p>{error?.address?.country && 'Country is required.'}</p>

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
