import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import MonthHeader from './MonthHeader';
import MonthStatistics from './MonthStatistics';
import MonthTransactions from './MonthTransactions';
import MonthFooter from './MonthFooter';
import { useManikoStore } from '../ManikoProvider';
import { navigate } from 'gatsby';

const Homepage = () => {
  const { month, year, after15thSalary, after30thSalary, transactions } = useManikoStore()

  useEffect(() => {
    if(!month && !year){
      navigate('/create')
    }
  }, [month, year])

  if(!month && !year){
    return <></>
  }

  return (
    <Box h="100%" d="flex" flexDir="column">
      <MonthHeader month={month} year={year}/>
      <MonthStatistics after15thSalary={after15thSalary} after30thSalary={after30thSalary} />
      <MonthTransactions transactions={transactions} />
      <MonthFooter />
    </Box>
  );
}

export default Homepage;
