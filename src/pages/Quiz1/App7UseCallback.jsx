import { useState, useCallback, memo } from 'react';
import './styles3.css';

const initialUsers = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'David Lee' },
  { id: 5, name: 'Emma Wilson' },
];

export default function App7UseCallback() {
  const [users] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [count, setCount] = useState(0);

  // TODO: My ANSWER IS WRONG
  // With useCallback, UserRow doesn't re-render when the count state changes.
  //   const handleSelectUser = useCallback((user) => {
  //     setSelectedUser(user);
  //   }, [selectedUser]);

  const handleSelectUser = useCallback((user) => {
    setSelectedUser(user);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>useCallback Challenge</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button onClick={() => setCount((prev) => prev + 1)}>
          Count: {count}
        </button>
      </div>

      <UserList users={filteredUsers} onSelectUser={handleSelectUser} />

      <div className="selected-user">
        <strong>Selected User:</strong>{' '}
        {selectedUser ? selectedUser.name : 'None'}
      </div>
    </div>
  );
}

function UserList({ users, onSelectUser }) {
  return (
    <div className="list">
      {users.map((user) => (
        <UserRow key={user.id} user={user} onSelectUser={onSelectUser} />
      ))}
    </div>
  );
}

const UserRow = memo(function UserRow({ user, onSelectUser }) {
  console.log('Rendering:', user.name);

  return (
    <button className="user-row" onClick={() => onSelectUser(user)}>
      {user.name}
    </button>
  );
});
