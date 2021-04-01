import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box, Button, FormControl, FormLabel, Input, Select, Text,
} from '@chakra-ui/react';
import months from 'months';
import { useManikoStore } from '../ManikoProvider';

const MonthTrack = () => {
  const {
    register, handleSubmit,
  } = useForm();
  const { createTrack } = useManikoStore();
  const today = new Date();
  const submitTrack = (data) => {
    createTrack(data.month, data.year);
  };

  return (
    <Box d="flex" flexDir="column" alignItems="flex-start" justifyContent="center">
      <Text color="white" fontSize="xl" mb="15px" textTransform="uppercase">Choose Month of Year</Text>
      <Box d="flex" flex="1" mb="15px">
        <FormControl h="fit-content">
          <FormLabel textTransform="uppercase" color="white">Month</FormLabel>
          <Select bgColor="white" name="month" ref={register({ required: true })}>
            {
                months.map((month) => <option key={month}>{month}</option>)
            }
          </Select>
        </FormControl>
      </Box>
      <Box d="flex" flex="1" mb="50px">
        <FormControl h="fit-content">
          <FormLabel textTransform="uppercase" color="white">Year</FormLabel>
          <Input type="number" name="year" bgColor="white" ref={register({ required: true })} value={today.getFullYear()} contentEditable={false} />
        </FormControl>
      </Box>
      <Button
        textTransform="uppercase"
        outline="0"
        bgColor="red.100"
        pl="80px"
        pr="80px"
        borderRadius="30px"
        color="white"
        alignSelf="center"
        onClick={handleSubmit(submitTrack)}
      >
        Start New Track
      </Button>
    </Box>
  );
};

export default MonthTrack;
