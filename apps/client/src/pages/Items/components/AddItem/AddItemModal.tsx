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
import { motion } from 'framer-motion';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';
import { useProductsQuery } from '../../../../hooks/useProductsQuery';

type ModalProps = { closeModal: () => void; isOpen?: boolean };

export default function AddItemModal({ closeModal }: ModalProps) {
  const { data = [] } = useProductsQuery();
  const productOptions = Array.from(new Set(data));

  // const [priceValue, setPriceValue] = useState('0.00'),
  //   parse = (val: string) => val.replace(/^\$/, ''),
  //   format = (val: string) => `₱${val}`;

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
          ADD ITEM
        </Heading>

        <Flex gap="2">
          <InputGroup size="md" mb={4} className="flex flex-col">
            <FormLabel htmlFor="item_code">Item Code</FormLabel>
            <Input variant="filled" id="item_code" type="text" />
          </InputGroup>

          <InputGroup size="md" mb={4} className="flex flex-col">
            <FormLabel htmlFor="variant">Variant</FormLabel>
            <Input variant="filled" id="variant" type="text" />
          </InputGroup>
        </Flex>

        <Select variant="filled" size="md" mb={4} placeholder="Select Category">
          {productOptions.map((product, index) => {
            return (
              <option key={index} value={product.categoryName}>
                {`${product.categoryName}`}
              </option>
            );
          })}
        </Select>

        <Select variant="filled" size="md" mb={4} placeholder="Select Brand">
          {productOptions.map((product, index) => {
            return (
              <option key={index} value={product.brand}>
                {`${product.brand}`}
              </option>
            );
          })}
        </Select>

        <Select variant="filled" size="md" mb={4} placeholder="Select Unit">
          {productOptions.map((product, index) => {
            return (
              <option key={index} value={product.unitName}>
                {`${product.unitName}`}
              </option>
            );
          })}
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
