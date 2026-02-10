// Starter #4
// - Optimize expensive calculations using useMemo
// - Prevent unnecessary re-renders using useCallback
// - (Optional) Use React.memo where appropriate
// - 🔥 Bonus (Optional, if time allows)
// - Wrap UserRow with React.memo
// - Explain why memoization works only with stable references
// - Identify places where memoization is unnecessary
import { useState } from 'react';

const USERS = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'user' },
  { id: 4, name: 'Diana', role: 'admin' },
];

export default function App() {
  const [roleFilter, setRoleFilter] = useState('all');
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>User Dashboard</h1>

      <button onClick={handleIncrement}>Increment Counter: {count}</button>

      <hr />

      <label>
        Filter by role:
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </label>

      <UserList users={USERS} roleFilter={roleFilter} />
    </div>
  );
}

function UserList({ users, roleFilter }) {
  console.log('UserList rendered');

  const filteredUsers =
    roleFilter === 'all' ? users : users.filter((u) => u.role === roleFilter);

  return (
    <div>
      <h2>Users</h2>
      {filteredUsers.map((user) => (
        <UserRow key={user.id} user={user} />
      ))}
    </div>
  );
}

function UserRow({ user }) {
  console.log('UserRow rendered:', user.name);

  const expensiveCalculation = () => {
    console.log('Running expensive calculation for', user.name);
    let total = 0;
    for (let i = 0; i < 1_000_000; i++) {
      total += i;
    }
    return total;
  };

  const result = expensiveCalculation();

  return (
    <div>
      {user.name} ({user.role}) – calc: {result}
      <button onClick={() => alert(user.name)}>Click</button>
    </div>
  );
}
