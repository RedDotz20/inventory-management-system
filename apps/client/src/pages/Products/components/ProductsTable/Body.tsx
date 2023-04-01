import { useMemo } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { Button, Flex, Tbody, Td, Tr } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import useSearchProduct from '../../store/SearchProductStore';
import ProductInterface from '../../type';

import FormatCurrency from '../../../../utils/FormatCurrency';
import TableLoader from '../../../../components/Loader/TableLoader';
import TableError from '../../../../components/ErrorInfo/TableError';

type QueryProps = { productsQuery: UseQueryResult<ProductInterface[]> };

function BodyTable({ productsQuery }: QueryProps) {
  const { isLoading, isError, data } = productsQuery;
  const { query } = useSearchProduct();

  const filteredProducts = useMemo(() => {
    return data?.filter((prod) => {
      const item = prod.productName.toLowerCase();
      return item.includes(query.toLowerCase());
    });
  }, [data, query]);

  const productsRow = query.length > 0 ? filteredProducts ?? [] : data ?? [];
  const MotionButton = motion(Button);

  if (isLoading) return <TableLoader />;
  if (isError) return <TableError />;

  return (
    <Tbody
      maxH={productsRow.length > 10 ? '320px' : 'unset'}
      overflowY="scroll"
    >
      {productsRow.map((prod: ProductInterface) => {
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

export default BodyTable;
