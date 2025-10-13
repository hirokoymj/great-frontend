import { useState, useMemo } from 'react';
const initialTodos = [
  {
    id: 0,
    text: 'Get apples',
    completed: true,
  },
  {
    id: 1,
    text: 'Get oranges',
    completed: true,
  },
  {
    id: 2,
    text: 'Get carrots',
    completed: false,
  },
];
let nextId = 3;

export function createTodo(text, completed = false) {
  return {
    id: nextId++,
    text,
    completed,
  };
}

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const visibleTodos = showActive
    ? todos.filter((todo) => !todo.completed)
    : todos;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {todos.filter((d) => !d.completed).length} left out of {todos.length}
      </footer>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}
