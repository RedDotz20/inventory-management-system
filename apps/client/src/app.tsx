// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';

const PrivateRoute = lazy(() => import('./utils/PrivateRoute'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home'));

export function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Suspense fallback={'Loading ...'}>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={isAuthenticated ? '/home/dashboard' : '/login'}
              replace
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home/*"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
