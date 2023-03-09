import { Stack, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import SearchBox from "../components/searchBox/SearchBox";

export default function Products() {
	return (
		<div className="w-full flex p-8">
			<div className="flex flex-col w-full">
				<h1 className="text-3xl mb-8">Products Page</h1>
				<div className="flex">
					<SearchBox
						borderColor="black"
						_hover={{ borderColor: "black" }}
						focusBorderColor="tranparent"
					/>
					<Stack direction="row">
						<Button
							leftIcon={<AddIcon />}
							className="mt-auto mb-4 mx-4"
							colorScheme="orange"
						>
							Add
						</Button>
					</Stack>
				</div>
			</div>
		</div>
	);
}
