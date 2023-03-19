import Sidebar from "../components/sidebar/Sidebar";
import SidebarRoutes from "../routes/SidebarRoutes";

function Home() {
	return (
		<div className="h-screen flex">
			<Sidebar />
			<SidebarRoutes />
		</div>
	);
}

export default Home;
