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

const products = [
  { id: 1, name: 'iPhone 15', date: '2024-01-15', price: 999 },
  { id: 2, name: 'Samsung TV', date: '2024-02-20', price: 700 },
  { id: 3, name: 'Coffee Mug', date: '2024-03-05', price: 12 },
  { id: 4, name: 'Desk Lamp', date: '2024-03-18', price: 35 },
  { id: 5, name: 'MacBook Air', date: '2024-04-10', price: 1199 },
  { id: 6, name: 'Office Chair', date: '2024-05-22', price: 220 },
  { id: 7, name: 'Dining Table', date: '2024-06-30', price: 450 },
  { id: 8, name: 'Headphones', date: '2024-07-14', price: 199 },
];

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
            <Route path="demo" element={<Demo products={products} />} />
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
