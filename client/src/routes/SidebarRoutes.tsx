import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Sales from "../pages/Sales";
import Home from "../pages/Home";

export default function SidebarRoutes() {
	return (
		<Routes>
			<Route path="home" element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="sales" element={<Sales />} />
		</Routes>
	);
}
