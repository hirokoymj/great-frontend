# Quiz - State (array)

<!-- create index  cmd+Shift+P -->

- [Quiz - State (array)](#quiz---state-array)
	- [Q1: Learn React](#q1-learn-react)
	- [Q2: State (add, edit and deltete todos) - ❌(04/06), ❌(05/25), ✅(5/28), ✅(5/31)](#q2-state-add-edit-and-deltete-todos---0406-0525-528-531)
		- [Answer](#answer)

✅❌

## Q1: Learn React

- [Updating Arrays in State](https://github.com/hirokoymj/great-frontend?tab=readme-ov-file#updating-arrays-in-state)

```text
- add: ..., [...prev, newObj]
- delete: filter
- edit: map
```

## Q2: State (add, edit and deltete todos) - ❌(04/06), ❌(05/25), ✅(5/28), ✅(5/31)

- Add, edit and delete a task

```js
import { useState } from 'react';

let nextId = 3;

const initialTasks = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Study React', done: true },
];

export default function Demo() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTitle, setNewTitle] = useState('');

  function handleAddTask() {
    // TODO:
    // 1. Ignore empty input
    // 2. Create a new task object
    // 3. Add it to tasks
    // 4. Clear the input
  }

  function handleToggleTask(taskId) {
    // TODO:
    // Update only the clicked task
    // Toggle its done value
  }

  function handleDeleteTask(taskId) {
    // TODO:
    // Remove the matching task from tasks
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
```

### Answer

```js
import { useState } from 'react';

let nextId = 3;

const initialTasks = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Study React', done: true },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTitle, setNewTitle] = useState('');
  //✅
  function handleAddTask() {
    if (newTitle === '') return;
    const newTask = { id: nextId++, title: newTitle, done: false };
    setTasks((prev) => [
      ...prev,
      { id: nextId + 1, title: newTitle, done: false },
    ]);
    setNewTitle('');
  }
  //❌ missing return
  function handleToggleTask(taskId) {
    setTasks((prev) =>
      prev.map((task) => {
        return task.id === taskId ? { ...task, done: !task.done } : task;
      }),
    );
  }
  //✅
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
```

```js
- X task.id === taskId ? { ...task, done: !prev.done } : task
- OK: task.id === taskId ? { ...task, done: !task.done } : task
```
