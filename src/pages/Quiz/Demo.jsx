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
    setTasks((prev) => {
      return prev.map((task) =>
        task.id === taskId ? { ...task, title: editText } : task,
      );
    });
    setEditingId('');
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
            {
              /*
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
            */
              editingId === task.id ? (
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
                  <p
                    style={{
                      textDecoration: task.done ? 'line-through' : 'none',
                    }}>
                    {task.title}
                  </p>
                  <button onClick={() => handleStartEdit(task)}>Edit</button>
                  <button onClick={() => handleDeleteTask(task.id)}>
                    Delete
                  </button>
                </>
              )
            }
          </li>
        ))}
      </ul>

      <hr />
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}

//   <ul>
//     {tasks.map((task) => (
//       <li key={task.id} style={{ marginBottom: 8 }}>
//         {
//           /*
//           TODO:
//           If editingId === task.id:
//             - show input (value = editText)
//             - Save button
//             - Cancel button

//           Else:
//             - checkbox
//             - title
//             - Edit button
//             - Delete button
//         */
//           <div>
//             <input
//               type="checkbox"
//               checked={task.done}
//               onChange={() => handleToggleTask(task.id)}
//             />
//             {task.title}
//             <button onClick={() => setIsEdit((prev) => !prev)}>Edit</button>
//             <button onClick={() => handleDeleteTask(task.id)}>
//               Delete
//             </button>
//             {editingId && (
//               <div>
//                 <input
//                   type="text"
//                   value={editText}
//                   onChange={(e) => editText(e.target.value)}
//                 />
//                 <button>Save</button>
//                 <button>Cancel</button>
//               </div>
//             )}
//           </div>
//         }
//       </li>
//     ))}
//   </ul>
