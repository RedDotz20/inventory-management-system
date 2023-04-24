import { AxiosError } from 'axios';
import { FieldValues } from 'react-hook-form';

interface loginInterface extends FieldValues {
  username: string;
  password: string;
}

interface loginResponseType {
  token?: string;
}

interface UserServiceModule {
  login: (values: loginInterface) => Promise<loginResponseType>;
  logout: () => Promise<void>;
}

interface CustomAxiosError extends AxiosError {
  isAxiosError: boolean;
}

export { loginInterface, CustomAxiosError, UserServiceModule };
