import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const MainBackground = ({ children }) => (
  <Box
    width="100vw"
    height="100vh"
    backgroundColor="violet.100"
  >
    <Box
      width="100vw"
      height="100vh"
    >
      {children}
    </Box>
    <Image position="fixed" src="border-edge.png" width="100%" bottom="0px" />
  </Box>
);

export default MainBackground;
