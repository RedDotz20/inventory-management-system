import { useQuery } from '@tanstack/react-query';
import { AddIcon } from '@chakra-ui/icons';
import {
  Stack,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import SearchBox from '../../components/SearchBox';
import products from '../../api/products';

interface ProductInterface {
  productId: number;
  productName: string;
  brand: string;
  categoryName: string;
  unitName: string;
  itemCodes: string;
  price: GLfloat;
}

export default function Products() {
  const { isLoading, isError, data } = useQuery(['productsTable'], {
    queryFn: products.getProducts,
  });

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>An Error has occured</span>;

  return (
    <div className="flex flex-col w-full p-8">
      <h1 className="mb-8 text-3xl">Products Page</h1>
      <div className="flex flex-col">
        <div className="flex">
          <SearchBox
            borderColor="black"
            _hover={{ borderColor: 'black' }}
            focusBorderColor="tranparent"
          />

          <Stack direction="row">
            <Button
              leftIcon={<AddIcon />}
              className="mx-4 mt-auto mb-4"
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
                <Th>BRAND</Th>
                <Th>CATEGORY</Th>
                <Th>UNIT</Th>
                <Th>ITEM CODES</Th>
                <Th>PRICE</Th>
                <Th>ACTIONS</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((product: ProductInterface) => {
                const {
                  productId,
                  productName,
                  brand,
                  categoryName,
                  unitName,
                  itemCodes,
                  price,
                } = product;
                return (
                  <Tr key={productId}>
                    <Td>{productId}</Td>
                    <Td>{productName}</Td>
                    <Td>{brand}</Td>
                    <Td>{categoryName}</Td>
                    <Td>{unitName}</Td>
                    <Td>{itemCodes === null ? 'None' : itemCodes}</Td>
                    <Td>{price}</Td>
                    <Td>{''}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
