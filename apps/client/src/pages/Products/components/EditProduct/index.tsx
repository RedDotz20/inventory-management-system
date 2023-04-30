import { Button } from '@chakra-ui/button';
import { EditIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy } from 'react';

import { ProductInterface } from '@root/shared/interfaces';
import useEditProductStore from './EditProductStore';

const EditProductModal = lazy(() => import('./EditProductModal'));

export default function EditProduct({ prod }: { prod: ProductInterface }) {
  // const [isloading, setIsLoading] = useState(false);
  const { editIsOpen, openEditModal, closeEditModal } = useEditProductStore();
  const MotionButton = motion(Button);

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {editIsOpen && (
          <EditProductModal prod={prod} closeModal={closeEditModal} />
        )}
      </AnimatePresence>

      <MotionButton
        onClick={() => openEditModal()}
        whileTap={{ scale: 0.9 }}
        colorScheme="orange"
        borderRadius="full"
        p="0"
      >
        <EditIcon />
      </MotionButton>
    </>
  );
}
