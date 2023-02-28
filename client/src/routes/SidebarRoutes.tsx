import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../utils/Loader";
const Home = lazy(() => import("../pages/Home"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const Sales = lazy(() => import("../pages/Sales"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function SidebarRoutes() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="home" element={<Home />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="products" element={<Products />} />
				<Route path="sales" element={<Sales />} />
			</Routes>
		</Suspense>
	);
}
