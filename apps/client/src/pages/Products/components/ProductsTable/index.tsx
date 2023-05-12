import { Table, TableContainer } from '@chakra-ui/react';
import { useState } from 'react';
import { useProductsQuery } from '../../../../hooks/useProductsQuery';
import BodyTable from './Body';
import Header from './Header';

const ROWS_TO_DISPLAY = 10;

function ProductsTable() {
  const { isLoading, isError, data } = useProductsQuery();
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + ROWS_TO_DISPLAY;
  // const slicedData = data ? data.slice(startIndex, endIndex) : [];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    if (bottom && data && endIndex < data.length) {
      setStartIndex(startIndex + ROWS_TO_DISPLAY);
    }
  };

  return (
    <TableContainer className="min-w-[780px]">
      <Table variant="striped" size="sm" className="table-fixed">
        <Header />
      </Table>
      <div
        style={{ height: '400px', overflowY: 'scroll' }}
        onScroll={handleScroll}
      >
        <Table variant="striped" size="sm" className="table-fixed">
          <BodyTable
            isLoading={isLoading}
            isError={isError}
            data={data}
            // handleScroll={handleScroll}
          />
        </Table>
      </div>
    </TableContainer>
  );
}

export default ProductsTable;
