import { Navigate } from 'react-router-dom';
import jwt_decode, { JwtPayload } from 'jwt-decode';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded: JwtPayload = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp && decoded.exp < currentTime) {
      localStorage.removeItem('token');
      return <Navigate to="/login" replace={true} />;
    }
    return <>{children}</>;
  }
  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
