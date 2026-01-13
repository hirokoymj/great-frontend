import React from 'react';
import ErrorBoundary from './ErrorBoundary';
//import ProfileFetch from './ProfileFetch';
import Profile from './Profile';

export default function ProfilePage() {
  const user = null;
  //const user = { name: 'Hiroko', email: 'hiroko@hiroko.com' };
  return (
    <ErrorBoundary fallback={<h2>Something went wrong.</h2>}>
      <Profile user={user} />
    </ErrorBoundary>
  );
}
