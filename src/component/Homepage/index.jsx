import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import MonthHeader from './MonthHeader';
import MonthStatistics from './MonthStatistics';
import MonthTransactions from './MonthTransactions';
import MonthFooter from './MonthFooter';
import { useManikoStore } from '../ManikoProvider';

const Homepage = () => {
  const {
    month,
    year,
    original15th,
    original30th,
    after15thSalary,
    after30thSalary,
    transactions,
    trackIsReady,
    deleteTransaction,
  } = useManikoStore();

  useEffect(() => {
    if (!trackIsReady) {
      navigate('/create');
    }
  }, [trackIsReady]);

  if (!trackIsReady) {
    return <></>;
  }

  return (
    <Box h="100%" d="flex" flexDir="column">
      <MonthHeader month={month} year={year} />
      <MonthStatistics
        original15th={original15th}
        original30th={original30th}
        after15thSalary={after15thSalary}
        after30thSalary={after30thSalary}
      />
      <MonthTransactions transactions={transactions} deleteTransaction={deleteTransaction} />
      <MonthFooter />
    </Box>
  );
};

export default Homepage;
