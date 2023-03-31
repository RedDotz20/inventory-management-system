import { HTMLAttributes } from 'react';
import { Thead, Th, Tr, Center } from '@chakra-ui/react';
import useSortProduct from '../../store/SortProductStore';

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

  const handleSortClick = (columnName: string) => {
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
        <THeader width="5%">ID</THeader>

        <THeader onClick={() => handleSortClick('productName')}>
          NAME {getArrowSymbol(columnToSort, 'productName', sortOrder)}
        </THeader>

        <THeader onClick={() => handleSortClick('brand')}>
          BRAND {getArrowSymbol(columnToSort, 'brand', sortOrder)}
        </THeader>

        <THeader onClick={() => handleSortClick('categoryName')}>
          CATEGORY {getArrowSymbol(columnToSort, 'categoryName', sortOrder)}
        </THeader>

        <THeader onClick={() => handleSortClick('unitName')}>
          UNIT {getArrowSymbol(columnToSort, 'unitName', sortOrder)}
        </THeader>

        <THeader>ITEM CODES</THeader>

        <THeader width="10%" onClick={() => handleSortClick('price')}>
          PRICE {getArrowSymbol(columnToSort, 'price', sortOrder)}
        </THeader>

        <THeader>
          <Center>ACTIONS</Center>
        </THeader>
      </Tr>
    </Thead>
  );
}
