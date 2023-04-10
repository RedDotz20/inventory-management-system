import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

import ProductsTable from './components/ProductsTable';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';

export default function Products() {
  return (
    <Flex width="full" direction="column" p={4}>
      <Stack py={4} mb={6} spacing={0}>
        <Text size="sm" color="white">
          home/products
        </Text>
        <Heading as="h1" size="lg" color="white" mt="0">
          Products
        </Heading>
      </Stack>

      <Flex direction="column">
        <Flex gap={4}>
          <SearchProduct />
          <AddProduct />
        </Flex>

        <ProductsTable />
      </Flex>
    </Flex>
  );
}
