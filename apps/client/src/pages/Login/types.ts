// import { InputProps, InputRightElement } from '@chakra-ui/react';
// import { InputHTMLAttributes } from 'react';

import { Message, ValidationRule, Validate } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';

import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

interface InputGroupProps {
  size?: string;
  className?: string;
  colorScheme?: string;
  children: React.ReactNode;
}

interface MyInputProps {
  id: string;
  type: string;
  borderColor: string;
  _hover: { borderColor: string };
  focusBorderColor: string;
  pr?: string;
}

interface ButtonProps {
  colorScheme?: string;
  type?: string;
  className?: string;
  h?: string;
  size?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

interface InputRightElementProps {
  width?: string;
  classname?: string;
  children?: React.ReactNode;
}

interface loginInterface extends FieldValues {
  username: string;
  password: string;
}

// type RegisterOptions = Partial<{
//   required?: Message | ValidationRule<boolean>;
//   min?: ValidationRule<number | string>;
//   max?: ValidationRule<number | string>;
//   maxLength?: ValidationRule<number | string>;
//   minLength?: ValidationRule<number | string>;
//   pattern?: ValidationRule<RegExp>;
//   // validate?: Validate | Record<string, Validate>;
// }>;

// type LoginFormData = {
//   username: string;
//   // ...
// };

// type RegisterFunction = (
//   name: keyof LoginFormData,
//   options?: RegisterOptions<LoginFormData, keyof LoginFormData>
// ) => UseFormRegisterReturn<keyof LoginFormData>;

// interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
//   name: 'username' | 'password';
//   min?: string | number | undefined;
//   max?: string | number | undefined;
//   register: (name: string, options?: any) => any;
//   type: string;
//   placeholder?: string;
//   borderColor?: string;
//   _hover?: { borderColor?: string };
//   focusBorderColor?: string;
//   pr?: string;
// }

export { InputGroupProps, MyInputProps, ButtonProps, InputRightElementProps };
export default loginInterface;
