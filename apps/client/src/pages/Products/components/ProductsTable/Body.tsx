import { Flex, Tbody, Td, Tr } from '@chakra-ui/react';
import { ProductInterface } from '@root/shared/interfaces';
import { useEffect, useMemo, useState } from 'react';
import TableError from '../../../../components/ErrorInfo/TableError';
import TableLoader from '../../../../components/Loader/TableLoader';
import DeleteProduct from '../DeleteProduct';
import EditProduct from '../EditProduct';
import useSearchProduct from '../SearchProduct/SearchProductStore';
import useSortProduct from './SortProductStore';

interface QueryProps {
  isLoading: boolean;
  isError: boolean;
  data?: ProductInterface[];
}

function BodyTable({ isLoading, isError, data }: QueryProps) {
  const { products, setProducts, sortOrder, columnToSort } = useSortProduct();
  const { query } = useSearchProduct();
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>(
    []
  );

  useEffect(() => {
    setProducts(data ?? []);
  }, [data, setProducts]);

  useEffect(() => {
    const filtered =
      query.length > 0
        ? products.filter((prod) =>
            prod.productName.toLowerCase().includes(query.toLowerCase())
          )
        : products;
    setFilteredProducts(filtered);
  }, [products, query]);

  const sortedProducts = useMemo(() => {
    if (sortOrder && columnToSort) {
      return filteredProducts.slice().sort((a, b) => {
        const columnA = a[columnToSort];
        const columnB = b[columnToSort];
        if (typeof columnA === 'string' && typeof columnB === 'string') {
          return sortOrder
            ? columnA.localeCompare(columnB)
            : columnB.localeCompare(columnA);
        }
        return sortOrder ? 1 : -1;
      });
    }
    return filteredProducts;
  }, [filteredProducts, columnToSort, sortOrder]);

  const displayedProducts = useMemo(() => {
    if (query.length > 0 || (sortOrder && columnToSort)) {
      return sortedProducts;
    }
    return products;
  }, [query, sortOrder, columnToSort, sortedProducts, products]);

  if (isLoading) return <TableLoader />;
  if (isError) return <TableError />;

  return (
    <Tbody
      maxH={displayedProducts.length > 10 ? '320px' : 'unset'}
      overflowY="scroll"
    >
      {displayedProducts.map((products: ProductInterface) => {
        const {
          productId,
          productName,
          brandName,
          categoryName,
          variants,
          unitName
        } = products;

        return (
          <Tr
            key={productId}
            className="transition duration-200 ease-in-out hover:bg-gray-200"
          >
            <Td width="5%" textAlign="center">
              {productId}
            </Td>
            <Td>{productName}</Td>
            <Td>{variants === null ? 'None' : variants}</Td>
            <Td maxW="10px" overflowWrap="break-word">
              {brandName}
            </Td>
            <Td maxW="10px" overflowWrap="break-word">
              {categoryName}
            </Td>
            <Td>{unitName}</Td>
            <Td>
              <Flex justify="center" align="center" gap={1}>
                <EditProduct prod={products} />
                <DeleteProduct productId={productId} />
                <button onClick={() => console.log(productId)}>test</button>
              </Flex>
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
}

export default BodyTable;
