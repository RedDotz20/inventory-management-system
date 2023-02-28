import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

export default function App() {
	const isAuthenticated = !!localStorage.getItem("token");
	return (
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
	);
}

export const Loader = () => {
	return <h1>Loading...</h1>;
};
