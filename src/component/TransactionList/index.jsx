import React, { useState } from 'react';
import {
  Box, Text, useDisclosure, useTheme,
} from '@chakra-ui/react';
import { Filter } from 'react-feather';
import { useManikoStore } from '../ManikoProvider';
import NoTrack from './NoTrack';
import FilterModal from './FilterModal';
import Transaction from '../common/Transaction';

const TransactionList = () => {
  const theme = useTheme();
  const [typeFilter, setTypeFilter] = useState('all');
  const { track } = useManikoStore();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const filteredTransactions = typeFilter === 'all' ? track.transactions : track.transactions.filter((trans) => trans.type === typeFilter);
  const totalExpense = filteredTransactions.reduce((acc, cur) => acc + +cur.value, 0);

  const onSubmit = (data) => {
    if (data.typeFilter !== typeFilter) {
      setTypeFilter(data.typeFilter);
    }
    onClose();
  };

  if (!track) {
    return <NoTrack />;
  }

  return (
    <>
      <Box h="100%" d="flex" flexDir="column">
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <Text color="white" fontSize="xl" textTransform="uppercase">Transactions</Text>
          <Box outline="0" as="button" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" borderColor="blue.100" borderRadius="50%" bgColor="white" p="10px">
            <Filter color={theme.colors.blue['100']} size={20} onClick={onOpen} />
          </Box>
        </Box>
        <Text color="white" fontSize="lg" mb="15px" textTransform="uppercase">{`Total Expense: PHP ${totalExpense}`}</Text>
        { typeFilter !== 'all' && <Text color="white" mb="15px" fontSize="xs" textTransform="uppercase">{`showing only ${typeFilter}`}</Text>}
        <Box
          h="100%"
          d="flex"
          flexDir="column"
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
      <FilterModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
    </>
  );
};

export default TransactionList;
