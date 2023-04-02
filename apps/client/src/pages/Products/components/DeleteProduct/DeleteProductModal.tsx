import { useMutation, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Heading, Button, Flex } from '@chakra-ui/react';
import { IoCloseSharp } from 'react-icons/io5';
import ProductsAPI from '../../../../api/products';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';

interface ModalProps {
  closeModal: () => void;
  productId: number;
  isOpen?: boolean;
}

function DeleteProductContent({ closeModal, productId }: ModalProps) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (id: number) => ProductsAPI.deleteProducts(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['productsTable']);
        closeModal();
      },
    }
  );

  const handleDelete = () => mutate(productId);
  const MotionButton = motion(Button);

  return (
    <>
      <IoCloseSharp
        className="absolute top-4 right-4 cursor-pointer"
        color="red"
        size={24}
        onClick={closeModal}
      />

      <Heading as="h3" size="md" mt="1.5rem">
        Are you sure you want to delete
      </Heading>

      <Flex gap="2" width="100%" mt="auto">
        <MotionButton
          width="100%"
          variant="outline"
          onClick={closeModal}
          colorScheme="orange"
          whileTap={{ scale: 0.9 }}
          disabled={isLoading}
        >
          CANCEL
        </MotionButton>

        <MotionButton
          width="100%"
          onClick={() => handleDelete}
          colorScheme="red"
          whileTap={{ scale: 0.9 }}
          disabled={isLoading}
        >
          DELETE
        </MotionButton>
      </Flex>
    </>
  );
}

function DeleteProductModal({ closeModal, productId }: ModalProps) {
  return (
    <Backdrop
      onClick={closeModal}
      style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
    >
      <Modal
        handleClose={closeModal}
        className="relative h-[12rem] w-[24rem] bg-white p-8 rounded-lg flex flex-col items-center justify-center"
      >
        <DeleteProductContent productId={productId} closeModal={closeModal} />
      </Modal>
    </Backdrop>
  );
}

export default DeleteProductModal;
