import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import clientLogout from "../api/clientLogout";
import storeLogo from "../assets/mainLogo.png";

export default function Sidebar() {
	return (
		<>
			<nav className="flex flex-col bg-[#F77E21] min-w-[260px]">
				<div className="bg-[#3C3C3C] grid items-center h-24 mb-2">
					<SidebarLogo />
				</div>
				<NavLink
					className="text-white text-lg px-3 py-1 mb-1"
					to="/home/dashboard"
				>
					DASHBOARD
				</NavLink>
				<NavLink
					className="text-white text-lg px-3 py-1 mb-1"
					to="/home/products"
				>
					PRODUCTS
				</NavLink>
				<NavLink className="text-white text-lg px-3 py-1 mb-1" to="/home/sales">
					SALES
				</NavLink>
				<Button
					className="mt-auto mb-4 mx-4"
					variant="lightyellow"
					onClick={clientLogout}
				>
					LOGOUT
				</Button>
			</nav>
			<Outlet />
		</>
	);
}

const SidebarLogo = () => {
	return (
		<div className="flex items-center mx-auto">
			<img
				src={storeLogo}
				className="w-14 h-14 object-cover mr-2"
				alt="BGMlogo"
			/>
			<div className="flex flex-col">
				<span className="text-white text-2xl text-center select-none font-black">
					Brightsons
				</span>
				<div className="flex items-center justify-center">
					<div className="bg-white h-[1.5px] w-2 select-none"></div>
					<span className="text-white text-[0.65rem] text-center mx-1.5 select-none tracking-tighter font-bold">
						GENERAL MERCHANDISE
					</span>
					<div className="bg-white h-[1.5px] w-2 select-none"></div>
				</div>
			</div>
		</div>
	);
};
