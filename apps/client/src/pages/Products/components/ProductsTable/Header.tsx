import { Center, Th, Thead, Tr } from '@chakra-ui/react';
import { HTMLAttributes } from 'react';
import useSortProduct from './SortProductStore';

interface ThProps extends HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  width?: string;
  onClick?: () => void;
}

function getArrowSymbol(
  columnToSort: string,
  columnName: string,
  sortOrder: boolean | ((state: boolean) => boolean)
) {
  const ARROW_UP = '▲';
  const ARROW_DOWN = '▼';
  if (columnToSort === columnName) {
    return sortOrder ? ARROW_UP : ARROW_DOWN;
  }
}

export const THeader = ({ children, ...rest }: ThProps) => {
  return (
    <Th fontSize="xs" userSelect="none" {...rest}>
      {children}
    </Th>
  );
};

export default function Header() {
  const { sortOrder, columnToSort, setSortOrder, setColumnToSort } =
    useSortProduct();

  const handleSort = (columnName: string) => {
    if (columnName === columnToSort) {
      setSortOrder((prevSortOrder) => !prevSortOrder);
    } else {
      setColumnToSort(columnName);
      setSortOrder(false);
    }
  };

  return (
    <Thead>
      <Tr>
        <Th
          p={4}
          onClick={() => handleSort('rowNumber')}
          width="5%"
          fontSize="xs"
          userSelect="none"
          textAlign="center"
        >
          Id {getArrowSymbol(columnToSort, 'productId', sortOrder)}
        </Th>

        <THeader onClick={() => handleSort('productName')}>
          PRODUCT NAME {getArrowSymbol(columnToSort, 'productName', sortOrder)}
        </THeader>

        <THeader onClick={() => handleSort('variants')}>
          VARIANTS {getArrowSymbol(columnToSort, 'variants', sortOrder)}
        </THeader>

        <THeader onClick={() => handleSort('brandName')}>
          BRAND {getArrowSymbol(columnToSort, 'brandName', sortOrder)}
        </THeader>

        <THeader onClick={() => handleSort('categoryName')}>
          CATEGORY {getArrowSymbol(columnToSort, 'categoryName', sortOrder)}
        </THeader>

        <THeader onClick={() => handleSort('unitName')}>
          UNIT {getArrowSymbol(columnToSort, 'unitName', sortOrder)}
        </THeader>

        <THeader>
          <Center>ACTIONS</Center>
        </THeader>
      </Tr>
    </Thead>
  );
}
