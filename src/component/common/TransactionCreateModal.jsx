import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  FormHelperText,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const TransactionCreateModal = ({ isOpen, onClose, createTransaction }) => {
  const {
    register, handleSubmit, errors,
  } = useForm();
  const onSubmit = (data) => {
    createTransaction(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="25px" mb="0px">
        <ModalHeader>Create Transaction</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <FormControl id="name" mb="15px">
            <FormLabel textTransform="uppercase">Name</FormLabel>
            <Input type="text" name="name" ref={register({ required: true, maxLength: 30 })} />
            {errors.after30thSalary && <FormHelperText color="red.300">There should be a name less than 30 characters.</FormHelperText> }
          </FormControl>
          <FormControl id="amount" mb="15px">
            <FormLabel textTransform="uppercase">Amount</FormLabel>
            <Input type="number" name="value" ref={register({ required: true, min: 1 })} />
            {errors.after30thSalary && <FormHelperText color="red.300">Value should be greater than 0.</FormHelperText> }
          </FormControl>
          <FormControl id="schedule" mb="15px">
            <FormLabel textTransform="uppercase">Schedule</FormLabel>
            <Select name="schedule" ref={register}>
              <option value="30th">AFTER 30TH</option>
              <option value="15th">AFTER 15TH</option>
            </Select>
          </FormControl>
          <FormControl id="schedule" mb="15px">
            <FormLabel textTransform="uppercase">Transaction Type</FormLabel>
            <Select name="type" ref={register}>
              <option value="cash">CASH EXPENSE</option>
              <option value="credit">CREDIT EXPENSE</option>
              <option value="savings">SAVINGS</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button bgColor="red.100" mr={3} onClick={handleSubmit(onSubmit)} color="white">Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default TransactionCreateModal;
