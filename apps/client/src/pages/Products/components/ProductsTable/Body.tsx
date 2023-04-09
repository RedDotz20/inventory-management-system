import { useMemo } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { Button, Flex, Tbody, Td, Tr } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { ProductInterface } from '@root/shared/interfaces';

// import FormatCurrency from '../../../../utils/FormatCurrency';
import TableLoader from '../../../../components/Loader/TableLoader';
import TableError from '../../../../components/ErrorInfo/TableError';
import useSearchProduct from '../../store/SearchProductStore';

// import DeleteProduct from '../DeleteProduct';

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
            key={prod.rowNumber}
            className="hover:bg-gray-200 transition duration-200 ease-in-out"
          >
            <Td width="5%" textAlign="center">
              {prod.rowNumber}
            </Td>
            <Td>{prod.productName}</Td>
            <Td>{prod.inventory === null ? 'None' : prod.inventory}</Td>
            <Td maxW="10px" overflowWrap="break-word">
              {prod.brand}
            </Td>
            <Td maxW="10px" overflowWrap="break-word">
              {prod.categoryName}
            </Td>
            <Td>{prod.unitName}</Td>
            {/* <Td width="10%">{FormatCurrency(parseFloat(prod.price))}</Td> */}
            <Td textAlign="center">
              <Flex justify="center" align="center" gap={1}>
                <RowButton type="edit" />
                <RowButton type="delete" />
                {/* <DeleteProduct productId={prod.productId} /> */}
                {/* <RowButton type="delete" /> */}
              </Flex>
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
}

const RowButton = ({ type, ...rest }: { type: string }) => {
  const MotionButton = motion(Button);
  return (
    <MotionButton
      {...rest}
      whileTap={{ scale: 0.9 }}
      borderRadius="full"
      colorScheme={type === 'edit' ? 'orange' : 'red'}
      p="0"
    >
      {type === 'edit' ? <EditIcon /> : <DeleteIcon />}
    </MotionButton>
  );
};

export default BodyTable;
