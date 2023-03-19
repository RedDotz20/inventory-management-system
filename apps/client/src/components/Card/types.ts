type CardProps = { children: React.ReactNode };
type CardHeaderProps = { pb?: number; children: React.ReactNode };
type CardBody = {
  pt?: number;
  children: React.ReactNode;
};
type HeadingProps = {
  size?: string;
  className?: string;
  children?: React.ReactNode;
};
type TextProps = {
  className?: string;
  children?: React.ReactNode;
};

interface CardInterface {
  header: string;
  body: string;
  color: string;
  borderColor: string;
}

export { CardProps, CardHeaderProps, CardBody, HeadingProps, TextProps };
export default CardInterface;
