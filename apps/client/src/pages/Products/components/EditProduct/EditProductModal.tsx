import { Button } from '@chakra-ui/button';
import { FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup } from '@chakra-ui/input';
import { Flex, Heading } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { ProductInterface } from '@root/shared/interfaces';
import { useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';

interface ModalProps {
  closeModal: () => void;
  prod: ProductInterface;
}

function EditProductModal({ closeModal, prod }: ModalProps) {
  const queryClient = useQueryClient(),
    data = queryClient.getQueryData<ProductInterface>(['productsTable']);

  const selectOptions = (column: string) => {
    const selections = Array.isArray(data) && data.map((prod) => prod[column]);
    return Array.from(new Set(selections || []));
  };

  const MotionButton = motion(Button);
  return (
    <Backdrop onClick={closeModal}>
      <Modal handleClose={closeModal} className="h-[32rem] w-[25rem]">
        <IoCloseSharp
          className="absolute cursor-pointer top-4 right-4"
          color="red"
          size={24}
          onClick={closeModal}
        />

        <Heading as="h3" size="md" mb="4">
          EDIT PRODUCT
        </Heading>

        <InputGroup size="md" mb={4} className="flex flex-col">
          <FormLabel htmlFor="productName">Product Name</FormLabel>
          <Input
            variant="filled"
            id="productName"
            type="text"
            defaultValue={prod.productName}
          />
        </InputGroup>

        <InputGroup size="md" mb={8} className="flex flex-col">
          <FormLabel htmlFor="brandName">Brand Name</FormLabel>
          <Input
            variant="filled"
            id="brandName"
            type="text"
            defaultValue={prod.brand}
          />
        </InputGroup>

        <Select
          variant="filled"
          size="md"
          mb={4}
          placeholder="Select Category"
          defaultValue={prod.categoryName}
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

        <Select
          variant="filled"
          size="md"
          mb={4}
          placeholder="Select Product Unit"
          defaultValue={prod.unitName}
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
            // onClick={() => handleDelete}
            // disabled={isLoading}
          >
            CONFIRM
          </MotionButton>
        </Flex>
      </Modal>
    </Backdrop>
  );
}

export default EditProductModal;
