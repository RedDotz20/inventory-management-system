import { motion } from 'framer-motion';
import ModalPortal from '../Modal/ModalPortal';

interface BackdropProps {
  children: React.ReactNode;
  style?: { backgroundColor: string };
  className: string;
  onClick: () => void;
}

const Backdrop = ({ children, onClick, ...rest }: BackdropProps) => {
  return (
    <ModalPortal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
        {...rest}
      >
        {children}
      </motion.div>
    </ModalPortal>
  );
};

export default Backdrop;
