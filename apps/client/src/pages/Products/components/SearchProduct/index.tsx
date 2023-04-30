import { SearchIcon } from '@chakra-ui/icons';
import {
  CloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react';
import useSearchProduct from './SearchProductStore';

export default function SearchProduct() {
  const { query, setQuery } = useSearchProduct();
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
