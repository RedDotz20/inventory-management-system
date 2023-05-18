import {
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text
} from '@chakra-ui/react';
import { BsFillBarChartFill, BsFillBoxFill } from 'react-icons/bs';
import { FaWrench } from 'react-icons/fa';
import { HiDocumentText, HiTemplate } from 'react-icons/hi';

export default function Dashboard() {
  return (
    <Flex direction="column" p={4}>
      <Stack py={4} mb={6} spacing={0}>
        <Text size="sm" color="white">
          home/dashboard
        </Text>
        <Heading as="h1" size="lg" color="white" mt="0">
          Dashboard
        </Heading>
      </Stack>

      <Heading as="h1" size="lg" mt={0} mb={4}>
        Sales Status
      </Heading>

      <Flex wrap="wrap">
        <Flex gap={4} mb={4}>
          <Stat
            border="4px solid"
            borderColor="border-black"
            borderRadius={8}
            p={2}
            maxWidth="250px"
            minWidth="250px"
            display="flex"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Icon as={BsFillBarChartFill} boxSize={12} mx={6} />
              <Flex flexDirection="column">
                <StatLabel>Today Sales</StatLabel>
                <StatNumber>₱72,350</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  23.36%
                </StatHelpText>
              </Flex>
            </Flex>
          </Stat>

          <Stat
            border="4px solid"
            borderColor="border-black"
            borderRadius={8}
            p={2}
            maxWidth="250px"
            minWidth="250px"
            display="flex"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Icon as={BsFillBarChartFill} boxSize={12} mx={6} />
              <Flex flexDirection="column">
                <StatLabel>Weekly Sales</StatLabel>
                <StatNumber>₱123,516</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  14.05%
                </StatHelpText>
              </Flex>
            </Flex>
          </Stat>

          <Stat
            border="4px solid"
            borderColor="border-black"
            borderRadius={8}
            p={2}
            maxWidth="250px"
            minWidth="250px"
            display="flex"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Icon as={BsFillBarChartFill} boxSize={12} mx={6} />
              <Flex flexDirection="column">
                <StatLabel>Monthly Sales</StatLabel>
                <StatNumber>₱376,540</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  8.12%
                </StatHelpText>
              </Flex>
            </Flex>
          </Stat>
        </Flex>
      </Flex>

      <Divider borderWidth="2px" borderColor="black" mb={2} maxWidth="780px" />

      <Heading as="h1" size="lg" mt={0} mb={4}>
        Inventory Status
      </Heading>

      <Flex>
        <Flex maxWidth="1028px" gap={4} wrap="wrap">
          <Stat
            border="4px solid"
            borderColor="border-black"
            borderRadius={8}
            p={2}
            minWidth="250px"
            maxWidth="250px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Flex alignItems="center">
              <Icon as={FaWrench} boxSize={10} mr={4} ml={0} />
              <Flex flexDirection="column">
                <StatLabel fontSize="lg" fontWeight={600}>
                  Registered Products
                </StatLabel>
                <StatNumber>28</StatNumber>
              </Flex>
            </Flex>
          </Stat>

          <Stat
            border="4px solid"
            borderColor="border-black"
            borderRadius={8}
            p={2}
            minWidth="250px"
            maxWidth="250px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Flex alignItems="center">
              <Icon as={HiTemplate} boxSize={12} mr={4} ml={0} />
              <Flex flexDirection="column">
                <StatLabel fontSize="lg" fontWeight={600}>
                  Registered items
                </StatLabel>
                <StatNumber>250</StatNumber>
              </Flex>
            </Flex>
          </Stat>

          <Stat
            border="4px solid"
            borderColor="border-black"
            borderRadius={8}
            p={2}
            minWidth="250px"
            maxWidth="250px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Flex alignItems="center">
              <Icon as={HiDocumentText} boxSize={12} mr={4} ml={0} />
              <Flex flexDirection="column">
                <StatLabel fontSize="lg" fontWeight={600}>
                  Purchased Orders
                </StatLabel>
                <StatNumber>54</StatNumber>
              </Flex>
            </Flex>
          </Stat>

          <Flex gap={4} flexWrap="wrap">
            <Stat
              border="4px solid"
              borderColor="border-black"
              borderRadius={8}
              p={2}
              minWidth="250px"
              maxWidth="250px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Flex alignItems="center">
                <Icon as={BsFillBoxFill} boxSize={12} mx={6} />
                <Flex flexDirection="column">
                  <StatLabel fontSize="lg" fontWeight={600}>
                    Available In Stock Items
                  </StatLabel>
                  <StatNumber>232</StatNumber>
                </Flex>
              </Flex>
            </Stat>

            <Stat
              border="4px solid"
              borderColor="border-black"
              borderRadius={8}
              p={2}
              minWidth="250px"
              maxWidth="250px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Flex alignItems="center">
                <Icon as={BsFillBoxFill} boxSize={12} mx={6} />
                <Flex flexDirection="column">
                  <StatLabel fontSize="lg" fontWeight={600}>
                    Low In Stock Items
                  </StatLabel>
                  <StatNumber>9</StatNumber>
                </Flex>
              </Flex>
            </Stat>
            <Stat
              border="4px solid"
              borderColor="border-black"
              borderRadius={8}
              p={2}
              minWidth="250px"
              maxWidth="250px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Flex alignItems="center">
                <Icon as={BsFillBoxFill} boxSize={12} mx={6} />
                <Flex flexDirection="column">
                  <StatLabel fontSize="lg" fontWeight={600}>
                    Out of Stock Items
                  </StatLabel>
                  <StatNumber>2</StatNumber>
                </Flex>
              </Flex>
            </Stat>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
