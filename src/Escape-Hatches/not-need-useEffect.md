# You Might Not Need an Effect

**Summary (useMemo, todoList, checkbox)**

```js
//==Q1: redundant state, visibleTodo, calculated during rendering instead.
const [todos, setTodos] = useState(initialTodos);
const [showActive, setShowActive] = useState(false);
const visibleTodos = showActive
  ? todos.filter((todo) => !todo.completed)
  : todos;
//==Q2: useMemo
const result = useMemo(() => {}, []);
const visibleTodos = useMemo(() => {
  const result = showActive ? todos.filter((todo) => !todo.completed) : todos;
  return result;
}, [todos, showActive]);
//==Q2: without useMemo => out ot text state to another comp.
const [todos, setTodos] = useState(initialTodos);
const [showActive, setShowActive] = useState(false);
const [text, setText] = useState('');
//AFTER
const [todos, setTodos] = useState(initialTodos);
const [showActive, setShowActive] = useState(false);
<NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
//==checkbox
<input
  type="checkbox"
  checked={showActive}
  onChange={(e) => setShowActive(e.target.checked)}
/>;
```

**References:**

- https://react.dev/learn/you-might-not-need-an-effect
- [useMemo](https://react.dev/reference/react/useMemo)
- `const cachedValue = useMemo(calculateValue, dependencies)`
- [React.memo](https://react.dev/reference/react/memo)

## Challenge 1 (todo, checkbox)

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

## Challenge 2 (todo, checkbox, useMemo)

- [Challenge 2 of 4: Cache a calculation without Effects](https://react.dev/learn/you-might-not-need-an-effect#cache-a-calculation-without-effects)
- [Fork](https://codesandbox.io/p/sandbox/pwxhfy)
- [Fork solution](https://codesandbox.io/p/sandbox/8v7ps3)
- (Hint): useMemo call to cache the visible todos

**Solution #1 - useMemo**

```js
const visibleTodos = useMemo(
  () => getVisibleTodos(todos, showActive),
  [todos, showActive]
);
```

**Solution #2 - without useMemo**
which does not need useMemo. Since the text state variable can’t possibly affect the list of todos, you can extract the NewTodo form into a separate component, and move the text state variable inside of it:

```js
import { useState, useMemo } from 'react';
import { initialTodos, createTodo, getVisibleTodos } from './todos.js';

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const visibleTodos = getVisibleTodos(todos, showActive);

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

<hr />

## Challenge 3

- Challenge 3 of 4: Reset state without Effects
- 10/11 complecated solution. skipped.
<hr />

## React.memo

React.memo is a higher-order component (HOC) used to memoize functional components. It prevents a component from re-rendering if its props have not changed.
