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

  console.log(errors)

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
                  templates.map( temp => <option>{temp}</option>)
                }
              </Select>
            </FormControl>
          }
          <FormControl id="name" mb="15px">
            <FormLabel textTransform="uppercase">Name</FormLabel>
            <Input type="text" ref={register({ required: true, maxLength: 30 })} />
          </FormControl>
          <FormControl id="amount" mb="15px">
            <FormLabel textTransform="uppercase">Amount</FormLabel>
            <Input type="number" ref={register({ required: true, maxLength: 30 })} />
          </FormControl>
          <FormControl id="schedule" mb="15px">
            <FormLabel textTransform="uppercase">Schedule</FormLabel>
            <Select ref={register}>
              <option selected={true}>AFTER 30TH</option>
              <option>AFTER 15TH</option>
            </Select>
          </FormControl>
          <FormControl id="schedule" mb="15px">
            <FormLabel textTransform="uppercase">Transaction Type</FormLabel>
            <Select ref={register}>
              <option selected={true}>CASH</option>
              <option>CREDIT</option>
            </Select>
          </FormControl>
          <Checkbox defaultIsChecked ref={register}>
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
