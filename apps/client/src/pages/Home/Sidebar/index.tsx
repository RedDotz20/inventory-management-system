import { Button, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaWrench } from 'react-icons/fa';
import { HiDocumentText, HiTemplate } from 'react-icons/hi';
import { MdInventory, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { Outlet, useNavigate } from 'react-router-dom';
import { infoAlert } from '../../../components/Alerts/AlertVariants';
import NavRoutes from './NavRoutes';

export default function Sidebar() {
  const [isLoading, setIsLoading] = useState(false);
  console.log('on mount ', isLoading);
  const navigate = useNavigate();
  const userLogout = async () => {
    setIsLoading(true);
    try {
      const { logoutService } = await import('../../../api/userService'),
        delay = new Promise((resolve) => setTimeout(resolve, 1200)),
        processLogout = await logoutService(),
        [response] = await Promise.all([processLogout, delay]);

      if (response?.status === 200) {
        infoAlert('Logout Successfull');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        console.log('An Error has occurred');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className="flex flex-col bg-neutral-800 min-w-[260px] m-4 rounded-xl p-4">
      <SidebarLogo />
      <div className="bg-white h-[2px] mb-5"></div>

      <NavRoutes to="/home/dashboard">
        <Icon as={AiFillHome} mr={2.5} />
        Dashboard
      </NavRoutes>
      <NavRoutes to="/home/items">
        <Icon as={HiTemplate} mr={2.5} />
        Items List
      </NavRoutes>
      <NavRoutes to="/home/products">
        <Icon as={FaWrench} mr={2.5} />
        Products List
      </NavRoutes>
      <NavRoutes to="/home/stocks">
        <Icon as={MdOutlineProductionQuantityLimits} mr={2.5} />
        Stocks
      </NavRoutes>
      <NavRoutes to="/home/orders">
        <Icon as={HiDocumentText} mr={2.5} color="white" />
        Orders
      </NavRoutes>
      <NavRoutes to="/home/sales">
        <Icon as={BsFillBarChartFill} mr={2.5} />
        Sales
      </NavRoutes>
      <Button
        isLoading={isLoading}
        className="mt-auto"
        colorScheme="orange"
        onClick={() => {
          userLogout();
        }}
      >
        SIGN OUT
      </Button>
      <Outlet />
    </nav>
  );
}

const SidebarLogo = () => {
  return (
    <div className="flex items-center mt-2 mb-5 justify-evenly">
      <div className="bg-[#F77E21] p-3 rounded-full mr-1">
        <MdInventory
          style={{ width: '28px', height: '28px', color: '#ffffff' }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-wide text-center text-white select-none">
          Brightsons
        </span>
        <div className="flex items-center ">
          <span className="text-white text-[0.5rem]  select-none tracking-wide font-bold">
            GENERAL MERCHANDISE
          </span>
        </div>
      </div>
    </div>
  );
};
