import {
  Box, FormControl, FormHelperText, FormLabel, forwardRef, Input,
} from '@chakra-ui/react';
import React from 'react';

const SalaryForm = forwardRef(({
  error, name, label, sx,
}, ref) => (
  <Box d="flex" sx={sx}>
    <FormControl>
      <FormLabel textTransform="uppercase" color="white">{label}</FormLabel>
      <Box d="flex">
        <Box
          d="flex"
          bgColor="blue.100"
          color="white"
          pl="15px"
          pr="15px"
          alignItems="center"
          borderLeftRadius="5px"
          fontSize="sm"
        >
          PHP
        </Box>
        <Input type="number" name={name} bgColor="white" borderLeftRadius="0px" ref={ref} />
      </Box>
    </FormControl>
    {error && <FormHelperText color="red.300" fontSize="xs">should be greater than 0.</FormHelperText> }
  </Box>
));

export default SalaryForm;
