import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Box, Table, TableContainer } from '@chakra-ui/react';
import items from '../../../../api/items';
import { ItemsInterface } from '@root/shared/interfaces';

import Header from './Header';
import BodyTable from './Body';
import useSortItem from '../../store/SortItemStore';

export default function ItemsTable() {
  const { sortOrder, columnToSort } = useSortItem();

  const itemsQuery = useQuery({
    queryKey: ['itemsTable', sortOrder, columnToSort],
    queryFn: items.getItems,
    select: (data: ItemsInterface[]) => {
      return [...data].sort((a, b) => {
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
  });

  const queryClient = useQueryClient();
  queryClient.setQueryData(['itemsTable'], itemsQuery.data);

  return (
    <TableContainer className="min-w-[780px]">
      <Box overflowX="auto">
        <Table variant="simple" size="xs" className="table-fixed">
          <Header />
          <BodyTable itemsQuery={itemsQuery} />
        </Table>
      </Box>
    </TableContainer>
  );
}
