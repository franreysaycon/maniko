import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import TemplateItem from './TemplateItem';
import { useManikoStore } from '../ManikoProvider';

const Templates = () => {
  const { templates } = useManikoStore();
  return (
    <Box h="100%" d="flex" flexDir="column">
      <Text textTransform="uppercase" fontSize="xl" color="white">Templates</Text>
      <Box
        d="flex"
        flexDir="column"
        overflowY="scroll"
        css={{
          '>div': {
            marginBottom: '10px',
          },
          '>div:last-child': {
            marginBottom: 0,
          },
        }}
      >
        {
            templates && templates.map((d) => <TemplateItem key={d.id} {...d} />)
        }
      </Box>
    </Box>
  );
};

export default Templates;
