import React from 'react';
import {
  Box, Button, Text, useTheme,
} from '@chakra-ui/react';
import { Filter } from 'react-feather';

const Homepage = () => {
  const theme = useTheme();
  return (
    <Box h="100%" d="flex" flexDir="column">
      <Box h="10%" d="flex" justifyContent="space-between" alignItems="center">
        <Text color="white" fontSize="xl">MARCH 2021</Text>
        <Button bgColor="red.100" pl="40px" pr="40px" borderRadius="30px" color="white">FINISH</Button>
      </Box>
      <Box h="20%" d="flex" flexDir="column" alignItems="stretch">
        <Text color="white">SUMMARY</Text>
        <Box d="flex" h="100%" flex="1">
          <Box flex="1" h="100%" bgColor="red.200" d="flex" alignItems="center" justifyContent="center" borderLeftRadius="15px">
            <Text color="white" fontSize="lg">PHP 25,000</Text>
          </Box>
          <Box flex="1" h="100%" bgColor="orange.100" d="flex" alignItems="center" justifyContent="center" borderRightRadius="15px">
            <Text color="white" fontSize="lg">PHP 25,000</Text>
          </Box>
        </Box>
      </Box>
      <Box h="60%" d="flex" overflowY="scroll" pt="10px" flexDir="column">
        <Text color="white">RECENT TRANSACTIONS</Text>
        <Box bgColor="white" borderRadius="15px" d="flex" flexDir="column" p="15px" h="fit-content">
          <Box d="flex" justifyContent="space-between">
            <Text fontSize="sm" color="blue.100" fontWeight="bold">CASH</Text>
            <Text fontSize="sm" color="violet.100" fontWeight="bold">AFTER 15TH</Text>
          </Box>
          <Box d="flex" justifyContent="space-between">
            <Text>LOREM IPSUM</Text>
            <Text color="red.100" fontWeight="bold">PHP 20,000</Text>
          </Box>
        </Box>
      </Box>
      <Box h="10%" d="flex" alignItems="center" justifyContent="space-evenly">
        <Button bgColor="red.100" pl="80px" pr="80px" borderRadius="30px" color="white">ADD</Button>
        <Box as="button" boxShadow="2px 2px 2px gray" borderColor="blue.100" border="2px solid" borderRadius="50%" bgColor="white" p="15px">
          <Filter color={theme.colors.blue['100']} size={25} />
        </Box>
      </Box>
    </Box>
  );
};
export default Homepage;
