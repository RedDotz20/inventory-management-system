import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Tbody, Td, Tr } from '@chakra-ui/react';
import { ItemsInterface } from '@root/shared/interfaces';
import { UseQueryResult } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

// import FormatCurrency from '../../../../utils/FormatCurrency';
import TableError from '../../../../components/ErrorInfo/TableError';
import TableLoader from '../../../../components/Loader/TableLoader';
import useSearchItem from '../../store/SearchItemStore';

// import DeleteProduct from '../DeleteProduct';

type QueryProps = { itemsQuery: UseQueryResult<ItemsInterface[]> };

function BodyTable({ itemsQuery }: QueryProps) {
  const { isLoading, isError, data } = itemsQuery;
  const { query } = useSearchItem();

  const filteredProducts = useMemo(() => {
    return data?.filter((prod) => {
      const item = prod.productName.toLowerCase();
      return item.includes(query.toLowerCase());
    });
  }, [data, query]);

  const itemsRow = query.length > 0 ? filteredProducts ?? [] : data ?? [];

  if (isLoading) return <TableLoader />;
  if (isError) return <TableError />;

  return (
    <Tbody maxH={itemsRow.length > 10 ? '320px' : 'unset'} overflowY="scroll">
      {itemsRow.map((item: ItemsInterface) => {
        return (
          <Tr
            key={item.item_code_id}
            className="transition duration-200 ease-in-out hover:bg-gray-200"
          >
            <Td width="5%">{item.item_code_id}</Td>
            <Td>{item.productName}</Td>
            <Td width="5%">{item.variant}</Td>
            <Td>{item.item_code === null ? 'None' : item.item_code}</Td>
            <Td>{item.brandName}</Td>
            <Td>{item.price}</Td>
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
