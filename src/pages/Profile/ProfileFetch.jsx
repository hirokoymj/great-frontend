import React, { useEffect, useState } from 'react';

function ProfileFetch() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/profile') // pretend endpoint
      .then((res) => {
        const contentType = res.headers.get('content-type');

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON (API endpoint missing)');
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err); // ✅ store error in state
        setLoading(false);
      });
  }, []);

  // 🔥 THROW DURING RENDER
  if (error) {
    throw error;
  }

  if (loading) {
    return <p>Loading profile...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ProfileFetch;
