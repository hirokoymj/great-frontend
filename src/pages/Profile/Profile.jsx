import React from 'react';

function Profile({ user }) {
  // 🔥 Throw error during render
  if (!user) {
    throw new Error(
      'User data is missing. Check the DB connection!! from Profile'
    );
  }

  if (!user.name) {
    throw new Error('User name is required');
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
