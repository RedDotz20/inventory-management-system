import { DeleteIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy } from 'react';
import useDeleteProductStore from './DeleteProductStore';

const DeleteProductModal = lazy(() => import('./DeleteProductModal'));

function DeleteProduct({ productId }: { productId: number }) {
  const { deleteIsOpen, openDeleteModal, closeDeleteModal } =
    useDeleteProductStore();
  const MotionButton = motion(Button);
  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {deleteIsOpen && (
          <DeleteProductModal
            productId={productId}
            closeModal={closeDeleteModal}
          />
        )}
      </AnimatePresence>

      <MotionButton
        onClick={() => openDeleteModal()}
        whileTap={{ scale: 0.9 }}
        colorScheme="red"
        borderRadius="full"
        p="0"
      >
        <DeleteIcon />
      </MotionButton>
    </>
  );
}

export default DeleteProduct;
