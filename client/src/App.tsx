import Login from "./pages/Login/Login";

export default function App() {
	return (
		<div className="App">
			<Login />
		</div>
	);
}

export const Loader = () => {
	return <h1>Loading...</h1>;
};
