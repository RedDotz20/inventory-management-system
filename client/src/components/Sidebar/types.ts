export interface NavRoutesProps {
  to: string;
  children: React.ReactNode;
}

export type ButtonInterface = {
  className: string;
  variant: string;
  onClick: () => void;
};
