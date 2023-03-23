interface NavRoutesProps {
  to: string;
  children: React.ReactNode;
}

type ButtonInterface = {
  className: string;
  variant: string;
  onClick: () => void;
};

export { NavRoutesProps, ButtonInterface };
