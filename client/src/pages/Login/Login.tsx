import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import clientLogin from "../../api/clientLogin";
import { useState } from "react";

export default function Login() {
	const [error, setError] = useState<null | string>(null);
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const onSubmit = async (data: any) => {
		try {
			const response = await clientLogin(data);
			console.log(response);
			if (response.token) {
				navigate(response.redirectUrl);
			} else {
				setError("Invalid username or password");
			}
		} catch (error) {
			setError("An error occured. Please try again later.");
		}
	};

	return (
		<div className={styles.loginContainer}>
			<form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.logo}>LG</div>
				<label>Username</label>
				<input
					id="username"
					type="text"
					{...register("username", { required: true, maxLength: 80 })}
				/>

				<label>Password</label>
				<input
					id="password"
					type="password"
					{...register("password", { required: true, maxLength: 100 })}
				/>

				<button className={styles.loginButton} type="submit">
					LOGIN
				</button>
			</form>
		</div>
	);
}
