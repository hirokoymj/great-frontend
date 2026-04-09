# Quiz - State (array of object)

<!-- create index  cmd+Shift+P -->

- [Quiz - State (array of object)](#quiz---state-array-of-object) - [Q1: State (Array of Objects)- 04/06](#q1-state-array-of-objects--0406) - [Answer](#answer) - [Improvement (draft)](#improvement-draft) - [Q2: Edit Item (Array of Objects)- 04/06](#q2-edit-item-array-of-objects--0406) - [Answer](#answer-1) - [Improvement (draft)](#improvement-draft-1)

  <!-- create index  cmd+Shift+P -->

<!-- ## Q: State (Objects)- mm/dd
**📋 Requirements**
```js
```
### Answer
```js
```
### Improvement (draft) -->

## Q0: Learn React

- [Updating Arrays in State](https://github.com/hirokoymj/great-frontend?tab=readme-ov-file#updating-arrays-in-state)

## Q1: State (Array of Objects)- 04/06

**📋 Requirements**

- add a task
- toggle a task as done
- delete a task

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
//Clean corrected version
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
```

### Improvement (draft)

There are 2 bugs to fix.

```js
- X task.id === taskId ? { ...task, done: !prev.done } : task
- task.id === taskId ? { ...task, done: !task.done } : task
```

## Q2: Edit Item (Array of Objects)- 04/06

**📋 Requirements**

- click Edit
- modify the task title
- click Save
- or Cancel

```js
// Starter Boilerplate
import { useState } from 'react';

let nextId = 3;

const initialTasks = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Study React', done: true },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTitle, setNewTitle] = useState('');

  // TODO: add editing state
  // const [editingId, setEditingId] = ...
  // const [editText, setEditText] = ...

  function handleAddTask() {
    if (newTitle.trim() === '') return;

    setTasks((prev) => [
      ...prev,
      { id: nextId++, title: newTitle.trim(), done: false },
    ]);

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

  function handleStartEdit(task) {
    // TODO:
    // set editingId
    // set editText
  }

  function handleSaveEdit(taskId) {
    // TODO:
    // update title using editText
    // clear editingId
  }

  function handleCancelEdit() {
    // TODO:
    // clear editingId only
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 500 }}>
      <h1>Task List (Editable)</h1>

      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={handleAddTask} style={{ marginLeft: 8 }}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: 8 }}>
            {/*
              TODO:
              If editingId === task.id:
                - show input (value = editText)
                - Save button
                - Cancel button

              Else:
                - checkbox
                - title
                - Edit button
                - Delete button
            */}
          </li>
        ))}
      </ul>

      <hr />
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}
```

### Answer

```js
//Full corrected code
import { useState } from 'react';

let nextId = 3;

const initialTasks = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Study React', done: true },
];

export default function EditItemDemo() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTitle, setNewTitle] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  function handleAddTask() {
    if (newTitle.trim() === '') return;

    setTasks((prev) => [
      ...prev,
      { id: nextId++, title: newTitle.trim(), done: false },
    ]);

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

  function handleStartEdit(task) {
    setEditingId(task.id);
    setEditText(task.title);
  }

  function handleSaveEdit(taskId) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, title: editText } : task,
      ),
    );
    setEditingId(null);
  }

  function handleCancelEdit() {
    setEditingId(null);
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 500 }}>
      <h1>Task List (Editable)</h1>

      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={handleAddTask} style={{ marginLeft: 8 }}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: 8 }}>
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
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
                <button
                  onClick={() => handleStartEdit(task)}
                  style={{ marginLeft: 8 }}>
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  style={{ marginLeft: 8 }}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <hr />
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}
```

### Improvement (draft)

- The checkbox was wired to the wrong handler.
- The normal view was missing the Edit button that switches to edit mode.
