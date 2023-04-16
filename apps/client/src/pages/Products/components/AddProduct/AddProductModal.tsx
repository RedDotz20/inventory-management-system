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
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';

type ModalProps = { closeModal: () => void; isOpen?: boolean };

function AddProductModal({ closeModal }: ModalProps) {
  const queryClient = useQueryClient(),
    data = queryClient.getQueryData<ProductInterface>(['productsTable']);

  // console.log(data);

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
          onClick={closeModal}
        />

        <Heading as="h3" size="md" mb="4">
          ADD PRODUCT
        </Heading>

        <InputGroup size="md" mb={4} className="flex flex-col">
          <FormLabel htmlFor="productName">Product Name</FormLabel>
          <Input variant="filled" id="productName" type="text" />
        </InputGroup>

        <InputGroup size="md" mb={8} className="flex flex-col">
          <FormLabel htmlFor="brandName">Brand Name</FormLabel>
          <Input variant="filled" id="brandName" type="text" />
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
