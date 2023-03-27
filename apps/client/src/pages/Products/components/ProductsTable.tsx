import { HTMLAttributes } from 'react';
import ProductInterface from '../type';
import FormatCurrency from '../../../utils/FormatCurrency';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
  Thead,
  TableContainer,
} from '@chakra-ui/react';

interface ProductsTableInterface {
  data: ProductInterface[];
  sortOrder: boolean;
  columnToSort: string;
  handleSortClick: (columnName: string) => void;
}

interface ThProps extends HTMLAttributes<HTMLTableHeaderCellElement> {
  children: React.ReactNode;
  width?: string;
  onClick?: () => void;
}

const THeader = ({ children, ...rest }: ThProps) => {
  return (
    <Th fontSize="xs" userSelect="none" {...rest}>
      {children}
    </Th>
  );
};

export default function ProductsTable({
  data,
  sortOrder,
  columnToSort,
  handleSortClick,
}: ProductsTableInterface) {
  return (
    <TableContainer>
      <Box overflowX="auto">
        <Table variant="simple" size="xs" className="table-fixed">
          <Thead>
            <Tr>
              <THeader width="5%">ID</THeader>

              <THeader onClick={() => handleSortClick('productName')}>
                NAME {columnToSort === 'productName' && (sortOrder ? '▼' : '▲')}
              </THeader>

              <THeader onClick={() => handleSortClick('brand')}>
                BRAND {columnToSort === 'brand' && (sortOrder ? '▼' : '▲')}
              </THeader>

              <THeader onClick={() => handleSortClick('categoryName')}>
                CATEGORY
                {columnToSort === 'categoryName' && (sortOrder ? '▼' : '▲')}
              </THeader>

              <THeader onClick={() => handleSortClick('unitName')}>
                UNIT
                {columnToSort === 'unitName' && (sortOrder ? '▼' : '▲')}
              </THeader>

              <THeader>ITEM CODES</THeader>

              <THeader width="10%" onClick={() => handleSortClick('price')}>
                PRICE
                {columnToSort === 'price' && (sortOrder ? '▼' : '▲')}
              </THeader>

              <THeader>
                <Center>ACTIONS</Center>
              </THeader>
            </Tr>
          </Thead>
          <Tbody maxH={data.length > 10 ? '320px' : 'unset'} overflowY="scroll">
            {data.map((prod: ProductInterface) => {
              return (
                <Tr key={prod.productId}>
                  <Td width="5%">{prod.productId}</Td>
                  <Td>{prod.productName}</Td>
                  <Td>{prod.brand}</Td>
                  <Td>{prod.categoryName}</Td>
                  <Td>{prod.unitName}</Td>
                  <Td>{prod.itemCodes === null ? 'None' : prod.itemCodes}</Td>
                  <Td width="10%">{FormatCurrency(parseFloat(prod.price))}</Td>
                  <Td textAlign="center">
                    <Flex justify="center" align="center" gap={1}>
                      <Button borderRadius="full" colorScheme="orange" p="0">
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
  );
}
