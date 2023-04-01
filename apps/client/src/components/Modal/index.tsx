import { motion } from 'framer-motion';
import { zoomInOut } from './variants';

interface ModalProps {
  handleClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ children, ...rest }: ModalProps) => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={zoomInOut}
      initial="hidden"
      animate="visible"
      exit="exit"
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Modal;
