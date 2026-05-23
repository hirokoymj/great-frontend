import ProfileFetch from './ProfileFetch';
import Profile from './Profile';

export default function ProfilePage() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>ErrorBoundary + Async Demo</h1>
      <ProfileFetch />
    </div>
  );
}
