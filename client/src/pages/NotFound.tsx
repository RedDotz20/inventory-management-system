import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function NotFound() {
	const navigate = useNavigate();
	const redirectToLogin = () => navigate("/login", { replace: true });
	return (
		<div className="bg-[#333] h-screen flex flex-col items-center justify-center">
			<h1 className="text-white text-4xl font-bold mb-4">404 Not Found</h1>

			<Button onClick={redirectToLogin} colorScheme="orange" border="1px">
				Return To Login
			</Button>
		</div>
	);
}

export default NotFound;
