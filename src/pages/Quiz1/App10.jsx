const tasks = [];

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(({ id, title, completed }) => (
            <li key={id}>
              {title} : {completed ? '✅' : '⬜'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
