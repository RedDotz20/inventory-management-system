import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function Layout() {
  const userLogout = async () => {
    const { default: userService } = await import('../../api/userService');
    userService.logout();
  };

  return (
    <>
      <nav className="flex flex-col bg-[#F77E21] min-w-[260px] text-white font-semibold p-4">
        <Link to="/home/dashboard">DASHBOARD</Link>
        <Link to="/home/products">PRODUCTS</Link>
        <Link to="/home/orders">ORDERS</Link>
        <Link to="/home/sales">SALES</Link>
        <Button
          className="mx-4 mt-auto mb-4"
          variant="lightyellow"
          onClick={userLogout}
        >
          LOGOUT
        </Button>
      </nav>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}
