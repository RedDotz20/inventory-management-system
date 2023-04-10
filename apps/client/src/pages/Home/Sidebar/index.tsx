import { Outlet } from 'react-router-dom';
import { Button, Icon } from '@chakra-ui/react';
import { FaWrench } from 'react-icons/fa';
import { HiTemplate } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/ai';
import { MdInventory } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillBarChartFill } from 'react-icons/bs';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import NavRoutes from './NavRoutes';

export default function Sidebar() {
  const userLogout = async () => {
    const { default: userService } = await import('../../../api/userService');
    userService.logout();
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
      <Button className="mt-auto" colorScheme="orange" onClick={userLogout}>
        SIGN OUT
      </Button>
      <Outlet />
    </nav>
  );
}

const SidebarLogo = () => {
  return (
    <div className="flex items-center justify-evenly mt-2 mb-5">
      <div className="bg-[#F77E21] p-3 rounded-full mr-1">
        <MdInventory
          style={{ width: '28px', height: '28px', color: '#ffffff' }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-white text-2xl text-center select-none tracking-wide font-black">
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
