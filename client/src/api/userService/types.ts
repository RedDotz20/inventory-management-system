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

export { UserServiceModule };
export default loginInterface;
