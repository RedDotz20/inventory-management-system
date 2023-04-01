import { Thead, Tr, Th } from '@chakra-ui/react';

export default function TableError() {
  return (
    <Thead>
      <Tr>
        <Th fontSize="xs" userSelect="none">
          An Error Has Occured
        </Th>
      </Tr>
    </Thead>
  );
}
