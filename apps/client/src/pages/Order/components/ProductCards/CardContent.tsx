import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useRadioGroup
} from '@chakra-ui/react';
import { useState } from 'react';
import RadioCard from '../../../../components/RadioCard';
import parseToArray from '../../../../utils/ParseToArray';
import OrderHandle from '../OrderHandle';

//TODO: PropTypes -  type VariantProps = { productItem: any };

function CardContent({ productItem }: any) {
  //? Quantity State
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () =>
    setQuantity((state) => Math.min(state + 1, 10));
  const decrementQuantity = () =>
    setQuantity((state) => Math.max(state - 1, 1));

  //? Variant Selection
  const [selectedVariant, setSelectedVariant] = useState<string>();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'selectedVariant',
    onChange: (value) => setSelectedVariant(value)
  });
  const group = getRootProps();

  const parsedData = {
    productName: productItem.productName,
    brandName: productItem.brand,
    itemCodeId: parseToArray.toInt(productItem.item_code_ids),
    itemCode: parseToArray.toStr(productItem.item_codes),
    prices: parseToArray.toInt(productItem.prices),
    stocks: parseToArray.toInt(productItem.stockQuantities),
    variants: parseToArray.toStr(productItem.variants)
  };

  const isAvailable = (): boolean => {
    if (!selectedVariant) return false;
    const index = parsedData.variants.indexOf(selectedVariant);
    return parsedData.stocks[index] > 0;
  };

  return (
    <>
      <Card maxW="xs" variant="outline" p={4}>
        <Stack my="2">
          <Heading size="md">{parsedData.productName}</Heading>
          <Text size="xs">{parsedData.brandName}</Text>

          <Text fontSize="xs">Variants</Text>
          <HStack margin={0} {...group}>
            {parsedData.variants.map((value: string | number) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>

          <Flex alignItems="center" flexDirection="column">
            <Text fontSize="xs" ml="auto" mr={7}>
              Quantity
            </Text>
            <Box display="flex" alignItems="center" width="full">
              <Text color="green" fontSize="2xl" mr="auto">
                {selectedVariant
                  ? `₱${
                      parsedData.prices[
                        parsedData.variants.indexOf(selectedVariant)
                      ]
                    }`
                  : '₱0'}
              </Text>
              <Button
                isDisabled={quantity <= 1}
                onClick={() => decrementQuantity()}
                colorScheme="orange"
                size="xs"
              >
                -
              </Button>
              <Text px={2}>{quantity}</Text>
              <Button
                isDisabled={quantity >= 10}
                onClick={() => incrementQuantity()}
                colorScheme="orange"
                size="xs"
              >
                +
              </Button>
            </Box>
          </Flex>
        </Stack>

        <Divider />

        <OrderHandle
          isAvailable={isAvailable}
          selectedVariant={selectedVariant}
          itemData={parsedData}
          itemQuantity={quantity}
        />
      </Card>
    </>
  );
}

export default CardContent;
