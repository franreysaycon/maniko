import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';

const FinishModal = ({ isOpen, onClose, onSubmit }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent mt="25px" mb="0px">
      <ModalHeader>Archive Track</ModalHeader>
      <ModalCloseButton onClick={onClose} />
      <ModalBody>
        <Text>Are you sure? This will delete the current track.</Text>
      </ModalBody>
      <ModalFooter>
        <Button bgColor="red.100" mr={3} onClick={onSubmit} color="white">Finish</Button>
        <Button bgColor="gray" mr={3} color="white" onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default FinishModal;
