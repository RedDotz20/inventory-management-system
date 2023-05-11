import { Flex, Tbody, Td, Tr } from '@chakra-ui/react';
import { ProductInterface } from '@root/shared/interfaces';
import { UseQueryResult } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import TableError from '../../../../components/ErrorInfo/TableError';
import TableLoader from '../../../../components/Loader/TableLoader';
import DeleteProduct from '../DeleteProduct';
import EditProduct from '../EditProduct';
import useSearchProduct from '../SearchProduct/SearchProductStore';
import useSortProduct from './SortProductStore';

type QueryProps = { productsQuery: UseQueryResult<ProductInterface[]> };

function BodyTable({ productsQuery }: QueryProps) {
  const { isLoading, isError, data } = productsQuery;
  const { products, setProducts, sortOrder, columnToSort } = useSortProduct();
  const { query } = useSearchProduct();

  useEffect(() => setProducts(data ?? []), [data, setProducts]);

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
      const columnA = a[columnToSort];
      const columnB = b[columnToSort];
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
      {productsRow().map((prod: ProductInterface, index) => {
        return (
          <Tr
            key={prod.productId}
            className="transition duration-200 ease-in-out hover:bg-gray-200"
          >
            <Td width="5%" textAlign="center">
              {prod.productId}
            </Td>
            <Td>{prod.productName}</Td>
            <Td>{prod.variants === null ? 'None' : prod.variants}</Td>
            <Td maxW="10px" overflowWrap="break-word">
              {prod.brandName}
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

export default BodyTable;
