import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

export default function App() {
	const isAuthenticated = !!localStorage.getItem("token");
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/dashboard"
					element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
				/>
				<Route path="/" element={<Navigate to="/login" replace />} />
			</Routes>
		</div>
	);
}

export const Loader = () => {
	return <h1>Loading...</h1>;
};
