import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { PlusCircle } from 'react-feather';
import useScroll from '../../hooks/useScroll';
import Transaction from '../common/Transaction';

const AllotedTransactions = ({ transactions, deleteTransaction, openTransactionModal }) => {
  const [scrolling, setScrolling] = useScroll();
  return (
    <Box d="flex" minH="40%" h="100%" flexDir="column">
      <Box d="flex" justifyContent="space-between" alignItems="center" mb="15px">
        <Text color="white">ALLOTED TRANSACTIONS</Text>
        <PlusCircle color="white" size={20} onClick={openTransactionModal} />
      </Box>
      <Box
        h="100%"
        d="flex"
        mb="15px"
        overflowY="scroll"
        flexDir="column"
        css={{
          '> div': { marginBottom: '10px' },
          '> div:last-child': { marginBottom: '0px' },
        }}
        onScroll={() => setScrolling(true)}
      >
        {
        transactions && transactions.map(({
          id, type, schedule, name, value,
        }) => (
          <Transaction
            key={id}
            id={id}
            type={type}
            schedule={schedule}
            name={name}
            value={value}
            deleteTransaction={deleteTransaction}
            scrolling={scrolling}
          />
        ))
      }
      </Box>
    </Box>
  );
};

export default AllotedTransactions;
