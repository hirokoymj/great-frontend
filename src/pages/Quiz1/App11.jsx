import React, { useState } from 'react';

let nextId = 3;

const initialTasks = [
  { id: 1, title: 'Buy milk' },
  { id: 2, title: 'Study React' },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState('');

  function handleAddTask() {
    // TODO:
    // 1. ignore empty input
    if (text.trim() === '') return;
    // 2. create a new task object
    const newTask = { id: nextId++, title: text.trim() };
    // 3. add it to tasks
    setTasks((prev) => [...prev, newTask]);
    // 4. clear the input
    setText('');
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Task Manager</h1>

      <input
        type="text"
        value={text}
        placeholder="Enter a task"
        onChange={(e) => {
          // TODO: update text state
          setText(e.target.value);
        }}
      />
      <button onClick={handleAddTask}>Add</button>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
