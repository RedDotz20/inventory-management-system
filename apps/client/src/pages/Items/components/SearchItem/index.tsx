import { SearchIcon } from '@chakra-ui/icons';
import {
  CloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react';
import useItemStore from '../../store/SearchItemStore';

export default function SearchItem() {
  const { query, setQuery } = useItemStore();
  return (
    <InputGroup colorScheme="dark">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="black" />}
      />
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        type="search"
        placeholder="Search"
        borderColor="black"
        _hover={{ borderColor: 'black' }}
        focusBorderColor="tranparent"
      />
      {query.length > 0 && (
        <InputRightElement
          onClick={() => setQuery('')}
          pointerEvents="auto"
          children={<CloseButton />}
        />
      )}
    </InputGroup>
  );
}
