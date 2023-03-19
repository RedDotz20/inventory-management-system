interface SearchBoxInterface {
  borderColor: string;
  _hover: { borderColor: string };
  focusBorderColor: string;
}

type InputGroupProps = {
  colorScheme?: string;
};

type InputProps = {
  type: string;
  placeholder?: string;
  borderColor?: string;
  _hover?: { borderColor?: string };
  focusBorderColor?: string;
};

type InputLeftElementProps = {
  pointerEvents?: string;
  children: React.ReactNode;
};

export { InputGroupProps, InputProps, InputLeftElementProps };
export default SearchBoxInterface;
