# Extracting State Logic into a Reducer

```js
setTasks([
  //add
  ...tasks,
  {
    id: nextId++,
    text: text,
    done: false,
  },
]);
setTasks(
  //Edit
  tasks.map((t) => {
    if (t.id === task.id) {
      return task;
    } else {
      return t;
    }
  })
);
setTasks(tasks.filter((t) => t.id !== taskId)); //delete
dispatch({
  type: 'added',
  id: nextId++,
  text: text, /// Param
});
dispatch({
  type: 'changed',
  task: task, //Param
});
dispatch({
  type: 'deleted',
  id: taskId, //Param
});
```

**Before**

```js
function handleAddTask(text) {
  setTasks([
    ...tasks,
    {
      id: nextId++,
      text: text,
      done: false,
    },
  ]);
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

function handleDeleteTask(taskId) {
  setTasks(tasks.filter((t) => t.id !== taskId));
}
```

**After**

```js
function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId,
  });
}
```

**Action**

- The object you pass to dispatch is called an “action”:
- It is a regular JavaScript object.
- You decide what to put in it, but generally it should contain the minimal information.
- By convention, it is common to give it a string type that describes what happened.
- Use switch statements instead of if/else inside reducers.

```js
dispatch(
  // "action" object:
  {
    type: 'deleted',
    id: taskId,
  }
);
```

```js
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
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

## Step 3: Use the reducer from your component

```js
import { useReducer } from 'react';
//const [tasks, setTasks] = useState(initialTasks);
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
```

```js
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
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

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
```

## Recap

- To convert from useState to useReducer:
- Dispatch actions from event handlers.
- Write a reducer function that returns the next state for a given state and action.
- Replace useState with useReducer.

## Challenges

- Challenge 1 of 4: Dispatch actions from event handlers
- Challenge 2 of 4: Clear the input on sending a message
- Challenge 3 of 4: Restore input values when switching between tabs
- Challenge 4 of 4: Implement useReducer from scratch
