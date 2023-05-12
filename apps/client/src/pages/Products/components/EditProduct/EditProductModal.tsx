import { Button } from '@chakra-ui/button';
import { FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup } from '@chakra-ui/input';
import { Flex, Heading } from '@chakra-ui/layout';
import { CloseButton } from '@chakra-ui/react';
import { Select } from '@chakra-ui/select';
import { ProductInterface } from '@root/shared/interfaces';
import { useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';
import { EditFieldInterface, InputProps, ModalProps } from './types';

function EditProductModal({ closeModal, prod }: ModalProps) {
  const queryClient = useQueryClient(),
    data = queryClient.getQueryData<ProductInterface>(['productsTable']);

  const {
    control,
    trigger,
    handleSubmit
    // TODO: Handle Error Response Messages
    // formState: { isValid, errors }
  } = useForm<EditFieldInterface>();

  const selectOptions = (column: string) => {
    const selections = Array.isArray(data) && data.map((prod) => prod[column]);
    return Array.from(new Set(selections || []));
  };

  const onSubmit: SubmitHandler<EditFieldInterface> = async (data) => {
    console.log(data);
  };

  const handleChange =
    (field: InputProps['field'], trigger: InputProps['trigger']) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      field.onChange(event.target.value);
      trigger(field.name);
    };

  const MotionButton = motion(Button);
  return (
    <Backdrop
      onClick={closeModal}
      className="absolute z-[20] top-0 bg-[#0000000f] left-0 h-screen w-screen flex items-center justify-center"
    >
      <Modal handleClose={closeModal} className="h-[32rem] w-[25rem]">
        <form
          className="flex flex-col h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CloseButton
            size="lg"
            color="red"
            className="absolute top-6 right-6"
            onClick={() => closeModal()}
          />

          <Heading as="h3" size="md" mb="4">
            EDIT PRODUCT
          </Heading>

          <Controller
            name="productName"
            control={control}
            rules={{ required: true }}
            defaultValue={prod.productName}
            render={({ field }) => {
              return (
                <InputGroup size="md" mb={4} className="flex flex-col">
                  <FormLabel htmlFor="productName">Product Name</FormLabel>
                  <Input
                    {...field}
                    onChange={handleChange(field, trigger)}
                    variant="filled"
                    id="productName"
                  />
                </InputGroup>
              );
            }}
          />

          <Controller
            name="brandName"
            control={control}
            rules={{ required: true }}
            defaultValue={prod.brandName}
            render={({ field }) => {
              return (
                <InputGroup size="md" mb={8} className="flex flex-col">
                  <FormLabel htmlFor="brandName">Brand Name</FormLabel>
                  <Input
                    {...field}
                    onChange={handleChange(field, trigger)}
                    variant="filled"
                    id="brandName"
                  />
                </InputGroup>
              );
            }}
          />

          <Controller
            name="categoryName"
            control={control}
            rules={{ required: true }}
            defaultValue={prod.categoryName}
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  onChange={handleChange(field, trigger)}
                  variant="filled"
                  size="md"
                  mb={4}
                  placeholder="Select Category"
                >
                  {selectOptions('categoryName').map((category, index) => {
                    return (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    );
                  })}
                  <option value="newCategory">New Category</option>
                </Select>
              );
            }}
          />

          <Controller
            name="unitName"
            control={control}
            rules={{ required: true }}
            defaultValue={prod.unitName}
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  onChange={handleChange(field, trigger)}
                  variant="filled"
                  size="md"
                  mb={4}
                  placeholder="Select Product Unit"
                >
                  {selectOptions('unitName').map((category, index) => {
                    return (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    );
                  })}
                  <option value="newUnit">New Product Unit</option>
                </Select>
              );
            }}
          />

          <Flex gap="2" width="100%" mt="auto">
            <MotionButton
              width="100%"
              variant="outline"
              onClick={closeModal}
              colorScheme="orange"
              whileTap={{ scale: 0.9 }}
              // disabled={isLoading}
            >
              CANCEL
            </MotionButton>

            <MotionButton
              width="100%"
              colorScheme="orange"
              whileTap={{ scale: 0.9 }}
              type="submit"
              // disabled={isLoading}
            >
              CONFIRM
            </MotionButton>
          </Flex>
        </form>
      </Modal>
    </Backdrop>
  );
}

export default EditProductModal;
