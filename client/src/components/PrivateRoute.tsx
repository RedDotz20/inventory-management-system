import React from "react";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { Navigate } from "react-router-dom";

interface PrivatteRouteProps {
	children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivatteRouteProps) => {
	const token = localStorage.getItem("token");
	if (token) {
		const decoded: JwtPayload = jwt_decode(token);
		const currentTime = Date.now() / 1000;

		if (decoded.exp && decoded.exp < currentTime) {
			localStorage.removeItem("token");
			return <Navigate to="/login" replace={true} />;
		}
		return <>{children}</>;
	}
	return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
