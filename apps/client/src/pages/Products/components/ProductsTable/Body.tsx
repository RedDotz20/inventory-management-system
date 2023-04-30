import { Flex, Tbody, Td, Tr } from '@chakra-ui/react';
import { ProductInterface } from '@root/shared/interfaces';
import { UseQueryResult } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

import TableError from '../../../../components/ErrorInfo/TableError';
import TableLoader from '../../../../components/Loader/TableLoader';
import useSearchProduct from '../SearchProduct/SearchProductStore';
import useSortProduct from './SortProductStore';

import DeleteProduct from '../DeleteProduct';
import EditProduct from '../EditProduct';

type QueryProps = { productsQuery: UseQueryResult<ProductInterface[]> };

function BodyTable({ productsQuery }: QueryProps) {
  const { isLoading, isError, data } = productsQuery;
  const [products, setProducts] = useState<ProductInterface[]>(data ?? []);
  const { sortOrder, columnToSort } = useSortProduct();
  const { query } = useSearchProduct();

  useEffect(() => setProducts(data ?? []), [data]);

  const filteredProducts = useMemo(() => {
    return (
      [...products]?.filter((prod) => {
        const item = prod.productName.toLowerCase();
        return item.includes(query.toLowerCase());
      }) ?? []
    );
  }, [products, query]);

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      const columnA: string | number = a[columnToSort];
      const columnB: string | number = b[columnToSort];
      if (typeof columnA === 'string' && typeof columnB === 'string') {
        return sortOrder
          ? columnA.localeCompare(columnB)
          : columnB.localeCompare(columnA);
      }
      return sortOrder ? 1 : -1;
    });
  }, [products, columnToSort, sortOrder]);

  const productsRow = () => {
    if (query.length > 0) {
      return filteredProducts;
    } else if (sortOrder && columnToSort) {
      return sortedProducts;
    }
    return products;
  };

  if (isLoading) return <TableLoader />;
  if (isError) return <TableError />;

  return (
    <Tbody
      maxH={productsRow.length > 10 ? '320px' : 'unset'}
      overflowY="scroll"
    >
      {productsRow().map((prod: ProductInterface) => {
        return (
          <Tr
            key={prod.rowNumber}
            className="transition duration-200 ease-in-out hover:bg-gray-200"
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
            <Td>
              <Flex justify="center" align="center" gap={1}>
                <EditProduct prod={prod} />
                <DeleteProduct productId={prod.productId} />
              </Flex>
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
}

// const RowButton = ({ type, ...rest }: { type: string }) => {
//   const MotionButton = motion(Button);
//   return (
//     <MotionButton
//       {...rest}
//       whileTap={{ scale: 0.9 }}
//       borderRadius="full"
//       colorScheme={type === 'edit' ? 'orange' : 'red'}
//       p="0"
//     >
//       {type === 'edit' ? <EditIcon /> : <DeleteIcon />}
//     </MotionButton>
//   );
// };

export default BodyTable;
