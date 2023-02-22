import styles from "./dashboard.module.scss";
import clientLogout from "../../api/clientLogout";

export default function Dashboard() {
	return (
		<div className={styles.dashboardContainer}>
			<h1>DASHBOARD</h1>
			<button onClick={clientLogout}>LOGOUT</button>
		</div>
	);
}
