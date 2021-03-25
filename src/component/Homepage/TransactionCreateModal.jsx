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

const TransactionCreateModal = ({ isOpen, onClose, templates }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Create Transaction</ModalHeader>
      <ModalCloseButton onClick={onClose} />
      <ModalBody>
        { templates &&
          <FormControl id="template">
            <FormLabel textTransform="uppercase">Choose From Template</FormLabel>
            <Select borderColor="black">
              {
                templates.map( temp => <option>{temp}</option>)
              }
            </Select>            
          </FormControl>
        }
        <FormControl id="name" mb="15px">
          <FormLabel textTransform="uppercase">Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="amount" mb="15px">
          <FormLabel textTransform="uppercase">Amount</FormLabel>
          <Input type="number" />
        </FormControl>
        <FormControl id="schedule" mb="15px">
          <FormLabel textTransform="uppercase">Schedule</FormLabel>
          <Select>
            <option selected={true}>AFTER 30TH</option>
            <option>AFTER 15TH</option>
          </Select>
        </FormControl>
        <FormControl id="schedule" mb="15px">
          <FormLabel textTransform="uppercase">Transaction Type</FormLabel>
          <Select>
            <option selected={true}>CASH</option>
            <option>CREDIT</option>
          </Select>
        </FormControl>
        <Checkbox defaultIsChecked>
          Save as Template
        </Checkbox>
      </ModalBody>
      <ModalFooter>
        <Button bgColor="red.100" mr={3} onClick={onClose} color="white">Create</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export default TransactionCreateModal
