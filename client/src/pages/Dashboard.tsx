import SidebarLayout from "../components/layout/SidebarLayout";
import SidebarRoutes from "../routes/SidebarRoutes";

function Dashboard() {
	return (
		<div className="bg-[#333] flex text-white h-screen">
			<SidebarLayout />
			<SidebarRoutes />
		</div>
	);
}

export default Dashboard;
