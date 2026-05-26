import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ErrorBoundary from './pages/Profile/ErrorBoundary';
import Home from './pages/Home/Home';
import Demo from './pages/Quiz/Demo';
import SignupPage from './pages/Auth/SignupPage';
import DashboardPage from './pages/Auth/DashboardPage';
import ProtectedRoute from './pages/Auth/ProtectedRoute';
import Layout from './components/Layout';

const ProfilePage = lazy(() => import('./pages/Profile/ProfilePage'));

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return 'Loading...';

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="demo" element={<Demo />} />
          <Route
            path="demo-11"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProfilePage />
              </Suspense>
            }
          />
        </Routes>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
