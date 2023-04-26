import { AddIcon } from '@chakra-ui/icons';
import { Button, Stack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useState } from 'react';
import useAddItemStore from '../../store/AddItemStore';

const AddItemModal = lazy(() => import('./AddItemModal'));

export default function AddItem() {
  const [isLoading, setIsLoading] = useState(false);
  const { addIsOpen, openAddModal, closeAddModal } = useAddItemStore();

  const handleClick = async () => {
    setIsLoading(true);
    await import('./AddItemModal');
    setIsLoading(false);
    openAddModal();
  };

  const MotionButton = motion(Button);
  return (
    <Stack direction="row">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {addIsOpen && (
          <Suspense>
            <AddItemModal closeModal={closeAddModal} />
          </Suspense>
        )}
      </AnimatePresence>

      <MotionButton
        onClick={() => handleClick()}
        whileTap={{ scale: 0.9 }}
        leftIcon={<AddIcon />}
        colorScheme="orange"
        isLoading={isLoading}
        mt="auto"
      >
        Add
      </MotionButton>
    </Stack>
  );
}
