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
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const FilterModal = ({ isOpen, onClose, onSubmit }) => {
  const {
    register, handleSubmit,
  } = useForm();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="25px" mb="0px">
        <ModalHeader>Choose Filters</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <FormControl>
            <FormLabel textTransform="uppercase">Transaction Type</FormLabel>
            <Select name="typeFilter" ref={register}>
              <option value="all">ALL EXPENSE</option>
              <option value="cash">CASH EXPENSE</option>
              <option value="credit">CREDIT EXPENSE</option>
              <option value="savings">SAVINGS</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button bgColor="red.100" mr={3} onClick={handleSubmit(onSubmit)} color="white" textTransform="uppercase">Apply</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FilterModal;
