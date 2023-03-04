import SearchBox from "../components/searchBox/SearchBox";

export default function Products() {
	return (
		<div className="w-full flex p-8">
			<div className="flex flex-col w-full">
				<h1 className="text-3xl mb-8">Products Page</h1>
				<div className="">
					<SearchBox />
				</div>
			</div>
		</div>
	);
}
