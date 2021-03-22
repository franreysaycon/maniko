import React from 'react';
import { Box } from '@chakra-ui/react';
import MonthHeader from './MonthHeader';
import MonthStatistics from './MonthStatistics';
import MonthTransactions from './MonthTransactions';
import MonthFooter from './MonthFooter';

const data = {
  month: 'March',
  year: 2021,
  transactions: [{
    type: 'cash',
    monthHalf: '15th',
    name: 'Lorem Ipsum',
    value: 20000,
  },
  {
    type: 'credit',
    monthHalf: '30th',
    name: 'Lorem Ipsum',
    value: 10000,
  },
  {
    type: 'cash',
    monthHalf: '30th',
    name: 'Lorem Ipsum',
    value: 5000,
  },
  {
    type: 'credit',
    monthHalf: '15th',
    name: 'Lorem Ipsum',
    value: 1000,
  },
  {
    type: 'credit',
    monthHalf: '15th',
    name: 'Lorem Ipsum',
    value: 1000,
  },
  {
    type: 'credit',
    monthHalf: '15th',
    name: 'Lorem Ipsum',
    value: 1000,
  },
  {
    type: 'credit',
    monthHalf: '15th',
    name: 'Lorem Ipsum',
    value: 1000,
  }],
};

const Homepage = () => (
  <Box h="100%" d="flex" flexDir="column">
    <MonthHeader month={data.month} year={data.year} />
    <MonthStatistics after15thSalary={25000} after30thSalary={30000} />
    <MonthTransactions transactions={data.transactions} />
    <MonthFooter />
  </Box>
);

export default Homepage;
