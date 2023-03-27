import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { AddIcon } from '@chakra-ui/icons';
import { Flex, Heading, Stack, Button } from '@chakra-ui/react';
import ProductsTable from './components/ProductsTable';
import ProductInterface from './type';
import SearchBox from '../../components/SearchBox';
import products from '../../api/products';

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

  const MotionButton = motion(Button);

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>An Error has occured</span>;

  return (
    <Flex width="full" direction="column" p={8}>
      <Heading as="h1" size="lg" mb={8}>
        Products Page
      </Heading>
      <Flex direction="column">
        <Flex>
          <SearchBox
            borderColor="black"
            _hover={{ borderColor: 'black' }}
            focusBorderColor="tranparent"
          />

          <Stack direction="row">
            <MotionButton
              whileTap={{ scale: 0.9 }}
              leftIcon={<AddIcon />}
              colorScheme="orange"
              mt="auto"
              mb={4}
              mx={4}
            >
              Add
            </MotionButton>
          </Stack>
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
