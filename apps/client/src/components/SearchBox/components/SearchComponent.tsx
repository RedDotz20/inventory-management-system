import { ComponentWithAs } from '@chakra-ui/react';

import { InputGroupProps, InputProps, InputLeftElementProps } from '../types';

const Input: ComponentWithAs<'div', InputProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const InputGroup: ComponentWithAs<'div', InputGroupProps> = ({
  children,
  ...rest
}) => {
  return <div {...rest}>{children}</div>;
};

const InputLeftElement: ComponentWithAs<'div', InputLeftElementProps> = ({
  children,
  ...rest
}) => {
  return <div {...rest}>{children}</div>;
};

export { Input, InputGroup, InputLeftElement };
