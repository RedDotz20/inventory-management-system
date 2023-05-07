import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  CloseButton,
  Flex,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Select
} from '@chakra-ui/react';
import { ProductInterface } from '@root/shared/interfaces';
import { useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
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
  const queryClient = useQueryClient(),
    data = queryClient.getQueryData<ProductInterface>(['productsTable']);

  const {
    control,
    trigger,
    handleSubmit
    // TODO: Handle Error Response Messages
    // formState: { isValid, errors }
  } = useForm<AddProductinterface>();

  const onSubmit: SubmitHandler<AddProductinterface> = async (data) => {
    //TODO: handle POST request
    console.table(data);
  };

  // const [priceValue, setPriceValue] = useState('0.00'),
  //   parse = (val: string) => val.replace(/^\$/, ''),
  //   format = (val: string) => `₱${val}`;

  const selectOptions = (column: string) => {
    const selections = Array.isArray(data) && data.map((prod) => prod[column]);
    return Array.from(new Set(selections || []));
  };

  const MotionButton = motion(Button);

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
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <InputGroup size="md" mb={4} className="flex flex-col">
                  <FormLabel htmlFor="productName">Product Name</FormLabel>
                  <Input
                    {...field}
                    onChangeCapture={(e) => {
                      field.onChange(e);
                      trigger('productName');
                    }}
                    variant="filled"
                    id="productName"
                    type="text"
                  />
                </InputGroup>
              );
            }}
          />

          <Controller
            name="brandName"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <InputGroup size="md" mb={8} className="flex flex-col">
                  <FormLabel htmlFor="brandName">Brand Name</FormLabel>
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger('brandName');
                    }}
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
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger('categoryName');
                  }}
                  variant="filled"
                  size="md"
                  mb={4}
                  placeholder="Select Category"
                  id="categoryName"
                >
                  {selectOptions('categoryName').map((category, index) => {
                    return (
                      <option key={index} value={category}>
                        {`${index + 1}. ${category}`}
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
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger('unitName');
                  }}
                  variant="filled"
                  size="md"
                  mb={4}
                  placeholder="Select Product Unit"
                  id="unitName"
                >
                  {selectOptions('unitName').map((category, index) => {
                    return (
                      <option key={index} value={category}>
                        {`${index + 1}. ${category}`}
                      </option>
                    );
                  })}
                  <option value="newUnit">New Product Unit</option>
                </Select>
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
