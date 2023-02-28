import Sidebar from "../components/Sidebar";
import SidebarRoutes from "../routes/SidebarRoutes";

function Dashboard() {
	return (
		<div className="bg-[#333] flex text-white h-screen">
			<Sidebar />
			<SidebarRoutes />
		</div>
	);
}

export default Dashboard;
