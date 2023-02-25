import axios from "axios";
import loginTypes from "../interfaces/loginInterface";

const PORT = 4000;
const URL = `http://localhost:${PORT}`;

async function clientLogin(values: loginTypes) {
	try {
		return await axios
			.post(`${URL}/login`, {
				username: values.username,
				password: values.password
			})
			.then((response) => {
				localStorage.setItem("token", response.data.token);
				console.log("isAuthenticated", !!localStorage.getItem("token"));
				return response.data;
			})
			.catch((error) => console.error(error));
	} catch (error) {
		console.log(error);
	}
}

export default clientLogin;
