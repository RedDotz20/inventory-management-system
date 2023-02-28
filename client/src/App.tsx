import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));

export default function App() {
	const isAuthenticated = !!localStorage.getItem("token");
	return (
		<Suspense fallback={<div>Loading...</div>}>
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

export const Loader = () => {
	return <h1>Loading...</h1>;
};
