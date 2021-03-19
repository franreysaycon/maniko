import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Header from './Header';

const MainBackground = ({ children }) => (
  <Box
    width="100vw"
    minHeight="100vh"
    backgroundColor="violet.100"
  >
    <Box width="100%" padding="10px 20px 10px 20px">
      <Header />
    </Box>
    <Box
      position="absolute"
      width="100%"
      padding="10px 20px 10px 20px"
      maxHeight="82vh"
      height="82vh"
      zIndex={1}
      overflowY="scroll"
    >
      {children}
    </Box>
    <Image position="absolute" src="border-edge.png" width="100%" bottom="0px" />
  </Box>
);

export default MainBackground;
