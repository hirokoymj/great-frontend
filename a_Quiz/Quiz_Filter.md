# Quiz - Filter

- [Quiz - Filter](#quiz---filter) - [POINT](#point)
  - [Q1: Filter by date ❌(05/28)](#q1-filter-by-date-0528)
    - [Answer](#answer)
  - [Q2: Todo list filter ✅(05/28)](#q2-todo-list-filter-0528)
    - [Answer](#answer-1)

❌✅

## Summary: Derive, Don't Store

> Store only the user's **decision** in state. Compute the filtered list **inline during render**.

```
state    = user's decision  (a date, a boolean flag, etc.)
filtered = derived from data + state  ← computed inline, NOT stored
```

| Store in state         | Derive inline |
| ---------------------- | ------------- |
| User's filter value    | Filtered list |
| Sort flag (true/false) | Sorted list   |
| Show/hide toggle       | Visible list  |

**React doc:** [Don't mirror props in state](https://react.dev/learn/choosing-the-state-structure)

---

### POINT — Q1

```js
let filtered = filterDate
  ? products.filter((product) => new Date(product.date) < new Date(filterDate))
  : products;

if (isSorted) {
  filtered = [...filtered].sort((a, b) => a.price - b.price);
}
```

### POINT — Q2

```js
const activeTodos = todos.filter((todo) => !todo.completed);
const visibleTodos = showActive ? activeTodos : todos;
```

---

## Q1: Filter by date ❌(05/28)

```js
import { useState } from 'react';
import './styles.css';

export default function Demo({ products = [] }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  //const handleFilter = () => {};
  //const sort = () => {};
  //let filtered

  return (
    <div className="app">
      <h1>Product Search</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>date</th>
            <th onClick={sort}>price</th>
          </tr>
        </thead>
        <tbody>
          {//TODO}
        </tbody>
      </table>
    </div>
  );
}
```

### Answer

```js
import { useState } from 'react';
import './styles.css';

export default function Demo({ products = [] }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  const handleFilter = () => {
    setFilterDate(selectedDate);
  };

  const sort = () => {
    setIsSorted(!isSorted);
  };

  let filtered = filterDate
    ? products.filter(
        (product) => new Date(product.date) < new Date(filterDate),
      )
    : products;

  if (isSorted) {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }

  return (
    <div className="app">
      <h1>Product Search</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>date</th>
            <th onClick={sort}>price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(({ id, name, date, price }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{date}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## Q2: Todo list filter ✅(05/28)

- Show/hide todo list using a checkbox

```js
import { useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Get apples', completed: true },
  { id: 2, text: 'Get oranges', completed: true },
  { id: 3, text: 'Get carrots', completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  //const activeTodos
  //const visibleTodos

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
      <footer>{activeTodos.length} todos left</footer>
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
```

### Answer

```js
import { useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Get apples', completed: true },
  { id: 2, text: 'Get oranges', completed: true },
  { id: 3, text: 'Get carrots', completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? todos.filter((todo) => todo) : todos;

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
      <footer>{activeTodos.length} todos left</footer>
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
```

https://codesandbox.io/p/sandbox/mpf5wm?file=%2Fsrc%2FApp.js
