import { Button, CloseButton, Flex, Heading } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';

import { deleteProducts } from '../../../../api/products';
interface ModalProps {
  closeModal: () => void;
  productId: number;
  isOpen?: boolean;
}

function DeleteProductContent({ closeModal, productId }: ModalProps) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (id: number) => deleteProducts(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['productsTable']);
        closeModal();
      },
      onError: (error: unknown) => {
        console.error(error);
      }
    }
  );

  const handleDelete = () => mutate(productId);
  const MotionButton = motion(Button);

  return (
    <>
      <CloseButton
        size="md"
        color="red"
        className="absolute top-5 right-6"
        onClick={() => closeModal()}
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
          onClick={() => handleDelete()}
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
      className="absolute z-[20] top-0 bg-[#0000000f] left-0 h-screen w-screen flex items-center justify-center"
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
