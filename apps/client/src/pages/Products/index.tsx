import { useQuery } from '@tanstack/react-query';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import ProductInterface from './type';
import {
  Flex,
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
import FormatCurrency from '../../utils/FormatCurrency';
import SearchBox from '../../components/SearchBox';
import products from '../../api/products';

export default function Products() {
  const { isLoading, isError, data } = useQuery(['productsTable'], {
    queryFn: products.getProducts,
  });

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>An Error has occured</span>;

  return (
    <div className="w-full flex p-8 flex-col">
      <h1 className="text-3xl mb-8">Products Page</h1>
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
              className="mt-auto mb-4 mx-4"
              colorScheme="orange"
            >
              Add
            </Button>
          </Stack>
        </div>

        <TableContainer>
          <div className="overflow-x-auto">
            <Table className="table-fixed" variant="simple" size="xs">
              <Thead pb={4}>
                <Tr>
                  <Th fontSize="xs">ID</Th>
                  <Th fontSize="xs" pl="3">
                    NAME
                  </Th>
                  <Th fontSize="xs">BRAND</Th>
                  <Th fontSize="xs">CATEGORY</Th>
                  <Th fontSize="xs">UNIT</Th>
                  <Th fontSize="xs">ITEM CODES</Th>
                  <Th fontSize="xs">PRICE</Th>
                  <Th fontSize="xs" textAlign="center">
                    ACTIONS
                  </Th>
                </Tr>
              </Thead>
              <Tbody
                maxH={data.length > 10 ? '320px' : 'unset'}
                className="overflow-y-scroll"
              >
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
                      <Td pl="3">{productName}</Td>
                      <Td>{brand}</Td>
                      <Td>{categoryName}</Td>
                      <Td>{unitName}</Td>
                      <Td>{itemCodes === null ? 'None' : itemCodes}</Td>
                      <Td>{FormatCurrency(parseFloat(price))}</Td>
                      <Td textAlign="center">
                        <Flex justify="center" align="center" gap={1}>
                          <Button
                            borderRadius="full"
                            colorScheme="orange"
                            p="0"
                          >
                            <EditIcon />
                          </Button>
                          <Button borderRadius="full" colorScheme="red" p="0">
                            <DeleteIcon />
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </div>
        </TableContainer>
      </div>
    </div>
  );
}
