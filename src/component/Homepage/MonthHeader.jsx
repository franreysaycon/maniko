import React from 'react';
import {
  Box, Button, Text, useDisclosure,
} from '@chakra-ui/react';
import FinishModal from './FinishModal';
import { useManikoStore } from '../ManikoProvider';

const MonthHeader = ({ month, year }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteTrack } = useManikoStore();

  const handleFinish = () => {
    deleteTrack();
  };

  return (
    <>
      <Box h="10%" d="flex" justifyContent="space-between" alignItems="center">
        <Text color="white" fontSize="xl">{`${month} ${year}`}</Text>
        <Button bgColor="red.100" pl="40px" pr="40px" borderRadius="30px" color="white" onClick={onOpen}>FINISH</Button>
      </Box>
      <FinishModal isOpen={isOpen} onSubmit={handleFinish} onClose={onClose} />
    </>
  );
};

export default MonthHeader;
