import { useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: 'user',
  });
  const [error, setError] = useState({
    name: false,
    email: false,
  });

  const handleChange = (e) => {
    // TODO: update user state correctly
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onReset = () => {
    setUser({
      name: '',
      email: '',
      role: 'user',
    });
  };

  const validateField = (field, value) => {
    setError((prev) => {
      return {
        ...prev,
        [field]: !value,
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
        onBlur={(e) => validateField('name', e.target.value)}
      />
      <p>{error.name && 'Name is required field.'}</p>

      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        onBlur={(e) => validateField('email', e.target.value)}
      />
      <p>{error.email && 'Email is required field.'}</p>

      <select name="role" value={user.role} onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
