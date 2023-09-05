import { FieldValues } from 'react-hook-form';

interface loginInterface extends FieldValues {
  username: string;
  password: string;
}

export default loginInterface;
