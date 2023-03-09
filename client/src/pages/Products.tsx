import { AddIcon } from "@chakra-ui/icons";
import {
	Stack,
	Button,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import SearchBox from "../components/searchBox/SearchBox";

export default function Products() {
	return (
		<div className="w-full flex p-8 flex-col">
			<h1 className="text-3xl mb-8">Products Page</h1>
			<div className="flex flex-col">
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

				<TableContainer>
					<Table variant="simple" size="sm">
						<Thead>
							<Tr>
								<Th>ID</Th>
								<Th>NAME</Th>
								<Th>CATEGORY</Th>
								<Th>UNIT</Th>
								<Th>BRAND</Th>
								<Th>PRICE</Th>
								<Th>ACTIONS</Th>
							</Tr>
						</Thead>
						<Tbody></Tbody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
