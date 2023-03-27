import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Box,
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
import ProductInterface from './type';
import FormatCurrency from '../../utils/FormatCurrency';
import SearchBox from '../../components/SearchBox';
import products from '../../api/products';

export default function Products() {
  const [sortOrder, setSortOrder] = useState(false);
  const [columnToSort, setColumnToSort] = useState('productName');

  const { isLoading, isError, data } = useQuery(
    ['productsTable', sortOrder, columnToSort],
    {
      queryFn: products.getProducts,
      select: (data: ProductInterface[]) => {
        return [...data].sort((a, b) => {
          const columnA = a[columnToSort];
          const columnB = b[columnToSort];

          if (typeof columnA === 'string' && typeof columnB === 'string') {
            return sortOrder
              ? columnA.localeCompare(columnB)
              : columnB.localeCompare(columnA);
          }
          return sortOrder ? 1 : -1;
        });
      },
    }
  );

  const handleSortClick = (columnName: string) => {
    if (columnName === columnToSort) {
      setSortOrder((prevSortOrder) => !prevSortOrder);
    } else {
      setColumnToSort(columnName);
      setSortOrder(false);
    }
  };

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>An Error has occured</span>;

  return (
    <Flex width="full" direction="column" p={8}>
      <Heading as="h1" size="lg" mb={8}>
        Products Page
      </Heading>
      <Flex direction="column">
        <Flex>
          <SearchBox
            borderColor="black"
            _hover={{ borderColor: 'black' }}
            focusBorderColor="tranparent"
          />

          <Stack direction="row">
            <Button
              leftIcon={<AddIcon />}
              mt="auto"
              mb={4}
              mx={4}
              colorScheme="orange"
            >
              Add
            </Button>
          </Stack>
        </Flex>

        <TableContainer>
          <Box overflowX="auto">
            <Table variant="simple" size="xs" className="table-fixed">
              <Thead>
                <Tr>
                  <Th
                    width="5%"
                    fontSize="xs"
                    userSelect="none"
                    onClick={() => {
                      console.log('ID Clicked');
                    }}
                  >
                    ID
                  </Th>
                  <Th
                    fontSize="xs"
                    userSelect="none"
                    onClick={() => handleSortClick('productName')}
                  >
                    NAME
                  </Th>
                  <Th
                    fontSize="xs"
                    userSelect="none"
                    onClick={() => handleSortClick('brand')}
                  >
                    BRAND
                  </Th>
                  <Th
                    fontSize="xs"
                    userSelect="none"
                    onClick={() => handleSortClick('categoryName')}
                  >
                    CATEGORY
                  </Th>
                  <Th
                    fontSize="xs"
                    userSelect="none"
                    onClick={() => handleSortClick('unitName')}
                  >
                    UNIT
                  </Th>
                  <Th
                    fontSize="xs"
                    userSelect="none"
                    onClick={() => {
                      console.log('clicked');
                    }}
                  >
                    ITEM CODES
                  </Th>
                  <Th
                    width="10%"
                    fontSize="xs"
                    userSelect="none"
                    onClick={() => handleSortClick('price')}
                  >
                    PRICE
                  </Th>
                  <Th fontSize="xs" textAlign="center" userSelect="none">
                    ACTIONS
                  </Th>
                </Tr>
              </Thead>
              <Tbody
                maxH={data.length > 10 ? '320px' : 'unset'}
                overflowY="scroll"
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
                      <Td width="5%">{productId}</Td>
                      <Td>{productName}</Td>
                      <Td>{brand}</Td>
                      <Td>{categoryName}</Td>
                      <Td>{unitName}</Td>
                      <Td>{itemCodes === null ? 'None' : itemCodes}</Td>
                      <Td width="10%">{FormatCurrency(parseFloat(price))}</Td>
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
          </Box>
        </TableContainer>
      </Flex>
    </Flex>
  );
}
