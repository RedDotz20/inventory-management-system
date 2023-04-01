import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import useSearchProduct from '../../store/SearchProductStore';

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
    </InputGroup>
  );
}
