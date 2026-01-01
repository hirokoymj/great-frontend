import { useEffect, useState } from 'react';

export default function MyUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [company, setCompany] = useState('All');

  useEffect(() => {
    // TODO: Fetch users from API
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) throw new Error(`Failed - ${response.status}`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const companies = ['All', ...users.map(({ company }) => company.name)];

  const filteredUsers =
    company === 'All' ? users : users.filter((u) => u.company.name === company);

  const filtered = setUsers((prev) =>
    company === 'All' ? prev : prev.filter((u) => u.company.name === company)
  );

  return (
    <div>
      <h2>User List</h2>

      {/* TODO: Company Filter Dropdown ❌*/}
      <select value={company} onChange={(e) => setCompany(e.target.value)}>
        {companies.map((company) => (
          <option value={company} key={company}>
            {company}
          </option>
        ))}
      </select>

      {loading && <p>...Loading</p>}
      {error && <p>Failed to get the user data. </p>}
      {filteredUsers.map(({ id, name, email }) => (
        <li key={id}>
          {name}, {email}
        </li>
      ))}
    </div>
  );
}
