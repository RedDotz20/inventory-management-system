import { Box, Table, TableContainer } from '@chakra-ui/react';
import { ItemsInterface } from '@root/shared/interfaces';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getItems } from '../../../../api/items';

import useSortItem from '../../store/SortItemStore';
import BodyTable from './Body';
import Header from './Header';

export default function ItemsTable() {
  const { sortOrder, columnToSort } = useSortItem();

  const itemsQuery = useQuery({
    queryKey: ['itemsTable', sortOrder, columnToSort],
    queryFn: getItems,
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
        <Table variant="striped" size="sm" className="table-fixed">
          <Header />
          <BodyTable itemsQuery={itemsQuery} />
        </Table>
      </Box>
    </TableContainer>
  );
}
