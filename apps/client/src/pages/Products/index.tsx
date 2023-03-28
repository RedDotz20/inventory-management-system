import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Flex, Heading } from '@chakra-ui/react';
import products from '../../api/products';
import ProductInterface from './type';

import ProductsTable from './components/ProductsTable';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';

export default function Products() {
  const [sortOrder, setSortOrder] = useState(false);
  const [columnToSort, setColumnToSort] = useState('productName');
  const { isLoading, isError, data } = useQuery(
    ['productsTable', sortOrder, columnToSort],
    {
      queryFn: products.getProducts,
      select: (data: ProductInterface[]) => {
        return [...data].sort((a, b) => {
          const columnA: string | number = a[columnToSort];
          const columnB: string | number = b[columnToSort];

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
          <SearchProduct />
          <AddProduct />
        </Flex>

        <ProductsTable
          data={data}
          sortOrder={sortOrder}
          columnToSort={columnToSort}
          handleSortClick={handleSortClick}
        />
      </Flex>
    </Flex>
  );
}
