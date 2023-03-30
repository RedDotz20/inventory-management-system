import { useQuery } from '@tanstack/react-query';
import { Box, Table, TableContainer } from '@chakra-ui/react';
import useSortProduct from '../../store/SortProductStore';
import products from '../../../../api/products';
import ProductInterface from '../../type';

import Header from './Header';
import BodyTable from './Body';

export default function ProductsTable() {
  const { sortOrder, columnToSort } = useSortProduct();

  const productsQuery = useQuery({
    queryKey: ['productsTable', sortOrder, columnToSort],
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
  });

  return (
    <TableContainer className="min-w-[780px]">
      <Box overflowX="auto">
        <Table variant="simple" size="xs" className="table-fixed">
          <Header />
          <BodyTable productsQuery={productsQuery} />
        </Table>
      </Box>
    </TableContainer>
  );
}
