import React from 'react';
import {
  Box, Button, useDisclosure, useTheme,
} from '@chakra-ui/react';
import { PieChart } from 'react-feather';
import TransactionCreateModal from '../common/TransactionCreateModal';
import StatisticsModal from './StatisticsModal';

const MonthFooter = ({ createTransaction }) => {
  const theme = useTheme();
  const transactionDisclosure = useDisclosure();
  const statisticsDisclosure = useDisclosure();

  return (
    <Box h="10%" d="flex" alignItems="flex-end" justifyContent="space-evenly">
      <Button outline="0" bgColor="red.100" pl="80px" pr="80px" borderRadius="30px" color="white" onClick={transactionDisclosure.onOpen}>ADD</Button>
      <Box outline="0" as="button" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" borderColor="blue.100" borderRadius="50%" bgColor="white" p="10px">
        <PieChart color={theme.colors.blue['100']} size={20} onClick={statisticsDisclosure.onOpen} />
      </Box>
      <TransactionCreateModal
        isOpen={transactionDisclosure.isOpen}
        onClose={transactionDisclosure.onClose}
        createTransaction={createTransaction}
      />
      <StatisticsModal
        isOpen={statisticsDisclosure.isOpen}
        onClose={statisticsDisclosure.onClose}
      />
    </Box>
  );
};

export default MonthFooter;
