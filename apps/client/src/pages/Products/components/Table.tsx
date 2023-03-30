import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
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
import ProductInterface from '../type';
import FormatCurrency from '../../../utils/FormatCurrency';

interface ProductsTableInterface {
  data: ProductInterface[];
  sortOrder: boolean;
  columnToSort: string;
  handleSortClick: (columnName: string) => void;
}

interface ThProps extends HTMLAttributes<HTMLTableCellElement> {
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

function ProductsTable({
  data,
  sortOrder,
  columnToSort,
  handleSortClick,
}: ProductsTableInterface) {
  return (
    <TableContainer className="min-w-[780px]">
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
                CATEGORY{' '}
                {columnToSort === 'categoryName' && (sortOrder ? '▼' : '▲')}
              </THeader>

              <THeader onClick={() => handleSortClick('unitName')}>
                UNIT {columnToSort === 'unitName' && (sortOrder ? '▼' : '▲')}
              </THeader>

              <THeader>ITEM CODES</THeader>

              <THeader width="10%" onClick={() => handleSortClick('price')}>
                PRICE {columnToSort === 'price' && (sortOrder ? '▼' : '▲')}
              </THeader>

              <THeader>
                <Center>ACTIONS</Center>
              </THeader>
            </Tr>
          </Thead>
          <BodyTable data={data} />
        </Table>
      </Box>
    </TableContainer>
  );
}

function BodyTable({ data }: { data: ProductInterface[] }) {
  const MotionButton = motion(Button);
  return (
    <Tbody maxH={data.length > 10 ? '320px' : 'unset'} overflowY="scroll">
      {data.map((prod: ProductInterface) => {
        return (
          <Tr
            key={prod.productId}
            className="hover:bg-gray-200 transition duration-200 ease-in-out"
          >
            <Td width="5%">{prod.productId}</Td>
            <Td>{prod.productName}</Td>
            <Td>{prod.brand}</Td>
            <Td>{prod.categoryName}</Td>
            <Td>{prod.unitName}</Td>
            <Td>{prod.itemCodes === null ? 'None' : prod.itemCodes}</Td>
            <Td width="10%">{FormatCurrency(parseFloat(prod.price))}</Td>
            <Td textAlign="center">
              <Flex justify="center" align="center" gap={1}>
                <MotionButton
                  whileTap={{ scale: 0.9 }}
                  borderRadius="full"
                  colorScheme="orange"
                  p="0"
                >
                  <EditIcon />
                </MotionButton>

                <MotionButton
                  whileTap={{ scale: 0.9 }}
                  borderRadius="full"
                  colorScheme="red"
                  p="0"
                >
                  <DeleteIcon />
                </MotionButton>
              </Flex>
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
}

export default ProductsTable;
