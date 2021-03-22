import React from 'react';
import { Box, Button, useTheme } from '@chakra-ui/react';
import { Filter } from 'react-feather';

const MonthFooter = () => {
  const theme = useTheme();

  return (
    <Box h="10%" d="flex" alignItems="center" justifyContent="space-evenly">
      <Button bgColor="red.100" pl="80px" pr="80px" borderRadius="30px" color="white">ADD</Button>
      <Box as="button" boxShadow="2px 2px 2px gray" borderColor="blue.100" border="2px solid" borderRadius="50%" bgColor="white" p="15px">
        <Filter color={theme.colors.blue['100']} size={25} />
      </Box>
    </Box>
  );
};

export default MonthFooter;
