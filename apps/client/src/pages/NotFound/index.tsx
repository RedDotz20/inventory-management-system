import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function NotFound() {
  const isAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate(),
    redirectToLogin = () => navigate('/login', { replace: true }),
    redirectToDashboard = () => navigate('/home/dashboard', { replace: true });

  useEffect(() => {
    !isAuthenticated
      ? setTimeout(() => redirectToLogin(), 2000)
      : redirectToDashboard();
  });

  return (
    <div className="bg-[#333] h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold mb-4">404 Not Found</h1>
    </div>
  );
}

export default NotFound;
