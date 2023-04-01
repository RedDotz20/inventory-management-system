import { motion } from 'framer-motion';

interface BackdropProps {
  children: React.ReactNode;
  onClick: () => void;
  style?: { backgroundColor: string };
}

const Backdrop = ({ children, onClick, style }: BackdropProps) => {
  return (
    <motion.div
      className="absolute z-[20] top-0 left-0 h-full w-full flex items-center justify-center"
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
