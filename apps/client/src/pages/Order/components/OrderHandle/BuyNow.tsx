import {
  Button,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Backdrop from '../../../../components/Backdrop';
import Modal from '../../../../components/Modal';

function BuyNow({ itemData, selectedVariant, itemQuantity, closeModal }: any) {
  const index = itemData.variants.indexOf(selectedVariant);
  const currentOrder = {
    productName: itemData.productName,
    brandName: itemData.brandName,
    variant: itemData.variants[index],
    itemCode: itemData.itemCode[index],
    price: itemData.prices[index],
    quantity: itemQuantity
  };

  const total = currentOrder.price * currentOrder.quantity;

  const handleBuyNowItem = () => {
    //TODO: handle buy now item API
    console.log(currentOrder);
    return currentOrder;
  };

  const MotionButton = motion(Button);

  return (
    <Backdrop
      onClick={closeModal}
      className="absolute z-[20] top-0 bg-[#0000009b] left-0 h-screen w-screen flex items-center justify-center"
    >
      <Modal handleClose={closeModal} className="h-[24rem] w-[25rem]">
        <CloseButton
          size="lg"
          color="red"
          className="absolute top-6 right-6"
          onClick={closeModal}
        />

        <Heading as="h3" size="md" mb="8">
          Order Summary
        </Heading>

        <Flex>
          <Heading as="h3" size="sm">
            Product Name
          </Heading>
          <Text ml="auto">{currentOrder.productName}</Text>
        </Flex>

        <Flex>
          <Heading as="h3" size="sm">
            Brand
          </Heading>
          <Text ml="auto">{currentOrder.brandName}</Text>
        </Flex>

        <Flex>
          <Heading as="h3" size="sm">
            Variant
          </Heading>
          <Text ml="auto">{`${currentOrder.variant} ( ${currentOrder.itemCode} )`}</Text>
        </Flex>

        <Divider my={4} />

        <Flex>
          <Heading as="h3" size="sm">
            Item Price
          </Heading>
          <Text fontWeight="bold" ml="auto">
            ₱ {currentOrder.price}
          </Text>
        </Flex>

        <Flex>
          <Heading as="h3" size="sm">
            Quantity
          </Heading>
          <Text fontWeight="bold" ml="auto">
            {currentOrder.quantity}
          </Text>
        </Flex>

        <Divider my={4} />

        <Flex>
          <Heading as="h2" size="md">
            TOTAL
          </Heading>
          <Heading as="h2" size="md" ml="auto">
            ₱ {total}
          </Heading>
        </Flex>

        <Flex gap="2" mt="auto">
          <MotionButton
            width="full"
            onClick={() => closeModal()}
            whileTap={{ scale: 0.9 }}
            variant="outline"
            colorScheme="orange"
          >
            CANCEL ORDER
          </MotionButton>
          <MotionButton
            width="full"
            onClick={() => handleBuyNowItem()}
            whileTap={{ scale: 0.9 }}
            colorScheme="orange"
            type="submit"
          >
            CONFIRM ORDER
          </MotionButton>
        </Flex>
      </Modal>
    </Backdrop>
  );
}

export default BuyNow;
