import { useQueryClient } from '@tanstack/react-query';
import { Heading, Flex, Stack, Text } from '@chakra-ui/react';

function Order() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['productsTable']);
  console.log(data);

  return (
    <Flex width="full" direction="column" p={4}>
      <Stack py={4} mb={6} spacing={0}>
        <Text size="sm" color="white">
          home/orders
        </Text>
        <Heading as="h1" size="lg" color="white" mt="0">
          Orders
        </Heading>
      </Stack>
    </Flex>
  );
}

export default Order;
