import { useQueryClient } from '@tanstack/react-query';
import { ProductInterface } from '@root/shared/interfaces';
import { motion } from 'framer-motion';
import {
  Flex,
  InputGroup,
  Input,
  Select,
  Heading,
  Button
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { IoCloseSharp } from 'react-icons/io5';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';

type ModalProps = { closeModal: () => void; isOpen?: boolean };

function AddProductModal({ closeModal }: ModalProps) {
  const queryClient = useQueryClient(),
    data = queryClient.getQueryData<ProductInterface>(['productsTable']);

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

        <InputGroup size="md" mb={8}>
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

        <Select
          variant="filled"
          size="md"
          mb={4}
          placeholder="Select Product Unit"
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
      </Modal>
    </Backdrop>
  );
}

export default AddProductModal;
