import Sidebar from '../../components/Sidebar';
import SidebarRoutes from './SidebarRoutes';

function Home() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <SidebarRoutes />
    </div>
  );
}

export default Home;