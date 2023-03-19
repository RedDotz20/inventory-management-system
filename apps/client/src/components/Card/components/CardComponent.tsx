import { ComponentWithAs } from '@chakra-ui/react';
import {
  CardProps,
  CardHeaderProps,
  CardBody,
  HeadingProps,
  TextProps,
} from '../types';

const Card: ComponentWithAs<'div', CardProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const CardHeader: ComponentWithAs<'div', CardHeaderProps> = ({
  children,
  ...rest
}) => {
  return <div {...rest}>{children}</div>;
};

const Heading: ComponentWithAs<'div', HeadingProps> = ({
  children,
  ...rest
}) => {
  return <div {...rest}>{children}</div>;
};

const CardBody: ComponentWithAs<'div', CardBody> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const Text: ComponentWithAs<'div', TextProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export { Card, CardHeader, Heading, CardBody, Text };
