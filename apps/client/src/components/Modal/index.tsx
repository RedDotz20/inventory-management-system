import { motion } from 'framer-motion';
import { zoomInOut } from './variants';
import Backdrop from '../Backdrop';

interface ModalProps {
  handleClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ handleClose, children, ...rest }: ModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
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
    </Backdrop>
  );
};

export default Modal;
