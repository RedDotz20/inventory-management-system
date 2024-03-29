import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  CloseButton,
  Flex,
  FormLabel,
  Heading,
  Input,
  InputGroup
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { insertProducts } from '../../../../api/products';
import { stringOnlyInput } from '../../../../utils/stringOnlyInput';

import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';

type ModalProps = { closeModal: () => void; isOpen?: boolean };

interface AddProductinterface {
  productName: string;
  brandName: string;
  categoryName: string;
  unitName: string;
}

function AddProductModal({ closeModal }: ModalProps) {
  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors }
  } = useForm<AddProductinterface>();

  const queryClient = useQueryClient();
  const addProductMutation = useMutation(insertProducts, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['productsTable']);
      closeModal();
    },
    onError: (error: unknown) => {
      console.error(error);
    }
  });

  const onSubmit: SubmitHandler<AddProductinterface> = async (data) => {
    addProductMutation.mutateAsync(data);
  };

  const MotionButton = motion(Button);

  return (
    <Backdrop
      onClick={closeModal}
      className="absolute z-[20] top-0 bg-[#0000009b] left-0 h-screen w-screen flex items-center justify-center"
    >
      <Modal handleClose={closeModal} className="h-[32rem] w-[25rem]">
        <CloseButton
          size="lg"
          color="red"
          className="absolute top-6 right-6"
          onClick={() => closeModal()}
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full"
        >
          <Heading as="h3" size="md" mb="4">
            ADD PRODUCT
          </Heading>

          <Controller
            name="productName"
            defaultValue=""
            control={control}
            rules={{ required: true, pattern: /^[a-zA-Z]+$/i }}
            render={({ field }) => {
              const isRequired = errors.productName?.type === 'required';
              return (
                <InputGroup size="md" mb={2} className="flex flex-col">
                  <FormLabel htmlFor="productName">
                    Product Name
                    {isRequired && (
                      <span className="text-red-600 text-md"> *</span>
                    )}
                  </FormLabel>
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger('productName');
                    }}
                    onKeyDown={stringOnlyInput}
                    variant="filled"
                    id="productName"
                    type="text"
                  />

                  {}
                </InputGroup>
              );
            }}
          />

          <Controller
            name="brandName"
            defaultValue=""
            control={control}
            rules={{ required: true, pattern: /^[a-zA-Z]+$/i }}
            render={({ field }) => {
              const isRequired = errors.productName?.type === 'required';
              return (
                <InputGroup size="md" mb={2} className="flex flex-col">
                  <FormLabel htmlFor="brandName">
                    Brand Name
                    {isRequired && (
                      <span className="text-red-600 text-md"> *</span>
                    )}
                  </FormLabel>
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger('brandName');
                    }}
                    onKeyDown={stringOnlyInput}
                    variant="filled"
                    id="brandName"
                    type="text"
                  />
                </InputGroup>
              );
            }}
          />

          <Controller
            name="categoryName"
            defaultValue=""
            control={control}
            rules={{ required: true, pattern: /^[a-zA-Z]+$/i }}
            render={({ field }) => {
              const isRequired = errors.categoryName?.type === 'required';
              return (
                <InputGroup size="md" mb={2} className="flex flex-col">
                  <FormLabel htmlFor="categoryName">
                    Category Name
                    {isRequired && (
                      <span className="text-red-600 text-md"> *</span>
                    )}
                  </FormLabel>
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger('categoryName');
                    }}
                    onKeyDown={stringOnlyInput}
                    variant="filled"
                    id="categoryName"
                    type="text"
                  />
                </InputGroup>
              );
            }}
          />

          <Controller
            name="unitName"
            defaultValue=""
            control={control}
            rules={{ required: true, pattern: /^[a-zA-Z]+$/i }}
            render={({ field }) => {
              const isRequired = errors.unitName?.type === 'required';
              return (
                <InputGroup size="md" mb={2} className="flex flex-col">
                  <FormLabel htmlFor="unitName">
                    Unit Name
                    {isRequired && (
                      <span className="text-red-600 text-md"> *</span>
                    )}
                  </FormLabel>
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger('unitName');
                    }}
                    onKeyDown={stringOnlyInput}
                    variant="filled"
                    id="unitName"
                    type="text"
                  />
                </InputGroup>
              );
            }}
          />

          <Flex gap="2" mt="auto">
            <MotionButton
              width="full"
              onClick={() => closeModal()}
              whileTap={{ scale: 0.9 }}
              variant="outline"
              colorScheme="orange"
            >
              CANCEL
            </MotionButton>
            <MotionButton
              width="full"
              whileTap={{ scale: 0.9 }}
              leftIcon={<AddIcon />}
              colorScheme="orange"
              type="submit"
            >
              ADD
            </MotionButton>
          </Flex>
        </form>
      </Modal>
    </Backdrop>
  );
}

export default AddProductModal;
