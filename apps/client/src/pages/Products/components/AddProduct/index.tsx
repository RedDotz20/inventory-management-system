import { useState, lazy, Suspense } from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import useAddProductStore from '../../store/AddProductStore';

const AddProductModal = lazy(() => import('./AddProductModal'));

export default function AddProduct() {
  const [isloading, setIsLoading] = useState(false);
  const { addIsOpen, openAddModal, closeAddModal } = useAddProductStore();
  const MotionButton = motion(Button);

  const handleClick = async () => {
    setIsLoading(true);
    await import('./AddProductModal');
    setIsLoading(false);
    openAddModal();
  };

  return (
    <>
      <Stack direction="row">
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {addIsOpen && (
            <Suspense>
              <AddProductModal closeModal={closeAddModal} />
            </Suspense>
          )}
        </AnimatePresence>
        <MotionButton
          onClick={() => handleClick()}
          whileTap={{ scale: 0.9 }}
          leftIcon={<AddIcon />}
          colorScheme="orange"
          isLoading={isloading}
          mt="auto"
        >
          Add
        </MotionButton>
      </Stack>
    </>
  );
}
