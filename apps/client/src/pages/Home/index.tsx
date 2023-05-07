import Sidebar from './Sidebar';
import SidebarRoutes from './SidebarRoutes';

function Home() {
  return (
    <div className="relative flex h-screen">
      <div className="bg-[#F77E21] w-full h-28 absolute -z-50"></div>
      <Sidebar />
      <SidebarRoutes />
    </div>
  );
}

export default Home;
