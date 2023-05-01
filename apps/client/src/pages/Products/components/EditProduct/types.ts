import { ProductInterface } from '@root/shared/interfaces';
import { FieldPath, FieldValues, UseFormTrigger } from 'react-hook-form';

interface ModalProps {
  closeModal: () => void;
  prod: ProductInterface;
}

interface EditFieldInterface extends FieldValues {
  productName: string;
  brandName: string;
  categoryName: string;
  unitName: string;
}

interface InputProps {
  field: {
    onChange: (value: string | number | boolean | null) => void;
    value: string | number | boolean | null;
    name: FieldPath<EditFieldInterface>;
    onBlur: () => void;
  };
  trigger: UseFormTrigger<EditFieldInterface>;
}

export { EditFieldInterface, InputProps, ModalProps };
