import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Header from './Header';

const ManikoPage = ({ children }) => (
  <Box w="100vw" minH="100vh" bgColor="violet.100">
    <Box w="100%" p="10px 20px 10px 20px">
      <Header />
    </Box>
    <Box pos="absolute" w="100%" p="10px 20px 10px 20px" maxH="82vh" h="82vh" zIndex={1} overflowY="scroll">
      {children}
    </Box>
    <Image pos="absolute" src="border-edge.png" w="100%" bottom="0px" />
  </Box>
);

export default ManikoPage;
