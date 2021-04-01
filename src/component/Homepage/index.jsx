import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { navigate } from 'gatsby-link';
import MonthHeader from './MonthHeader';
import MonthStatistics from './MonthStatistics';
import MonthTransactions from './MonthTransactions';
import MonthFooter from './MonthFooter';
import { useManikoStore } from '../ManikoProvider';
import MonthTrack from './MonthTrack';

const Homepage = () => {
  const {
    track,
    trackIsReady,
    templateIsReady,
    deleteTransaction,
    createTransaction,
  } = useManikoStore();

  useEffect(() => {
    if (!templateIsReady) {
      navigate('/create');
    }
  }, [templateIsReady]);

  if (!templateIsReady) {
    return <></>;
  }

  if (!trackIsReady) {
    return <MonthTrack />;
  }

  return (
    <Box h="100%" d="flex" flexDir="column">
      <MonthHeader month={track.month} year={track.year} />
      <MonthStatistics
        original15th={track.original15th}
        original30th={track.original30th}
        after15thSalary={track.after15thSalary}
        after30thSalary={track.after30thSalary}
      />
      <MonthTransactions transactions={track.transactions} deleteTransaction={deleteTransaction} />
      <MonthFooter createTransaction={createTransaction} />
    </Box>
  );
};

export default Homepage;
