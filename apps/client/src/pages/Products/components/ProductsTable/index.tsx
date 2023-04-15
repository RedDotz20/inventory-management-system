import { Box, Table, TableContainer } from '@chakra-ui/react';
import { useProductsQuery } from '../../../../hooks/useProductsQuery';

import BodyTable from './Body';
import Header from './Header';

function ProductsTable() {
  const productsQuery = useProductsQuery();
  return (
    <TableContainer className="min-w-[780px]">
      <Box overflowX="auto">
        <Table variant="striped" size="sm" className="table-fixed">
          <Header />
          <BodyTable productsQuery={productsQuery} />
        </Table>
      </Box>
    </TableContainer>
  );
}

export default ProductsTable;
