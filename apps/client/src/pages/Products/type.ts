type StackProps = {
  children: React.ReactNode;
  direction: string;
};
type ButtonProps = {
  children: React.ReactNode;
  leftIcon?: React.ReactElement;
  className?: string;
  colorScheme?: string;
};

type TableContainerProps = { children: React.ReactNode };
type TableProps = {
  children: React.ReactNode;
  variant?: string;
  size?: string;
};
type TheadProps = {
  children: React.ReactNode;
};
type TbodyProps = {
  children: React.ReactNode;
};
type TrProps = {
  children: React.ReactNode;
};
type ThProps = {
  children: React.ReactNode;
};

type TdProps = {
  children: React.ReactNode;
};
interface ProductInterface {
  productId: number;
  productName: string;
  brand: string;
  categoryName: string;
  unitName: string;
  itemCodes: string;
  price: GLfloat;
}

export {
  StackProps,
  ButtonProps,
  TableContainerProps,
  TableProps,
  TheadProps,
  TbodyProps,
  TrProps,
  ThProps,
  TdProps,
};
export default ProductInterface;
