import React from 'react'
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
  Checkbox
} from "@chakra-ui/react"
import { useManikoStore } from '../ManikoProvider'
import { useForm } from "react-hook-form"

const TransactionCreateModal = ({ isOpen, onClose }) => {
  const { templates, updateTransactions } = useManikoStore()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    updateTransactions(data)
    onClose()
  }

  console.log(templates)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Transaction</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody m="10px">
          { templates &&
            <FormControl id="template">
              <FormLabel textTransform="uppercase">Choose From Template</FormLabel>
              <Select borderColor="black" ref={register({ required: true })}>
                {
                  templates.map( ({ id, name }) => <option key={id}>{name}</option>)
                }
              </Select>
            </FormControl>
          }
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
              <option selected={true} value="30th">AFTER 30TH</option>
              <option value="15th">AFTER 15TH</option>
            </Select>
          </FormControl>
          <FormControl id="schedule" mb="15px">
            <FormLabel textTransform="uppercase">Transaction Type</FormLabel>
            <Select name="type" ref={register}>
              <option selected={true} value="cash">CASH</option>
              <option value="credit">CREDIT</option>
            </Select>
          </FormControl>
          <Checkbox name="isTemplate" ref={register}>
            Save as Template
          </Checkbox>
        </ModalBody>
        <ModalFooter>
          <Button bgColor="red.100" mr={3} onClick={handleSubmit(onSubmit)} color="white">Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default TransactionCreateModal
