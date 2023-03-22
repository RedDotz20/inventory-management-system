import { ComponentWithAs } from '@chakra-ui/react';

import {
  InputGroupProps,
  MyInputProps,
  ButtonProps,
  InputRightElementProps,
} from '../types';

const Input: ComponentWithAs<'div', MyInputProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const InputGroup: ComponentWithAs<'div', InputGroupProps> = ({
  children,
  ...rest
}) => {
  return <div {...rest}>{children}</div>;
};

const Button: ComponentWithAs<'div', ButtonProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const InputRightElement: ComponentWithAs<'div', InputRightElementProps> = ({
  children,
  ...rest
}) => {
  return <div {...rest}>{children}</div>;
};

export { Input, InputGroup, Button, InputRightElement };
