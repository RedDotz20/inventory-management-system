// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Navigate, Route, Routes } from 'react-router-dom';
import Alerts from './components/Alerts';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PrivateRoute from './utils/PrivateRoute';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

export default function App() {
  //TODO: If Access Token is Valid/Exists Redirect to home/dashboard
  return (
    <div className="relative">
      <Alerts />
      <Routes>
        <Route path="/" element={<Navigate to={'/login'} replace />} />
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
