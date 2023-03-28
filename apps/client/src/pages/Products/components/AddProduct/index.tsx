import { lazy, Suspense } from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import useAddModalStore from '../../store/AddProductStore';

const AddProductModal = lazy(() => import('./AddProductModal'));

export default function AddProduct() {
  const { isOpen, openModal, closeModal } = useAddModalStore();
  const MotionButton = motion(Button);
  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isOpen && <AddProductModal closeModal={closeModal} />}
      </AnimatePresence>

      <Suspense fallback={<div className="absolute">Loading...</div>}>
        <Stack direction="row">
          <MotionButton
            onClick={() => openModal()}
            whileTap={{ scale: 0.9 }}
            leftIcon={<AddIcon />}
            colorScheme="orange"
            mt="auto"
            mb={4}
            mx={4}
          >
            Add
          </MotionButton>
        </Stack>
      </Suspense>
    </>
  );
}
