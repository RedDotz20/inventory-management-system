import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function NotFound() {
  const navigate = useNavigate(),
    redirectToLogin = () => navigate('/login', { replace: true });

  useEffect(() => {
    setTimeout(() => redirectToLogin(), 2000);
  });

  return (
    <div className="bg-[#333] h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold text-white">404 Not Found</h1>
    </div>
  );
}

export default NotFound;
