import { useState, useMemo } from 'react';

const USERS = [
  { id: 1, name: 'Alice', age: 28, isActive: true },
  { id: 2, name: 'Bob', age: 35, isActive: false },
  { id: 3, name: 'Charlie', age: 42, isActive: true },
  { id: 4, name: 'Diana', age: 30, isActive: false },
];

export default function ProductList3() {
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [users, setUsers] = useState(USERS);

  // TODO: derive visibleUsers based on showActiveOnly
  const visibleUsers = showActiveOnly ? users.filter((d) => d.isActive) : users;

  // TODO: use useMemo to calculate average age of visibleUsers
  //✅ Better Version
  const averageAge = useMemo(() => {
    if (visibleUsers.length === 0) return 0;

    const sum = visibleUsers.reduce((acc, currentVal) => {
      acc = acc + currentVal.age;
      return acc;
    }, 0);
    return (sum / visibleUsers.length).toFixed(2);
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
        {
          /* TODO: render visible users */
          visibleUsers.map(({ id, name, age }) => (
            <li key={id}>{`${id}, ${name}, ${age},`}</li>
          ))
        }
      </ul>

      <h3>Average Age: {averageAge}</h3>
    </div>
  );
}

//“I memoized the average age because it’s derived data that depends on the
// visible users list, and useMemo ensures the calculation only runs when that list changes.”
