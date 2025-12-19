import { useState, useEffect } from 'react';

const url = `https://jsonplaceholder.typicode.com/users`;
//const url1 = `https://jsonplaceholder.typicode.com/users/${id}`;

interface User {
  id: string;
  name: string;
  email: string;
}

export const UsersView = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const onDeleteUser = (id: string) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      })
      .then(() => {
        setData((prev) => prev.filter((user) => user.id !== id));
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const newUser: User = await response.json();
      setData((prev) => [...prev, newUser]);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Unknown error occurred');
      }
    }
    setLoading(false);
  };
  return (
    <div>
      UserViewDemo
      <div> {loading && <p>...loading</p>}</div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {data.map(({ id, name, email }) => (
          <li key={name}>
            {id}, {name}, {email}
            <button onClick={() => onDeleteUser(id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
