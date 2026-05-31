# Quiz - Filter

- [Quiz - Filter](#quiz---filter)
	- [Summary:](#summary)
	- [Q1: Filter by date ❌(05/28), ❌(05/29)](#q1-filter-by-date-0528-0529)
		- [Answer](#answer)
	- [Q2: Todo list filter ✅(05/28)](#q2-todo-list-filter-0528)
		- [Answer](#answer-1)
	- [Q3: TypeScript](#q3-typescript)

❌✅

## Summary:

```
- Filter state: e.g. searchTerm, Date, Category ==> UI
- Filtered list - Computed with props or state
- Sort state: true/false ==> UI
- Sorted list: Computed with props or state
- TypeScript infers them from the initial value. `useState(false)`
```

## Q1: Filter by date ❌(05/28), ❌(05/29)

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
        <tbody></tbody>
      </table>
    </div>
  );
}
```

### Answer

```js
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  date: string;
  price: number;
}

interface TransactionProps {
  products: Product[];
}

export default function Transaction({ products }: TransactionProps) {
  const [selectedDate, setSelectedDate] = useState<string>(''); //UI
  const [filterDate, setFilterDate] = useState<string>('');
  const [sortBy, setSortBy] = useState<boolean>(false); //UI

  let filtered: Product[] = filterDate
    ? products.filter(
        (product) => new Date(product.date) < new Date(filterDate),
      )
    : products;
  filtered = sortBy
    ? [...filtered].sort((a, b) => a.price - b.price)
    : [...filtered].sort((a, b) => b.price - a.price);

  return (
    <div className="app">
      <h1>Product Search</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={() => setFilterDate(selectedDate)}>Filter</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th onClick={() => setSortBy((prev) => !prev)}>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(({ id, name, date, price }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{date}</td>
                <td>{price}</td>
              </tr>
            );
          })}
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

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  showActive: boolean;
}

const initialTodos: Todo[] = [
  { id: 1, text: 'Get apples', completed: true },
  { id: 2, text: 'Get oranges', completed: true },
  { id: 3, text: 'Get carrots', completed: false },
];

let nextId = 4;

// TODO: Checkbox: check/uncheck
// TODO: input -> Add a new task
// TODO: Filter based on a checkbox status
export default function Demo() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddClick = () => {
    const newTask = { id: nextId++, text: text, completed: false };
    setTodos((prev) => {
      return [...prev, newTask];
    });
    setText('');
  };

  return (
    <>
      <label>
        <input type="checkbox" checked={showActive} onChange={} />
        Show only active todos
      </label>
      <input value={text} onChange={} />
      <button onClick={handleAddClick}>Add</button>
      <TodoList todos={todos} showActive={showActive} />
    </>
  );
}

function TodoList() {}
```

### Answer

```js
import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  showActive: boolean;
}

const initialTodos: Todo[] = [
  { id: 1, text: 'Get apples', completed: true },
  { id: 2, text: 'Get oranges', completed: true },
  { id: 3, text: 'Get carrots', completed: false },
];

let nextId = 4;
export default function Demo() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState('');

  const handleAddClick = () => {
    const newTask = { id: nextId++, text: text, completed: false };
    setTodos((prev) => {
      return [...prev, newTask];
    });
    setText('');
  };

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
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
      <TodoList todos={todos} showActive={showActive} />
    </>
  );
}

function TodoList({ todos, showActive }: TodoListProps) {
  const visibleTodos = showActive
    ? todos.filter((todo) => !todo.completed)
    : todos;

  return (
    <>
      <ul>
        {visibleTodos.map(({ id, completed, text }) => (
          <li key={id}>{completed ? <s>{text}</s> : text}</li>
        ))}
      </ul>
    </>
  );
}

```

https://codesandbox.io/p/sandbox/mpf5wm?file=%2Fsrc%2FApp.js

## Q3: TypeScript
