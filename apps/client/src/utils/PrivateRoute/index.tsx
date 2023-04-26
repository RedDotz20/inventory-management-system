import jwt_decode, { JwtPayload } from 'jwt-decode';
import { ReactNode, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props: { children: ReactNode }) => {
  //TODO: manage authorization accross routes
  const [isAuthenticated, setIsAuthenticcated] = useState(false);
  const token = localStorage.getItem('accessToken');
  if (token) {
    const decoded: JwtPayload = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp && decoded.exp < currentTime) {
      localStorage.removeItem('accessToken');
      return <Navigate to="/login" replace={true} />;
    }
    return <>{props.children}</>;
  }
  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
