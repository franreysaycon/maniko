import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useLongPress } from 'use-long-press';

const Transaction = ({
  id, type, schedule, name, value, deleteTransaction,
}) => {
  const [openDelete, setOpenDelete] = useState(false);
  const bind = useLongPress(() => {
    setOpenDelete(true);
  });
  const deleteThis = () => {
    deleteTransaction(id);
  };
  return (
    <Box bgColor="white" pos="relative" borderRadius="15px" d="flex" flexDir="column" p="15px" h="fit-content" {...bind}>
      <Box d="flex" justifyContent="space-between">
        <Text fontSize="sm" color="blue.100" fontWeight="bold" textTransform="uppercase">{type}</Text>
        <Text fontSize="sm" color="violet.100" fontWeight="bold" textTransform="uppercase">{`after ${schedule}`}</Text>
      </Box>
      <Box d="flex" justifyContent="space-between">
        <Text textTransform="uppercase">{name}</Text>
        <Text color="red.100" fontWeight="bold" textTransform="uppercase">{`php ${value}`}</Text>
      </Box>
      {
        openDelete && (
          <Box
            borderRadius="15px"
            left="0"
            bgColor="rgba(0, 0, 0, 0.6)"
            pos="absolute"
            zIndex={1}
            top="0"
            w="100%"
            h="100%"
            d="flex"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Button bgColor="red.100" onClick={deleteThis} color="white">Delete</Button>
            <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
          </Box>
        )
      }
    </Box>
  );
};

export default Transaction;
