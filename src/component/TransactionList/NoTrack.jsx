import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { navigate } from 'gatsby-link';

const NoTrack = () => (
  <Box h="100%" d="flex" alignItems="center" justifyContent="center" flexDir="column">
    <Text color="white.100">No track was started.</Text>
    <Button
      bgColor="red.100"
      borderRadius="15px"
      p="10px 30px 10px 30px"
      color="white"
      onClick={() => navigate('/')}
    >
      Start A Track
    </Button>
  </Box>
);

export default NoTrack;
