import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import ProductCards from './components/ProductCards';
import SearchCard from './components/SearchOrder/SearchCard';

export default function Order() {
  return (
    <Flex width="full" direction="column" p={4}>
      <Stack py={4} mb={6} spacing={0}>
        <Text size="sm" color="white">
          home/orders
        </Text>
        <Heading as="h1" size="lg" color="white" mt="0">
          Orders
        </Heading>
      </Stack>

      <Flex mb={4}>
        <SearchCard />
      </Flex>

      <Flex>
        <ProductCards />
      </Flex>
    </Flex>
  );
}
