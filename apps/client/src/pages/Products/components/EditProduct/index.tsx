import { Button } from '@chakra-ui/button';
import { EditIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy, useState } from 'react';

import { ProductInterface } from '@root/shared/interfaces';
import useEditProductStore from './EditProductStore';

const EditProductModal = lazy(() => import('./EditProductModal'));

export default function EditProduct({ prod }: { prod: ProductInterface }) {
  const [isloading, setIsLoading] = useState(false);
  const { editIsOpen, openEditModal, closeEditModal } = useEditProductStore();
  const MotionButton = motion(Button);

  const handleClick = async () => {
    setIsLoading(true);
    await import('./EditProductModal');
    setIsLoading(false);
    openEditModal();
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {editIsOpen && (
          <Suspense>
            <EditProductModal prod={prod} closeModal={closeEditModal} />
          </Suspense>
        )}
      </AnimatePresence>

      <MotionButton
        onClick={() => handleClick()}
        whileTap={{ scale: 0.9 }}
        colorScheme="orange"
        borderRadius="full"
        isLoading={isloading}
        p="0"
      >
        <EditIcon />
      </MotionButton>
    </>
  );
}
