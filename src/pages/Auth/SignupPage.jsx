import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const DOMAIN = 'dev-b2kt887f2m0nr3d7.us.auth0.com';
const CLIENT_ID = 'Ys64VKfrXXBSb0OkrcR9LdmeARqTu32C';

export default function SignupPage() {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const res = await fetch(`https://${DOMAIN}/dbconnections/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        email,
        password,
        connection: 'Username-Password-Authentication',
      }),
    });

    const data = await res.json();
    setSubmitting(false);

    if (!res.ok) {
      setError(data.description || data.message || 'Signup failed');
      return;
    }

    // Account created — redirect to Auth0 login with email pre-filled
    loginWithRedirect({ authorizationParams: { login_hint: email } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={submitting}>
        {submitting ? 'Creating account...' : 'Create Account'}
      </button>
      <button type="button" onClick={() => navigate('/')}>
        Back
      </button>
    </form>
  );
}
