import { Skeleton, Tbody, Td, Tr } from '@chakra-ui/react';

function TableLoader() {
  return (
    <Tbody>
      <Tr>
        <Td colSpan={8}>
          <Skeleton height="4rem" my={3} />
          <Skeleton height="4rem" my={3} />
          <Skeleton height="4rem" my={3} />
          <Skeleton height="4rem" my={3} />
          <Skeleton height="4rem" my={3} />
        </Td>
      </Tr>
    </Tbody>
  );
}

export default TableLoader;
