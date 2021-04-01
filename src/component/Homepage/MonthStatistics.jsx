import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const MonthStatistics = ({
  original15th, original30th, after15thSalary, after30thSalary,
}) => (
  <Box h="20%" d="flex" flexDir="column" alignItems="stretch">
    <Text color="white">SUMMARY</Text>
    <Box d="flex" h="100%" flex="1">
      <Box pos="relative" flex="1" h="100%" bgColor="red.200" d="flex" alignItems="center" justifyContent="center" borderLeftRadius="15px" flexDir="column" lineHeight="1">
        <Text color="white" fontSize="xs" pos="absolute" top="10px" left="10px">
          {`PHP ${original30th}`}
        </Text>
        <Text color="white" fontSize="xl" fontWeight="bold" mt="20px">{`PHP ${after30thSalary}`}</Text>
        <Text color="white" fontSize="xs" mb="10px">AFTER 30TH</Text>
      </Box>
      <Box pos="relative" flex="1" h="100%" bgColor="orange.100" d="flex" alignItems="center" justifyContent="center" borderRightRadius="15px" flexDir="column" lineHeight="1">
        <Text color="white" fontSize="xs" pos="absolute" top="10px" left="10px">
          {`PHP ${original15th}`}
        </Text>
        <Text color="white" fontSize="xl" fontWeight="bold" mt="20px">{`PHP ${after15thSalary}`}</Text>
        <Text color="white" fontSize="xs" mb="10px">AFTER 15TH</Text>
      </Box>
    </Box>
  </Box>
);

export default MonthStatistics;
