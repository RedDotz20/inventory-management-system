import axios from "axios";
import { SERVER_URL } from "../config/config";

export default function clientLogout() {
	axios
		.post(`${SERVER_URL}/logout`, null, {
			headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
		})
		.then((res) => {
			localStorage.removeItem("token");
			window.location.href = "/login";
		})
		.catch((err) => console.error(err));
}
