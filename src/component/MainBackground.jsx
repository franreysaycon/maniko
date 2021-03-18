import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Header from './Header';

const MainBackground = ({ children }) => (
  <Box
    width="100vw"
    minHeight="100vh"
    backgroundColor="violet.100"
  >
    <Header />
    <Box
      position="absolute"
      width="100vw"
      maxHeight="80vh"
      zIndex={1}
      overflowY="scroll"
    >
      {children}
    </Box>
    <Image position="absolute" src="border-edge.png" width="100%" bottom="0px" />
  </Box>
);

export default MainBackground;
