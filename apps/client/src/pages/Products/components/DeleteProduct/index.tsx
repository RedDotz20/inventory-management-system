import { lazy } from 'react';
import { Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import useDeleteProductStore from '../../store/DeleteProductStore';

const DeleteProductModal = lazy(() => import('./DeleteProductModal'));

export default function AddProduct() {
  const { deleteIsOpen, openDeleteModal, closeDeleteModal } =
    useDeleteProductStore();
  const MotionButton = motion(Button);
  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {deleteIsOpen && <DeleteProductModal closeModal={closeDeleteModal} />}
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
