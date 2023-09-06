import jwt_decode from 'jwt-decode';

function isAuthenticated() {
  const token = localStorage.getItem('token');
  if (!token) return false;

  const { exp } = jwt_decode(token) as { exp: number };
  return exp ? exp > Date.now() / 1000 : false;
}

export default isAuthenticated;
