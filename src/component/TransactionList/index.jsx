import React, { useState } from 'react';
import {
  Box, Text, useDisclosure, useTheme,
} from '@chakra-ui/react';
import { Filter, PieChart } from 'react-feather';
import { useManikoStore } from '../ManikoProvider';
import NoTrack from './NoTrack';
import FilterModal from './FilterModal';
import Transaction from '../common/Transaction';
import StatisticsModal from '../common/StatisticsModal';

const TransactionList = () => {
  const theme = useTheme();
  const [typeFilter, setTypeFilter] = useState('all');
  const { track } = useManikoStore();
  const filterDisclosure = useDisclosure();
  const statisticsDisclosure = useDisclosure();
  const filteredTransactions = typeFilter === 'all' ? track.transactions : track.transactions.filter((trans) => trans.type === typeFilter);
  const totalExpense = filteredTransactions.reduce((acc, cur) => acc + +cur.value, 0);

  const onSubmit = (data) => {
    if (data.typeFilter !== typeFilter) {
      setTypeFilter(data.typeFilter);
    }
    filterDisclosure.onClose();
  };

  const reset = () => {
    setTypeFilter('all');
    filterDisclosure.onClose();
  };

  if (!track) {
    return <NoTrack />;
  }

  return (
    <>
      <Box h="100%" d="flex" flexDir="column">
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <Text color="white" fontSize="xl" textTransform="uppercase">Transactions</Text>
          <Box>
            <Box outline="0" as="button" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" borderColor="blue.100" borderRadius="50%" bgColor="white" p="10px">
              <Filter color={theme.colors.blue['100']} size={20} onClick={filterDisclosure.onOpen} />
            </Box>
            <Box ml="5px" outline="0" as="button" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" borderColor="blue.100" borderRadius="50%" bgColor="white" p="10px">
              <PieChart color={theme.colors.blue['100']} size={20} onClick={statisticsDisclosure.onOpen} />
            </Box>
          </Box>
        </Box>
        <Text color="white" fontSize="lg" mb="15px" textTransform="uppercase">{`Total Expense: PHP ${totalExpense}`}</Text>
        { typeFilter !== 'all' && <Text color="white" mb="15px" fontSize="xs" textTransform="uppercase">{`showing only ${typeFilter}`}</Text>}
        <Box
          h="100%"
          d="flex"
          flexDir="column"
          overflowY="scroll"
          css={{
            '> div': { marginBottom: '10px' },
            '> div:last-child': { marginBottom: '0px' },
          }}
        >
          {
            filteredTransactions.map((trans) => <Transaction {...trans} viewOnly />)
          }
        </Box>
      </Box>
      <FilterModal
        isOpen={filterDisclosure.isOpen}
        onClose={filterDisclosure.onClose}
        onSubmit={onSubmit}
        reset={reset}
      />
      <StatisticsModal
        isOpen={statisticsDisclosure.isOpen}
        onClose={statisticsDisclosure.onClose}
      />
    </>
  );
};

export default TransactionList;
