# Extracting State Logic into a Reducer

## Summary (FINAL)

- useReducer, [state, dispatch], action == object {}, reducer function with switch
- Convert `useState` with `useReducer`

```js
// ===
MyComponent;
const [state, dispatch] = useReducer(taskReducer, { age: 42 });
dispatch({ type: 'incremented_age' });
function taskReducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {...}
    case 'changed_name': {...}
  }
}
// ===
//dispatch/action
dispatch({
  type: 'changed_selection',
  contactId: 1,
});
dispatch({
  type: 'edited_message',
  message: 'Hello!',
});
export const initialState = {
  selectedId: 0,
  message: 'Hello',
};
export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}



```

**References:**

- [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [useReducer](https://react.dev/reference/react/useReducer)

## Ex.1 - Todo list: useState vs useReducer

- https://react.dev/learn/extracting-state-logic-into-a-reducer

**useState**

```js
function handleAddTask(text) {
  return setTasks([...tasks, { id: nextId++, text: text, done: false }]);
}
function handleDeleteTask(taskId) {
  setTasks(tasks.filter((t) => t.id !== taskId));
}
function handleChangeTask(task) {
  setTasks(
    tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    })
  );
}
```

**useReducer with Action**

```js
function handleAddTask(text) {
  dispatch({ type: 'added', id: nextId++, text: text });
}
function handleChangeTask(task) {
  dispatch({ type: 'changed', task: task });
}
function handleDeleteTask(taskId) {
  dispatch({ type: 'deleted', id: taskId });
}
```

**Action**

- The object you pass to dispatch is called an “action”:
  `dispatch({type: 'deleted', id: taskId });`
- It is a regular JavaScript object.
- Generally it should contain the minimal information.

**Reducer**

```js
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
```

**useReducer**

```js
import { useReducer } from 'react';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({ type: 'added', id: nextId++, text: text });
  }
  function handleChangeTask(task) {
    dispatch({ type: 'changed', task: task });
  }
  function handleDeleteTask(taskId) {
    dispatch({ type: 'deleted', id: taskId });
  }
  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
```

## Recap

- To convert from useState to useReducer:
- Dispatch actions from event handlers.
- Write a reducer function that returns the next state for a given state and action.
- Replace useState with useReducer.

## Challenge

- [Challenge 1 of 4: Dispatch actions from event handlers](https://react.dev/learn/extracting-state-logic-into-a-reducer#dispatch-actions-from-event-handlers)
- [Fork](https://codesandbox.io/p/sandbox/pzk8q6)
- 9/25, 9/29
- (My wrong point) button, dispatch({type: xxx, action: xxx}) not working.

<hr />
