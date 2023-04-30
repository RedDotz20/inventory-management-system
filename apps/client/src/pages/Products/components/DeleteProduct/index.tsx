import { DeleteIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy, useState } from 'react';
import useDeleteProductStore from './DeleteProductStore';

const DeleteProductModal = lazy(() => import('./DeleteProductModal'));

function DeleteProduct({ productId }: { productId: number }) {
  const [isloading, setIsLoading] = useState(false);
  const { deleteIsOpen, openDeleteModal, closeDeleteModal } =
    useDeleteProductStore();
  const MotionButton = motion(Button);

  const handleClick = async () => {
    setIsLoading(true);
    await import('./DeleteProductModal');
    setIsLoading(false);
    openDeleteModal();
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {deleteIsOpen && (
          <Suspense>
            <DeleteProductModal
              productId={productId}
              closeModal={closeDeleteModal}
            />
          </Suspense>
        )}
      </AnimatePresence>

      <MotionButton
        onClick={() => handleClick()}
        whileTap={{ scale: 0.9 }}
        colorScheme="red"
        borderRadius="full"
        isLoading={isloading}
        p="0"
      >
        <DeleteIcon />
      </MotionButton>
    </>
  );
}

export default DeleteProduct;
