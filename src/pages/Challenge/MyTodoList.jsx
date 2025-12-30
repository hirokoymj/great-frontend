import { useEffect, useState } from 'react';

const url = `https://jsonplaceholder.typicode.com/todos`;

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed : ${response.status}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTodo();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default function MyTodoList() {
  const { data: todos, loading, error } = useFetch(url);
  const [status, setStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [status]);

  const filtered =
    status === 'All'
      ? todos
      : todos.filter((d) =>
          status === 'Completed' ? d.completed : !d.completed
        );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedTodos = filtered.slice(startIndex, endIndex);

  const options = [
    { label: 'All', value: 'All' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Not Completed', value: 'Not_Completed' },
  ];

  return (
    <div>
      <h2>Todo List</h2>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>

      {loading && <p>...loading</p>}

      {error && <p>Failed to get todo list.</p>}

      {paginatedTodos.map(({ id, title, completed }) => (
        <li key={id}>
          {title}, <b>{completed ? 'Completed' : 'Not Completed'}</b>
        </li>
      ))}

      {/* 4️⃣ Pagination Controls */}
      <div>
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}>
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

// export default function MyTodoList() {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('All');

//   useEffect(() => {
//     // TODO: Fetch todos from API
//     const fetchTodo = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(`Failed : ${response.status}`);
//         const data = await response.json();
//         setTodos(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTodo();
//   }, []);

//   // TODO: Create filteredTodos based on status
//   const filtered =
//     status === 'All'
//       ? todos
//       : todos.filter((d) =>
//           status === 'Completed' ? d.completed : !d.completed
//         );

//   const options = [
//     { label: 'All', value: 'All' },
//     { label: 'Completed', value: 'Completed' },
//     { label: 'Not Completed', value: 'Not_Completed' },
//   ];

//   return (
//     <div>
//       <h2>Todo List</h2>

//       {/* TODO: Status Filter Dropdown */}
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         {options.map(({ label, value }) => (
//           <option value={value} key={value}>
//             {label}
//           </option>
//         ))}
//       </select>

//       {/* TODO: Loading State */}
//       {loading && <p>...loading</p>}

//       {/* TODO: Error State */}
//       {error && <p>Failed to get todo list.</p>}

//       {/* TODO: Render Todo List */}
//       {filtered.map(({ id, title, completed }) => (
//         <li key={id}>
//           {title}, <b>{completed ? 'Completed' : 'Not Completed'}</b>
//         </li>
//       ))}
//     </div>
//   );
// }

//❌<select value={status} onChange={(e) => e.target.value}>
