# You Might Not Need an Effect

## Summary (FINAL)

- useMemo, todoList, checkbox(show all or active items only)

```js
export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const activeTodos = todos.filter(todo => !todo.completed); //POINT
  const visibleTodos = showActive ? activeTodos : todos; //POINT

<input
  type="checkbox"
  checked={showActive}
  onChange={e => setShowActive(e.target.checked)}
/>
<ul>
{visibleTodos.map(todo => (
  <li key={todo.id}>
    {todo.completed ? <s>{todo.text}</s> : todo.text}
  </li>
))}
</ul>
//===BEFORE
export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState('');
  const [visibleTodos, setVisibleTodos] = useState([]);

  useEffect(() => {
    setVisibleTodos(getVisibleTodos(todos, showActive));
  }, [todos, showActive]);
//===AFTER
//===Remove the state variable and the Effect, and instead add a useMemo call to cache the result of calling getVisibleTodos():
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState('');
  const visibleTodos = useMemo(
    () => getVisibleTodos(todos, showActive),
    [todos, showActive]
  );
```

**References:**

- https://react.dev/learn/you-might-not-need-an-effect

## Ex.1 - title (short text)

## Ex.2 - title (short text)

## Ex.3 - title (short text)

## Challenge 1

- [Challenge 1 of 4: Transform data without Effects](https://react.dev/learn/you-might-not-need-an-effect#transform-data-without-effects)
- [Fork](https://codesandbox.io/p/sandbox/9rzjj8)
- [Fork solution](https://codesandbox.io/p/sandbox/yc5558)
- 10/11 (x)

```js
// My WRONG CODE
import { useState, useEffect } from 'react';
import { initialTodos, createTodo } from './todos.js';

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const handleCheckboxChange = (e) => {
    setShowActive(e.target.checked);
    if (e.target.checked) {
      setTodos(todos.filter((todo) => !todo.completed));
    } else { ///!!! MY WRONG !! // this doesn't trigger a render.
      setTodos(todos);
    }
  };
```

<hr />

## Challenge 2

- [Challenge 2 of 4: Cache a calculation without Effects](https://react.dev/learn/you-might-not-need-an-effect#cache-a-calculation-without-effects)
- [Fork](https://codesandbox.io/p/sandbox/pwxhfy)
- [Fork solution](https://codesandbox.io/p/sandbox/8v7ps3)
- (Hint): useMemo call to cache the visible todos

```js
const visibleTodos = useMemo(
  () => getVisibleTodos(todos, showActive),
  [todos, showActive]
);
```

<hr />

## Challenge 3

- [Challenge 3 of 4: Reset state without Effects](https://react.dev/learn/you-might-not-need-an-effect#reset-state-without-effects)
- (Hint) It would be nice if there was a way to tell React that when savedContact.id is different,
- Even if I saw the hint, I couldn't solution how to compare savedContact.id.

```js
///My Answer (first time)
export default function EditContact({ savedContact, onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //if(savedContact.email !== email) setEmail(savedContact.email)

  const handleNameChange = (e) =>{
    if(savedContact.name !== name) {
      setName(savedContact.name);
      return;
    }
    setName(e.target.value)
  }
```

- [Fork soluction](https://codesandbox.io/p/sandbox/kk4zxg?file=%2Fsrc%2FApp.js)
- 10/11 complecated solution. skipped.
<hr />
