import { ComponentWithAs } from '@chakra-ui/react';
import {
  StackProps,
  ButtonProps,
  TableContainerProps,
  TableProps,
  TheadProps,
  TbodyProps,
  TrProps,
  ThProps,
  TdProps,
} from '../type';

const Stack: ComponentWithAs<'div', StackProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const Button: ComponentWithAs<'div', ButtonProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const TableContainer: ComponentWithAs<'div', TableContainerProps> = ({
  children,
  ...rest
}) => {
  return <div {...rest}>{children}</div>;
};

const Table: ComponentWithAs<'div', TableProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const Thead: ComponentWithAs<'div', TheadProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};
const Tbody: ComponentWithAs<'div', TbodyProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const Tr: ComponentWithAs<'div', TrProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const Th: ComponentWithAs<'div', ThProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const Td: ComponentWithAs<'div', TdProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export { Stack, Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer };
