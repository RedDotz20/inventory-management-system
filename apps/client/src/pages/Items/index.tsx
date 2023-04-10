import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import ItemsTable from './components/ItemsTable';
import SearchItem from './components/SearchItem';
import AddItem from './components/AddItem/index';

export default function Items() {
  return (
    <Flex width="full" direction="column" p={4}>
      <Stack py={4} mb={6} spacing={0}>
        <Text size="sm" color="white">
          home/items
        </Text>
        <Heading as="h1" size="lg" color="white" mt="0">
          Items
        </Heading>
      </Stack>

      <Flex direction="column">
        <Flex gap={4}>
          <SearchItem />
          <AddItem />
        </Flex>

        <ItemsTable />
      </Flex>
    </Flex>
  );
}
