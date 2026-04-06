import { useState } from 'react';

let nextId = 3;

const initialTasks = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Study React', done: true },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTitle, setNewTitle] = useState('');

  function handleAddTask() {
    //if (newTitle === '') return;
    if (newTitle.trim() === '') return;

    const newObj = {
      id: nextId++,
      title: newTitle.trim(),
      done: false,
    };
    setTasks((prev) => [...prev, newObj]);
    setNewTitle('');
  }

  function handleToggleTask(taskId) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function handleDeleteTask(taskId) {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 500 }}>
      <h1>Task List</h1>

      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="button" onClick={handleAddTask} style={{ marginLeft: 8 }}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: 8 }}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleToggleTask(task.id)}
              />
              <span
                style={{
                  marginLeft: 8,
                  textDecoration: task.done ? 'line-through' : 'none',
                }}>
                {task.title}
              </span>
            </label>

            <button
              type="button"
              onClick={() => handleDeleteTask(task.id)}
              style={{ marginLeft: 12 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <hr />

      <h2>Preview</h2>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}
