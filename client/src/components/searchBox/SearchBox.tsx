import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBox() {
	return (
		<InputGroup colorScheme="dark">
			<InputLeftElement
				pointerEvents="none"
				children={<SearchIcon color="black" />}
			/>
			<Input
				type="text"
				placeholder="Search"
				borderColor="black"
				_hover={{ borderColor: "black" }}
				focusBorderColor="tranparent"
			/>
		</InputGroup>
	);
}

export default SearchBox;
