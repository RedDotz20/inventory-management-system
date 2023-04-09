import { lazy } from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import useAddItemStore from '../../store/AddItemStore';

const AddItemModal = lazy(() => import('./AddItemModal'));

export default function AddItem() {
  const { addIsOpen, openAddModal, closeAddModal } = useAddItemStore();
  const MotionButton = motion(Button);
  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {addIsOpen && <AddItemModal closeModal={closeAddModal} />}
      </AnimatePresence>

      <Stack direction="row">
        <MotionButton
          onClick={() => openAddModal()}
          whileTap={{ scale: 0.9 }}
          leftIcon={<AddIcon />}
          colorScheme="orange"
          mt="auto"
        >
          Add
        </MotionButton>
      </Stack>
    </>
  );
}
