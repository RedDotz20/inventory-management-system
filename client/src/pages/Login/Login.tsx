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
			<h1 className={styles.loginTitle}>Inventory Management System</h1>
			<form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
				<input
					id="username"
					type="text"
					placeholder="Username"
					{...register("Username", { required: true, maxLength: 80 })}
				/>

				<input
					id="password"
					type="password"
					placeholder="Password"
					{...register("Password", { required: true, maxLength: 100 })}
				/>
				<button className={styles.loginButton} type="submit">
					LOGIN
				</button>
			</form>
		</div>
	);
}
