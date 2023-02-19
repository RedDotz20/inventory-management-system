import axios from "axios";

interface authValues {
	username: string;
	password: string;
}

const PORT = 4000;
const URL = `http://localhost:${PORT}`;

export default async function clientLogin(values: authValues) {
	try {
		return await axios
			.post(`${URL}/login`, {
				username: values.username,
				password: values.password
			})
			.then((response) => {
				localStorage.setItem("token", response.data.token);
				return response.data;
			})
			.catch((error) => console.error(error));
	} catch (error) {
		console.log(error);
	}
}

// const { token, redirectUrl } = response.data;
// localStorage.setItem("token", token);
// localStorage.setItem("redirectUrl", redirectUrl);
// Navigate to the protected page (dashboard page)
// Navigate(redirectUrl);

// axios
// 	.post(`${URL}/login`, {
// 		username: values.username,
// 		password: values.password
// 	})
// 	.catch((error) => console.error(error));
