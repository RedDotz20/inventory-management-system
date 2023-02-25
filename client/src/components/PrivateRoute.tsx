import { ReactNode, Fragment } from "react";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { Navigate } from "react-router-dom";

interface PrivatteRouteProps {
	children: ReactNode;
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
		return <Fragment>{children}</Fragment>;
	}
	return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
