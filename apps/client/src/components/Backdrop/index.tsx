import { motion } from 'framer-motion';
import ModalPortal from '../Modal/ModalPortal';

interface BackdropProps {
  children: React.ReactNode;
  style?: { backgroundColor: string };
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return (
    <ModalPortal>
      <motion.div
        className="absolute z-[20] top-0 bg-[#00000080] left-0 h-screen w-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </ModalPortal>
  );
};

export default Backdrop;
