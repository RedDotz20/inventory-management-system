import React from "react";
import { NavLink } from "react-router-dom";

interface NavRoutesProps {
	to: string;
	children: React.ReactNode;
}

function NavRoutes(props: NavRoutesProps) {
	return (
		<NavLink className="text-white text-lg px-3 py-1 mb-1" to={props.to}>
			{props.children}
		</NavLink>
	);
}

export default NavRoutes;
