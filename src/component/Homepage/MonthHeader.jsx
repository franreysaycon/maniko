import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const MonthHeader = ({ month, year }) => (
  <Box h="10%" d="flex" justifyContent="space-between" alignItems="center">
    <Text color="white" fontSize="xl">{`${month} ${year}`}</Text>
    <Button bgColor="red.100" pl="40px" pr="40px" borderRadius="30px" color="white">FINISH</Button>
  </Box>
);

export default MonthHeader;
