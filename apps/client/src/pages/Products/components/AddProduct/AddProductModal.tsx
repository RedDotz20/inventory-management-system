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
import { KeyboardEvent } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { insertProducts } from '../../../../api/products';
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
      queryClient.invalidateQueries(['productsTable', insertProducts]);
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

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    const keyCode = e.which || e.keyCode;
    const isLetterOrSpace =
      (keyCode >= 65 && keyCode <= 90) || // uppercase letters
      (keyCode >= 97 && keyCode <= 122) || // lowercase letters
      keyCode === 32; // space
    const isBackspace = keyCode === 8;
    // prevent special characters and numbers
    if (!isLetterOrSpace && !isBackspace) e.preventDefault();
  };

  return (
    <Backdrop onClick={closeModal}>
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
                    onChangeCapture={(e) => {
                      field.onChange(e);
                      trigger('productName');
                    }}
                    onKeyDown={onKeyPressHandler}
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
                    onKeyDown={onKeyPressHandler}
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
                    onKeyDown={onKeyPressHandler}
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
                    onKeyDown={onKeyPressHandler}
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
