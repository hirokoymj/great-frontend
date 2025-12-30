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

  // TODO: Filter users by company❌
  //   const onSelectChange = (e) => {
  //     setCompany(e.target.value);
  //     setUsers((prev) => prev.filter(({ company }) => company.name === company));
  //   };
  //<select value={company} onChange={onSelectChange}>

  //   const companyList = users.map(({ id, company }) => {
  //     return {
  //       id,
  //       company: company.name,
  //     };
  //   });

  const companies = ['All', ...users.map(({ company }) => company.name)];
  const filteredUsers =
    company === 'All' ? users : users.filter((u) => u.company.name === company);

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

      {/* TODO: Loading State */}
      {loading && <p>...Loading</p>}

      {/* TODO: Error State */}
      {error && <p>Failed to get the user data. </p>}
      {/* TODO: Render User List */}
      {filteredUsers.map(({ id, name, email }) => (
        <li key={id}>
          {name}, {email}
        </li>
      ))}
    </div>
  );
}
