import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const MonthStatistics = ({ after15thSalary, after30thSalary }) => (
  <Box h="20%" d="flex" flexDir="column" alignItems="stretch">
    <Text color="white">SUMMARY</Text>
    <Box d="flex" h="100%" flex="1">
      <Box flex="1" h="100%" bgColor="red.200" d="flex" alignItems="center" justifyContent="center" borderLeftRadius="15px">
        <Text color="white" fontSize="lg">{`PHP ${after15thSalary}`}</Text>
        <Text color="white" fontSize="lg">AFTER 30TH</Text>
      </Box>
      <Box flex="1" h="100%" bgColor="orange.100" d="flex" alignItems="center" justifyContent="center" borderRightRadius="15px">
        <Text color="white" fontSize="lg">{`PHP ${after30thSalary}`}</Text>
        <Text color="white" fontSize="lg">AFTER 15TH</Text>
      </Box>
    </Box>
  </Box>
);

export default MonthStatistics;
