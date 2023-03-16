import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./utils/Loader";
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));

const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));

export default function App() {
	const isAuthenticated = !!localStorage.getItem("token");
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route
					path="/"
					element={
						<Navigate
							to={isAuthenticated ? "/home/dashboard" : "/login"}
							replace
						/>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route
					path="/home/*"
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
