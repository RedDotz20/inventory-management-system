import { Heading, Flex, Stack, Text } from '@chakra-ui/react';

export default function Stocks() {
  return (
    <Flex width="full" direction="column" p={4}>
      <Stack py={4} mb={6} spacing={0}>
        <Text size="sm" color="white">
          home/stocks
        </Text>
        <Heading as="h1" size="lg" color="white" mt="0">
          Stocks
        </Heading>
      </Stack>
    </Flex>
  );
}
