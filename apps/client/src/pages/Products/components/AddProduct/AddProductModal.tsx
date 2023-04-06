import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  Flex,
  InputGroup,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
  Button
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { IoCloseSharp } from 'react-icons/io5';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';
import { ProductInterface } from '@root/shared/interfaces';
import { motion } from 'framer-motion';

type ModalProps = { closeModal: () => void; isOpen?: boolean };

function AddProductContent({ closeModal }: ModalProps) {
  const queryClient = useQueryClient(),
    data = queryClient.getQueryData<ProductInterface>(['productsTable']);

  const [priceValue, setPriceValue] = useState('0.00'),
    parse = (val: string) => val.replace(/^\$/, ''),
    format = (val: string) => `₱${val}`;

  const selectOptions = (column: string) => {
    const selections = Array.isArray(data) && data.map((prod) => prod[column]);
    return Array.from(new Set(selections || []));
  };

  const MotionButton = motion(Button);

  return (
    <>
      <IoCloseSharp
        className="absolute top-8 right-8 cursor-pointer"
        color="red"
        size={25}
        onClick={closeModal}
      />

      <Heading as="h3" size="md" mb="4">
        ADD PRODUCT
      </Heading>

      <InputGroup size="md" mb={4}>
        <label className="w-full">
          Product Name
          <Input variant="filled" id="productName" type="text" />
        </label>
      </InputGroup>

      <InputGroup size="md" mb={4}>
        <label className="w-full">
          Brand Name
          <Input variant="filled" id="brandName" type="text" />
        </label>
      </InputGroup>

      <Select variant="filled" size="md" mb={4} placeholder="Select Category">
        {selectOptions('categoryName').map((category, index) => {
          return (
            <option key={index} value={category}>
              {`${index + 1}. ${category}`}
            </option>
          );
        })}
        <option value="newCategory">New Category</option>
      </Select>

      <Select size="md" mb={4} placeholder="Select Product Unit">
        {selectOptions('unitName').map((category, index) => {
          return (
            <option key={index} value={category}>
              {`${index + 1}. ${category}`}
            </option>
          );
        })}
        <option value="newUnit">New Product Unit</option>
      </Select>

      <Flex gap={8} justifyContent="flex-start" maxWidth="100%">
        <label>
          Item Code
          <NumberInput variant="filled">
            <NumberInputField placeholder="Item Code" />
          </NumberInput>
        </label>

        <label>
          Price
          <NumberInput
            variant="filled"
            value={format(priceValue)}
            onChange={(valueString) => setPriceValue(parse(valueString))}
            precision={2}
            step={0.1}
            placeholder="Select Category"
          >
            <NumberInputField placeholder="Price" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </label>
      </Flex>

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
        >
          ADD
        </MotionButton>
      </Flex>
    </>
  );
}

function AddProductModal({ closeModal, isOpen }: ModalProps) {
  return (
    <Backdrop
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={closeModal}
    >
      <Modal
        handleClose={closeModal}
        className="relative last:h-[32rem] w-[25rem] bg-white p-8 mx-8 rounded-lg flex flex-col "
      >
        <AddProductContent closeModal={closeModal} />
      </Modal>
    </Backdrop>
  );
}

export default AddProductModal;
