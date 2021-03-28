import {
  Box, Text, FormControl, Select, FormLabel, Input, FormHelperText, Button, Checkbox, useDisclosure,
} from '@chakra-ui/react';
import { navigate } from 'gatsby-link';
import months from 'months';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import Transaction from './common/Transaction';
import TransactionCreateModal from './common/TransactionCreateModal';
import { useManikoStore } from './ManikoProvider';

const MonthCreate = () => {
  const { createTrack, trackIsReady, templates } = useManikoStore();
  const transactionDisclosure = useDisclosure();
  const [tempTransactions, setTempTransactions] = useState([]);
  const createTransaction = (transaction) => {
    const entry = {
      id: uuidv4(),
      ...transaction,
    };
    setTempTransactions([entry, ...tempTransactions]);
  };
  const deleteTransaction = (id) => {
    setTempTransactions(tempTransactions.filter((tmp) => tmp.id === id));
  };
  const {
    register, handleSubmit, errors, watch,
  } = useForm();
  const onSubmit = (data) => {
    createTrack({
      ...data,
      transactions: tempTransactions,
    });
  };
  const today = new Date();
  const chosenTemplate = templates ? templates.find((template) => watch('template') === template.id) : null;
  const showTemplate = Array.isArray(templates) && templates.length > 0;

  useEffect(() => {
    if (trackIsReady) {
      navigate('/');
    }
  }, [trackIsReady]);

  return (
    <Box h="100%" d="flex" flexDir="column">
      <Box h="10%" d="flex" justifyContent="space-between" alignItems="center" mb="15px">
        <Text color="white" fontSize="xl" textTransform="uppercase">New Track</Text>
        <Button bgColor="red.100" pl="40px" pr="40px" borderRadius="30px" color="white" textTransform="uppercase" onClick={handleSubmit(onSubmit)}>Create</Button>
      </Box>
      { showTemplate && (
        <FormControl id="template" mb="15px">
          <FormLabel textTransform="uppercase" color="white">Choose From Template</FormLabel>
          <Select name="template" color="white" borderColor="white" ref={register({ required: true })}>
            <option disabled selected>Choose a Template</option>
            {
                templates.map(({ id, name }) => <option key={id} value={id}>{name}</option>)
              }
          </Select>
        </FormControl>
      )}
      <Box d="flex" flexDir="row" mb="15px">
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
      <Box d="flex" mb="15px" justifyContent="space-between">
        <Box d="flex">
          <FormControl id="after30thSalary">
            <FormLabel textTransform="uppercase" color="white">30th salary</FormLabel>
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
              <Input type="number" name="after30thSalary" bgColor="white" borderLeftRadius="0px" ref={register({ required: true, min: 1 })} />
            </Box>
            {errors.after30thSalary && <FormHelperText color="red.300">Salary should be greater than 0.</FormHelperText> }
          </FormControl>
        </Box>
        <Box d="flex" ml="15px">
          <FormControl id="after15thSalary">
            <FormLabel textTransform="uppercase" color="white">15th salary</FormLabel>
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
              <Input type="number" name="after15thSalary" bgColor="white" borderLeftRadius="0px" ref={register({ required: true })} />
            </Box>
            {errors.after15thSalary && <FormHelperText color="red.300">Salary should be greater than 0.</FormHelperText> }
          </FormControl>
        </Box>
      </Box>
      <Text color="white">ALLOTED TRANSACTIONS</Text>
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
          tempTransactions && tempTransactions.map(({
            id, type, schedule, name, value,
          }) => (
            <Transaction
              key={id}
              id={id}
              type={type}
              schedule={schedule}
              name={name}
              value={value}
              deleteTransaction={deleteTransaction}
            />
          ))
        }
      </Box>
      {
        !chosenTemplate
        && (
        <Checkbox name="isTemplate" ref={register} color="white">
          Save as Track Template
        </Checkbox>
        )
      }
      <Box d="flex" alignItems="flex-end" justifyContent="center" height="100%">
        <Button bgColor="red.100" pl="80px" pr="80px" borderRadius="30px" color="white" textTransform="uppercase" onClick={transactionDisclosure.onOpen}>Add Transaction</Button>
      </Box>
      <TransactionCreateModal
        isOpen={transactionDisclosure.isOpen}
        onClose={transactionDisclosure.onClose}
        createTransaction={createTransaction}
      />
    </Box>
  );
};

export default MonthCreate;
