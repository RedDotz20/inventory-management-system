import { useState, lazy, Suspense } from 'react';
import { Stack, Button, Spinner } from '@chakra-ui/react';
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
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {addIsOpen && <AddProductModal closeModal={closeAddModal} />}
      </AnimatePresence>

      <Stack direction="row">
        <Suspense fallback={null}>
          <MotionButton
            onClick={() => handleClick()}
            whileTap={{ scale: 0.9 }}
            leftIcon={!isloading && <AddIcon />}
            colorScheme="orange"
            mt="auto"
            isDisabled={isloading}
          >
            {isloading ? <Spinner size="sm" mx={2} /> : 'Add'}
          </MotionButton>
        </Suspense>
      </Stack>
    </>
  );
}
