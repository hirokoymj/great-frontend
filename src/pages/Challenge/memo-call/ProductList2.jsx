import { useState, useMemo } from 'react';

const USERS = [
  { id: 1, name: 'Alice', age: 28, isActive: true },
  { id: 2, name: 'Bob', age: 35, isActive: false },
  { id: 3, name: 'Charlie', age: 42, isActive: true },
  { id: 4, name: 'Diana', age: 30, isActive: false },
];

export default function App() {
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  // TODO: derive visibleUsers based on showActiveOnly
  const visibleUsers = showActiveOnly
    ? USERS.filter((d) => d.isActive === showActiveOnly)
    : USERS;

  const average = useMemo(() => {
    if (visibleUsers.length === 0) return 0;
    const total = visibleUsers.reduce(
      (acc, currentVal) => (acc = acc + currentVal),
      0
    );
    return Math.round(total / visibleUsers.length);
  }, [visibleUsers]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>

      <label>
        <input
          type="checkbox"
          checked={showActiveOnly}
          onChange={(e) => setShowActiveOnly(e.target.checked)}
        />
        Show active users only
      </label>

      <ul>
        {visibleUsers.map(({ id, name, age }) => (
          <li key={id}>
            {name}, {age}
          </li>
        ))}
      </ul>

      <h3>Average Age: {average}</h3>
    </div>
  );
}
