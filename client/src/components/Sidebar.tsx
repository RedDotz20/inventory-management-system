import { NavLink, Outlet } from "react-router-dom";
import clientLogout from "../api/clientLogout";

export default function Sidebar() {
	return (
		<>
			<nav className="flex flex-col bg-slate-400">
				<NavLink className="px-3 py-1" to="/dashboard/home">
					Dashboard
				</NavLink>
				<NavLink className="px-3 py-1" to="/dashboard/products">
					Products
				</NavLink>
				<NavLink className="px-3 py-1" to="/dashboard/sales">
					Sales
				</NavLink>
				<button className="mt-auto" onClick={clientLogout}>
					LOGOUT
				</button>
			</nav>
			<Outlet />
		</>
	);
}
