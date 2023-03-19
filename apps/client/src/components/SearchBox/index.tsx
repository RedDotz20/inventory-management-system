import { SearchIcon } from '@chakra-ui/icons';

import {
  Input,
  InputGroup,
  InputLeftElement,
} from './components/SearchComponent';

interface SearchBoxInterface {
  borderColor: string;
  _hover: { borderColor: string };
  focusBorderColor: string;
}

function SearchBox(props: SearchBoxInterface) {
  return (
    <InputGroup colorScheme="dark">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="black" />}
      />
      <Input
        type="text"
        placeholder="Search"
        borderColor={props.borderColor}
        _hover={props._hover}
        focusBorderColor={props.focusBorderColor}
      />
    </InputGroup>
  );
}

export default SearchBox;
