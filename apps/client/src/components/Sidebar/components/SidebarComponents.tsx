import { ComponentWithAs } from '@chakra-ui/react';
import { ButtonInterface } from '../types';

const Button: ComponentWithAs<'div', ButtonInterface> = ({
  children,
  ...rest
}) => {
  return <div {...rest}>{children}</div>;
};

export { Button };
