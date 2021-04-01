import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Transaction from '../common/Transaction';
import useScroll from '../../hooks/useScroll';

const MonthTransactions = ({ transactions, deleteTransaction }) => {
  const [scrolling, setScrolling] = useScroll();
  return (
    <Box
      h="60%"
      d="flex"
      pt="10px"
      flexDir="column"
    >
      <Text color="white">RECENT TRANSACTIONS</Text>
      <Box
        h="100%"
        d="flex"
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
export default MonthTransactions;
