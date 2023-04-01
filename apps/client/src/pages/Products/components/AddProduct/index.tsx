import { lazy } from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import useAddProductStore from '../../store/AddProductStore';

const AddProductModal = lazy(() => import('./AddProductModal'));

export default function AddProduct() {
  const { addIsOpen, openAddModal, closeAddModal } = useAddProductStore();
  const MotionButton = motion(Button);
  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {addIsOpen && <AddProductModal closeModal={closeAddModal} />}
      </AnimatePresence>

      <Stack direction="row">
        <MotionButton
          onClick={() => openAddModal()}
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
    </>
  );
}
