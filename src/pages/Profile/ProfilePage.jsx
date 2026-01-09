import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ProfileFetch from './ProfileFetch';

export default function ProfilePage() {
  return (
    <ErrorBoundary fallback={<p>Unable to load profile</p>}>
      <ProfileFetch />
    </ErrorBoundary>
  );
}
