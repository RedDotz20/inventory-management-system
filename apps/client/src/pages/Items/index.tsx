import { Flex, Heading } from '@chakra-ui/react';
import ItemsTable from './components/ItemsTable';
import SearchItem from './components/SearchItem';
import AddItem from './components/AddItem/index';

export default function Items() {
  return (
    <Flex width="full" direction="column" p={8}>
      <Heading as="h1" size="lg" mb={8}>
        Items Page
      </Heading>

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
