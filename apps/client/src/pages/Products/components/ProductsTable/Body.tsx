import { UseQueryResult } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Button, Flex, Thead, Tbody, Td, Tr } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import ProductInterface from '../../type';
import FormatCurrency from '../../../../utils/FormatCurrency';
import { THeader } from './Header';

type QueryProps = { productsQuery: UseQueryResult<ProductInterface[]> };

function BodyTable({ productsQuery }: QueryProps) {
  const { isLoading, isError, data } = productsQuery;
  const MotionButton = motion(Button);

  if (isLoading)
    return (
      <Thead>
        <Tr>
          <THeader width="100%">LOADING ...</THeader>
        </Tr>
      </Thead>
    );

  if (isError)
    return (
      <Thead>
        <Tr>
          <THeader width="100%">An Error Has Occured</THeader>
        </Tr>
      </Thead>
    );

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

export default BodyTable;
