import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

export default function App() {
	const isAuthenticated = !!localStorage.getItem("token");
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
				}
			/>
			<Route path="/login" element={<Login />} />
			<Route
				path="/dashboard"
				element={
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
}

export const Loader = () => {
	return <h1>Loading...</h1>;
};
