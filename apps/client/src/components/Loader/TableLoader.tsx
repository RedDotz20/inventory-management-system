import { Spinner, Th, Thead, Tr, Flex, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fadeInOut } from './variants';

function TableLoader() {
  const MotionFlex = motion(Flex);
  return (
    <Thead>
      <Tr>
        <Th
          colSpan={8}
          width="100%"
          textAlign="center"
          verticalAlign="middle"
          height="100px"
        >
          <MotionFlex
            justify="center"
            align="center"
            initial={{ opacity: 0 }}
            variants={fadeInOut}
            animate="animate"
            exit="exit"
          >
            <Spinner
              thickness="3.5px"
              speed="0.6s"
              emptyColor="gray.200"
              color="orange"
              size="md"
              mr={4}
            />
            <Heading as="h2" size="md">
              Loading ...
            </Heading>
          </MotionFlex>
        </Th>
      </Tr>
    </Thead>
  );
}

export default TableLoader;
