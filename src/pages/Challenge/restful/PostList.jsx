// App.jsx
import { useEffect, useState } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState('all');

  useEffect(() => {
    // TODO: fetch posts from the API
    const fetchData = async () => {
      setError(null);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        if (!response.ok) throw new Error(`Failed: ${response.status}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  // TODO: filter posts based on selectedUser
  const filtered =
    selectedUser === 'all'
      ? posts
      : posts.filter((d) => d.userId === Number(selectedUser));

  const userIdList = posts.reduce((acc, currentVal) => {
    const found = acc.find((id) => id === currentVal.userId);
    if (!found) acc.push(currentVal.userId);
    return acc;
  }, []);
  console.log(userIdList);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Post List</h2>
      {/* Loading / Error */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Dropdown */}
      <select value={selectedUser} onChange={handleUserChange}>
        <option value="all">All Users</option>
        {userIdList.map((userId) => (
          <option value={userId} key={userId}>
            {userId}
          </option>
        ))}
      </select>

      {/* Post List */}
      <ul>
        {filtered.map(({ userId, title, body }) => (
          <li>
            {userId}, {title}, {body}
          </li>
        ))}
      </ul>
    </div>
  );
}
