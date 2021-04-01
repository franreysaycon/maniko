import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useLongPress } from 'use-long-press';
import { motion } from 'framer-motion';

const DeleteBox = motion(Box);

const COLOR_MAP = {
  cash: 'red.100',
  credit: 'blue.100',
  savings: 'green.400',
};

const Transaction = ({
  id, type, schedule, name, value, deleteTransaction, viewOnly, scrolling,
}) => {
  const [openDelete, setOpenDelete] = useState(false);

  const bind = useLongPress(() => {
    if (!viewOnly && !scrolling) {
      setOpenDelete(true);
    }
  }, {
    threshold: 500,
  });
  const deleteThis = () => {
    deleteTransaction(id);
  };

  return (
    <Box bgColor="white" pos="relative" borderRadius="15px" d="flex" flexDir="column" p="15px" h="fit-content" {...bind}>
      <Box d="flex" justifyContent="space-between">
        <Text fontSize="xs" textTransform="uppercase">{type}</Text>
        <Text fontSize="xs" textTransform="uppercase">{`after ${schedule}`}</Text>
      </Box>
      <Box d="flex" justifyContent="space-between">
        <Text color={COLOR_MAP[type]} textTransform="uppercase" fontWeight="bold">{name}</Text>
        <Text color={COLOR_MAP[type]} fontSize="lg" fontWeight="bold" textTransform="uppercase">{`php ${value}`}</Text>
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
