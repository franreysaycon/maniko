import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useLongPress } from 'use-long-press';
import { motion } from 'framer-motion';

const DeleteBox = motion(Box);

const Transaction = ({
  id, type, schedule, name, value, deleteTransaction, viewOnly,
}) => {
  const [openDelete, setOpenDelete] = useState(false);
  const bind = useLongPress(() => {
    if (!viewOnly) {
      setOpenDelete(true);
    }
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
          <DeleteBox
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeIn',
              duration: 0.2,
            }}
          >
            <Button bgColor="red.100" onClick={deleteThis} color="white">Delete</Button>
            <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
          </DeleteBox>
        )
      }
    </Box>
  );
};

Transaction.defaultProps = {
  viewOnly: false,
};

export default Transaction;
