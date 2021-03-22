import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Transaction from './Transaction';

const MonthTransactions = ({ transactions }) => (
  <Box h="60%" d="flex" overflowY="scroll" pt="10px" flexDir="column">
    <Text color="white">RECENT TRANSACTIONS</Text>
    {
        transactions && transactions.map(({
          type, monthHalf, name, value,
        }) => (
          <Transaction type={type} monthHalf={monthHalf} name={name} value={value} />
        ))
    }
  </Box>
);

export default MonthTransactions;
