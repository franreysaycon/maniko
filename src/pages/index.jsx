import React from 'react';
import {
  Box, Button, Text, useTheme,
} from '@chakra-ui/react';
import { Filter } from 'react-feather';

const Homepage = () => {
  const theme = useTheme();
  return (
    <Box height="100%" display="flex" flexDir="column">
      <Box height="10%" display="flex" justifyContent="space-between" alignItems="center">
        <Text color="white" fontSize="xl">MARCH 2021</Text>
        <Button backgroundColor="red.100" paddingLeft="40px" paddingRight="40px" borderRadius="30px" color="white">FINISH</Button>
      </Box>
      <Box height="20%" display="flex" flexDir="column" alignItems="stretch">
        <Text color="white">SUMMARY</Text>
        <Box display="flex" height="100%" flex="1">
          <Box flex="1" height="100%" bgColor="red.200" display="flex" alignItems="center" justifyContent="center" borderLeftRadius="15px">
            <Text color="white" fontSize="lg">PHP 25,000</Text>
          </Box>
          <Box flex="1" height="100%" bgColor="orange.100" display="flex" alignItems="center" justifyContent="center" borderRightRadius="15px">
            <Text color="white" fontSize="lg">PHP 25,000</Text>
          </Box>
        </Box>
      </Box>
      <Box height="60%" display="flex" overflowY="scroll" pt="10px" flexDir="column">
        <Text color="white">RECENT TRANSACTIONS</Text>
        <Box bgColor="white" borderRadius="15px" display="flex" flexDir="column" padding="15px" height="fit-content">
          <Box display="flex" justifyContent="space-between">
            <Text fontSize="sm" color="blue.100" fontWeight="bold">CASH</Text>
            <Text fontSize="sm" color="violet.100" fontWeight="bold">AFTER 15TH</Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>LOREM IPSUM</Text>
            <Text color="red.100" fontWeight="bold">PHP 20,000</Text>
          </Box>
        </Box>
      </Box>
      <Box height="10%" display="flex" alignItems="center" justifyContent="space-evenly">
        <Button backgroundColor="red.100" paddingLeft="80px" paddingRight="80px" borderRadius="30px" color="white">ADD</Button>
        <Box as="button" boxShadow="2px 2px 2px gray" borderColor="blue.100" border="2px solid" borderRadius="50%" backgroundColor="white" p="15px"><Filter color={theme.colors.blue['100']} size={25} /></Box>
      </Box>
    </Box>
  );
};
export default Homepage;
