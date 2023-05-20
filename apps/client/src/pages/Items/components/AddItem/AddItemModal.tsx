import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  CloseButton,
  Flex,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { insertItems } from '../../../../api/items';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';
import { useProductsQuery } from '../../../../hooks/useProductsQuery';

type ModalProps = { closeModal: () => void; isOpen?: boolean };

interface AddItemInterface {
  item_code: string;
  variant: string;
  price: string;
  productName: string;
  brandName: string;
}

export default function AddItemModal({ closeModal }: ModalProps) {
  const { data = [] } = useProductsQuery();

  const products = data.map((data) => {
    return data.productName;
  });
  const brands = data.map((data) => {
    return data.brandName;
  });

  const queryClient = useQueryClient();
  const addItemMutation = useMutation(insertItems, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['itemsTable']);
      closeModal();
    },
    onError: (error: unknown) => {
      console.error(error);
    }
  });

  const productOptions = Array.from(new Set(data));

  const {
    control,
    trigger,
    handleSubmit
    // formState: { errors }
  } = useForm<AddItemInterface>();

  const onSubmit: SubmitHandler<AddItemInterface> = async (data) => {
    addItemMutation.mutateAsync(data);
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
          onClick={closeModal}
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full"
        >
          <Heading as="h3" size="md" mb="4">
            ADD ITEM
          </Heading>

          <Flex gap="2">
            <Controller
              name="item_code"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[a-zA-Z]+$/i }}
              render={({ field }) => {
                return (
                  <InputGroup size="md" mb={4} className="flex flex-col">
                    <FormLabel htmlFor="item_code">Item Code</FormLabel>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        trigger('item_code');
                      }}
                      variant="filled"
                      id="item_code"
                      type="text"
                    />
                  </InputGroup>
                );
              }}
            />

            <Controller
              name="variant"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[a-zA-Z#]+$/i }}
              render={({ field }) => {
                return (
                  <InputGroup size="md" mb={4} className="flex flex-col">
                    <FormLabel htmlFor="variant">Variant</FormLabel>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        trigger('variant');
                      }}
                      variant="filled"
                      id="variant"
                      type="text"
                    />
                  </InputGroup>
                );
              }}
            />
          </Flex>

          <Controller
            name="price"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <Flex gap="2" alignItems="center" mb={4}>
                  <FormLabel pt={2} pl={2} htmlFor="price">
                    Price
                  </FormLabel>
                  <NumberInput
                    onChange={(value) => {
                      field.onChange(value);
                      trigger('price');
                    }}
                    variant="filled"
                    id="price"
                    defaultValue={0.0}
                    min={0}
                    step={0.01}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
              );
            }}
          />

          <Controller
            name="productName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  onChange={(value) => {
                    field.onChange(value);
                    trigger('productName');
                  }}
                  variant="filled"
                  size="md"
                  mb={4}
                  placeholder="Select Product"
                >
                  {productOptions.map((product, index) => {
                    return (
                      <option key={index} value={product.productName}>
                        {product.productName}
                      </option>
                    );
                  })}
                </Select>
              );
            }}
          />

          <Controller
            name="brandName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  onChange={(value) => {
                    field.onChange(value);
                    trigger('brandName');
                  }}
                  variant="filled"
                  size="md"
                  mb={4}
                  placeholder="Select Brand"
                >
                  {productOptions.map((product, index) => {
                    return (
                      <option key={index} value={product.brandName}>
                        {product.brandName}
                      </option>
                    );
                  })}
                </Select>
              );
            }}
          />

          <Flex mt="auto" gap="2">
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
