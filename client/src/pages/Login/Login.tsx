import { useForm } from "react-hook-form";
import styles from "./login.module.scss";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function onSubmit(data: any) {
		data.Username === "admin" && data.Password === "admin"
			? alert("login success")
			: alert("login failed");
	}

	return (
		<div className={styles.loginContainer}>
			<form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.logo}>LG</div>
				<label>Username</label>
				<input
					id="username"
					type="text"
					{...register("Username", { required: true, maxLength: 80 })}
				/>

				<label>Password</label>
				<input
					id="password"
					type="password"
					{...register("Password", { required: true, maxLength: 100 })}
				/>

				<button className={styles.loginButton} type="submit">
					LOGIN
				</button>
			</form>
		</div>
	);
}
