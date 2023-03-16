import { Outlet } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import NavRoutes from "./NavRoutes";
import storeLogo from "../../assets/mainLogo.png";

export default function Sidebar() {
	return (
		<>
			<nav className="flex flex-col bg-[#F77E21] min-w-[260px]">
				<SidebarLogo />
				<NavRoutes to="/home/dashboard">DASHBOARD</NavRoutes>
				<NavRoutes to="/home/products">PRODUCTS</NavRoutes>
				<NavRoutes to="/home/orders">ORDERS</NavRoutes>
				<NavRoutes to="/home/sales">SALES</NavRoutes>
				<Button
					className="mt-auto mb-4 mx-4"
					variant="lightyellow"
					onClick={async () => {
						const { default: clientLogout } = await import(
							"../../api/clientLogout"
						);
						clientLogout();
					}}
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
		<div className="bg-[#3C3C3C] grid items-center h-24 mb-2">
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
		</div>
	);
};
