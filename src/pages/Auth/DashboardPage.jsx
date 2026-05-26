import { useAuth0 } from '@auth0/auth0-react';

export default function DashboardPage() {
  const { user, logout: auth0Logout } = useAuth0();

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  return (
    <div style={{ maxWidth: 480, margin: '60px auto', fontFamily: 'sans-serif' }}>
      <h1>Dashboard</h1>
      <p>Welcome back, <strong>{user.email}</strong></p>

      <div style={{ background: '#f5f5f5', borderRadius: 8, padding: 20, margin: '24px 0' }}>
        <h2 style={{ marginTop: 0 }}>User Profile</h2>
        {user.picture && (
          <img
            src={user.picture}
            alt="avatar"
            style={{ width: 64, height: 64, borderRadius: '50%' }}
          />
        )}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><strong>Name:</strong> {user.name}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>Email verified:</strong> {user.email_verified ? 'Yes' : 'No'}</li>
          <li><strong>Sub:</strong> {user.sub}</li>
        </ul>
      </div>

      <button onClick={logout} style={{ padding: '8px 20px' }}>
        Logout
      </button>
    </div>
  );
}
