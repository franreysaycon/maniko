import React from 'react';
import { Box, Button, useDisclosure, useTheme } from '@chakra-ui/react';
import { Filter } from 'react-feather';
import TransactionCreateModal from './TransactionCreateModal';

const MonthFooter = () => {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box h="10%" d="flex" alignItems="flex-end" justifyContent="space-evenly">
      <Button bgColor="red.100" pl="80px" pr="80px" borderRadius="30px" color="white" onClick={onOpen}>ADD</Button>
      <Box as="button" boxShadow="2px 2px 2px gray" borderColor="blue.100" border="2px solid" borderRadius="50%" bgColor="white" p="10px">
        <Filter color={theme.colors.blue['100']} size={20} />
      </Box>
      <TransactionCreateModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default MonthFooter;
