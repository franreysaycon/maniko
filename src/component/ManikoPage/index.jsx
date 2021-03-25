import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import Header from './Header';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';

const ManikoPage = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <>
      <Box w="100vw" minH="100vh" bgColor="violet.100">
        <Box w="100%" p="10px 20px 10px 20px">
          <Header setSideBarOpen={setSideBarOpen} />
        </Box>
        <Box pos="absolute" w="100%" p="10px 20px 10px 20px" maxH="82vh" h="82vh" overflowY="scroll">
          {children}
        </Box>
      </Box>
      <AnimatePresence>
        {
          sideBarOpen && <Sidebar onClose={() => setSideBarOpen(false)}/>
        }
      </AnimatePresence>
    </>
  );
}

export default ManikoPage;
