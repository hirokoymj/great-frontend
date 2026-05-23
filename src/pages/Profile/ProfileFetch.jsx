import { useEffect, useState } from 'react';

function ProfileFetch() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/profile', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to load profile (${response.status}). Please try again later.`,
          );
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // store error in state, then throw during render so ErrorBoundary can catch it
  if (error) {
    throw error;
  }

  if (loading) {
    return <p>Loading profile...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          {name}, {email}
        </li>
      ))}
    </div>
  );
}

export default ProfileFetch;
