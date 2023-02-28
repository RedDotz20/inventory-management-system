import { Spinner } from "@chakra-ui/react";

function Loader() {
	return (
		<div className="absolute z-50 inset-0 opacity-50 bg-black h-screen w-screen flex flex-col justify-center items-center transition-opacity duration-500">
			<Spinner
				thickness="8px"
				speed="0.7s"
				emptyColor="gray.200"
				color="orange"
				size="xl"
			/>
			<h1 className="text-white text-2xl tracking-wider font-black mt-4">
				LOADING
			</h1>
		</div>
	);
}

export default Loader;
