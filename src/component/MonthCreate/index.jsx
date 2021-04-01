import {
  Box, Button, Text, useDisclosure,
} from '@chakra-ui/react';
import { navigate } from 'gatsby-link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import TransactionCreateModal from '../common/TransactionCreateModal';
import { useManikoStore } from '../ManikoProvider';
import AllotedTransactions from './AllotedTransactions';
import SalaryForm from './SalaryForm';

const MonthCreate = () => {
  const { createTemplate, template } = useManikoStore();
  const transactionDisclosure = useDisclosure();
  const [tempTransactions, setTempTransactions] = useState([]);
  const createTransaction = (transaction) => {
    const entry = {
      id: uuidv4(),
      ...transaction,
      value: +transaction.value,
    };
    setTempTransactions([entry, ...tempTransactions]);
  };
  const deleteTransaction = (id) => {
    setTempTransactions(tempTransactions.filter((tmp) => tmp.id !== id));
  };
  const {
    register, handleSubmit, errors,
  } = useForm();
  const onSubmit = ({ after15thSalary, after30thSalary }) => {
    createTemplate({
      after15thSalary: +after15thSalary,
      after30thSalary: +after30thSalary,
      transactions: tempTransactions,
    });
    navigate('/');
  };

  return (
    <Box h="100%" d="flex" flexDir="column">
      <Text textTransform="uppercase" fontSize="xl" color="white" mb="15px">NEW BUDGET TEMPLATE</Text>
      <Box d="flex" h="12%" mb="15px" justifyContent="space-between">
        <SalaryForm ref={register({ required: true, min: 1 })} error={errors.after30thSalary} name="after30thSalary" label="30th Salary" />
        <SalaryForm ref={register({ required: true, min: 1 })} error={errors.after15thSalary} name="after15thSalary" label="15th Salary" sx={{ marginLeft: '15px' }} />
      </Box>
      <AllotedTransactions
        transactions={tempTransactions}
        deleteTransaction={deleteTransaction}
        openTransactionModal={transactionDisclosure.onOpen}
        template={template}
      />
      <TransactionCreateModal
        isOpen={transactionDisclosure.isOpen}
        onClose={transactionDisclosure.onClose}
        createTransaction={createTransaction}
      />
      <Button
        textTransform="uppercase"
        outline="0"
        bgColor="red.100"
        pl="80px"
        pr="80px"
        borderRadius="30px"
        color="white"
        onClick={handleSubmit(onSubmit)}
      >
        Create
      </Button>
    </Box>
  );
};

export default MonthCreate;
