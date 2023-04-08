import { motion, AnimatePresence } from 'framer-motion';
import { Spinner } from '@chakra-ui/react';
import { fadeInOut } from './variants';

function ComponentLoader() {
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      <motion.div className="grid items-center mx-auto" variants={fadeInOut}>
        <Spinner color="orange" thickness="5px" size="xl" />
      </motion.div>
    </AnimatePresence>
  );
}

export default ComponentLoader;
