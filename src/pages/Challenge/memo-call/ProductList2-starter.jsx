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

  // TODO: use useMemo to calculate average age of visibleUsers

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

      <ul>{/* TODO: render visible users */}</ul>

      <h3>Average Age: {/* TODO */}</h3>
    </div>
  );
}

///Answer
// import { useState, useMemo } from 'react';

// const USERS = [
//   { id: 1, name: 'Alice', age: 28, isActive: true },
//   { id: 2, name: 'Bob', age: 35, isActive: false },
//   { id: 3, name: 'Charlie', age: 42, isActive: true },
//   { id: 4, name: 'Diana', age: 30, isActive: false },
// ];

// export default function App() {
//   const [showActiveOnly, setShowActiveOnly] = useState(false);

//   const visibleUsers = showActiveOnly
//     ? USERS.filter((user) => user.isActive)
//     : USERS;

//   const averageAge = useMemo(() => {
//     if (visibleUsers.length === 0) return 0;

//     const sum = visibleUsers.reduce((acc, user) => acc + user.age, 0);
//     return (sum / visibleUsers.length).toFixed(2);
//   }, [visibleUsers]);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>User List</h2>

//       <label>
//         <input
//           type="checkbox"
//           checked={showActiveOnly}
//           onChange={(e) => setShowActiveOnly(e.target.checked)}
//         />
//         Show active users only
//       </label>

//       <ul>
//         {visibleUsers.map(({ id, name, age }) => (
//           <li key={id}>
//             {name} (Age: {age})
//           </li>
//         ))}
//       </ul>

//       <h3>Average Age: {averageAge}</h3>
//     </div>
//   );
// }
