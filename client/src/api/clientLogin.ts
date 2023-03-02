import axios from "axios";
import loginTypes from "../interfaces/loginInterface";
import { SERVER_URL } from "../config/config";

async function clientLogin(values: loginTypes) {
	try {
		return await axios
			.post(`${SERVER_URL}/login`, {
				username: values.username,
				password: values.password,
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
