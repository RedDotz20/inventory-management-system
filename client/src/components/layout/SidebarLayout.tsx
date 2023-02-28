import { NavLink, Outlet } from "react-router-dom";
import clientLogout from "../../api/clientLogout";

export default function SidebarLayout() {
	return (
		<>
			<nav className="flex flex-col bg-slate-400">
				<ul>
					<li>
						<NavLink to="/dashboard/home">Dashboard</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/products">Products</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/sales">Sales</NavLink>
					</li>
				</ul>

				<button onClick={clientLogout}>LOGOUT</button>
			</nav>
			<Outlet />
		</>
	);
}
