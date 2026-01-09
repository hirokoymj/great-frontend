import { useState } from 'react';

const initialTodos = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Practice state updates', completed: true },
];

export default function TodoQuiz() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = () => {
    const newTodo = { id: Date.now(), title: newTitle, completed: false }; //❌
    setTodos((prev) => [...prev, newTodo]); //❌ 1. prev.todos is incorrect
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((d) => d.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      (prev) =>
        prev.map((d) => (d.id === id ? { ...d, completed: !d.completed } : d)) //❌ 1. prev.todos is incorrect
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React State Quiz</h2>

      {/* Add Todo */}
      <div>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New todo"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.title} — {todo.completed ? 'Yes' : 'No'}
            </span>

            <button onClick={() => handleToggle(todo.id)}>Toggle</button>

            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
