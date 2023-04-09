import { HTMLAttributes } from 'react';
import { Thead, Th, Tr, Center } from '@chakra-ui/react';
import useSortItem from '../../store/SortItemStore';

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
    useSortItem();

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
        <Th
          p={4}
          onClick={() => handleSortClick('item_code_id')}
          width="5%"
          fontSize="xs"
          userSelect="none"
          textAlign="center"
        >
          ID {getArrowSymbol(columnToSort, 'item_code_id', sortOrder)}
        </Th>

        <THeader onClick={() => handleSortClick('productName')}>
          PRODUCT NAME {getArrowSymbol(columnToSort, 'productName', sortOrder)}
        </THeader>

        <THeader onClick={() => handleSortClick('variant')}>
          VARIANT {getArrowSymbol(columnToSort, 'variant', sortOrder)}
        </THeader>

        <THeader onClick={() => handleSortClick('item_code')}>
          ITEM CODE {getArrowSymbol(columnToSort, 'item_code', sortOrder)}
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

        <THeader>
          <Center>ACTIONS</Center>
        </THeader>
      </Tr>
    </Thead>
  );
}
