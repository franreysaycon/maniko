import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Transaction = ({
  type, monthHalf, name, value,
}) => (
  <Box bgColor="white" borderRadius="15px" d="flex" flexDir="column" p="15px" h="fit-content">
    <Box d="flex" justifyContent="space-between">
      <Text fontSize="sm" color="blue.100" fontWeight="bold" textTransform="uppercase">{type}</Text>
      <Text fontSize="sm" color="violet.100" fontWeight="bold" textTransform="uppercase">{`after ${monthHalf}`}</Text>
    </Box>
    <Box d="flex" justifyContent="space-between">
      <Text textTransform="uppercase">{name}</Text>
      <Text color="red.100" fontWeight="bold" textTransform="uppercase">{`php ${value}`}</Text>
    </Box>
  </Box>
);

export default Transaction;
