import React, { Suspense, lazy } from 'react';
//import LazyProfile from './LazyProfile';
const LazyProfile = lazy(() => import('./LazyProfile'));

function LazyApp() {
  return (
    <div>
      <h1>My Application</h1>

      <Suspense fallback={<div>Loading profile...</div>}>
        <LazyProfile />
      </Suspense>
    </div>
  );
}

export default LazyApp;
