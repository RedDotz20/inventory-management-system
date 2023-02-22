import axios from "axios";
const PORT = 4000;
const URL = `http://localhost:${PORT}`;

export default function clientLogout() {
	axios
		.post(`${URL}/logout`, null, {
			headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
		})
		.then((res) => {
			localStorage.removeItem("token");
			window.location.href = "/login";
		})
		.catch((err) => console.error(err));
}
