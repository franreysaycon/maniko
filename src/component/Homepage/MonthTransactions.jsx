import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Transaction from './Transaction';

const MonthTransactions = ({ transactions }) => (
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
    >
      {
        transactions && transactions.map(({
          type, monthHalf, name, value,
        }) => (
          <Transaction type={type} monthHalf={monthHalf} name={name} value={value} />
        ))
    }
    </Box>
  </Box>
);

export default MonthTransactions;
