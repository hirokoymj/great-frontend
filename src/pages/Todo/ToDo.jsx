import { useState } from 'react';

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, { id: Date.now(), text }]);
    setText('');
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          name="text"
          placeholder="Add your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

///Add task syntax error
