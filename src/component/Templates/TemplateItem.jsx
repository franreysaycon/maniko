import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useLongPress } from 'use-long-press';
import { motion } from 'framer-motion';

const DeleteBox = motion(Box);

const TemplateItem = ({
  id, type, schedule, name, value, deleteTemplate,
}) => {
  const [openDelete, setOpenDelete] = useState(false);
  const bind = useLongPress(() => {
    setOpenDelete(true);
  });
  const deleteThis = () => {
    deleteTemplate(id);
  };
  return (
    <Box pos="relative" d="flex" flexDir="column" p="10px" borderRadius="15px" bgColor="white" {...bind}>
      <Box d="flex" justifyContent="space-between">
        <Text color="blue.100" fontSize="sm" textTransform="uppercase" fontWeight="bold">{type}</Text>
        <Text color="violet.100" fontSize="sm" textTransform="uppercase" fontWeight="bold">
          after
          {' '}
          {schedule}
        </Text>
      </Box>
      <Box d="flex">
        <Box d="flex" flexDir="column">
          <Text textTransform="uppercase">{name}</Text>
          <Text fontWeight="bold" color="red.100">
            PHP
            {' '}
            {value}
          </Text>
        </Box>
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

export default TemplateItem;
