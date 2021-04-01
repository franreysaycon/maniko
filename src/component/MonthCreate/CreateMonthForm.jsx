import {
  Box, FormControl, FormLabel, Input, Select,
} from '@chakra-ui/react';
import React from 'react';
import months from 'months';

const CreateMonthForm = ({ register }) => {
  const today = new Date();

  return (
    <Box d="flex" h="12%" flexDir="row" mb="15px">
      <Box d="flex" flex="1" mr="15px">
        <FormControl id="month">
          <FormLabel textTransform="uppercase" color="white">Month</FormLabel>
          <Select bgColor="white" name="month" ref={register({ required: true })}>
            {
            months.abbr.map((month) => <option key={month}>{month}</option>)
          }
          </Select>
        </FormControl>
      </Box>
      <Box d="flex" flex="1">
        <FormControl id="year">
          <FormLabel textTransform="uppercase" color="white">Year</FormLabel>
          <Input type="number" name="year" bgColor="white" ref={register} value={today.getFullYear()} contentEditable={false} />
        </FormControl>
      </Box>
    </Box>
  );
};

export default CreateMonthForm;
