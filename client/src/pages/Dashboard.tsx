import clientLogout from "../api/clientLogout";

export default function Dashboard() {
	return (
		<div className="bg-[#333] flex justify-center items-center text-white h-screen">
			<h1>DASHBOARD</h1>
			<button onClick={clientLogout}>LOGOUT</button>
		</div>
	);
}
