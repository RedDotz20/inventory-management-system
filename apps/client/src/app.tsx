// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoute from './utils/PrivateRoute';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import './styles.css';

import Alerts from './components/Alerts';

export function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <div className="relative">
      <Alerts />
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
    </div>
  );
}

export default App;
