import React, { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import useClickOutside from '../../hooks/useClickOutside';

const Container = motion(Box);
const SidebarContainer = motion(Box);

const Sidebar = ({ onClose }) => {
  const sidebarRef = useRef();
  const location = useLocation();
  useClickOutside(sidebarRef, onClose);

  return (
    <Container
      h="100vh"
      w="100vw"
      position="fixed"
      zIndex="10"
      top={0}
      bgColor="rgba(20,20,20,0.9)"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <SidebarContainer
        h="100%"
        pt="100px"
        w="50%"
        position="absolute"
        animate={{ x: '0' }}
        initial={{ x: '-50%' }}
        exit={{ x: '-50%' }}
        transition={{
          ease: 'easeIn',
          duration: 0.3,
        }}
        ref={sidebarRef}
        zIndex="11"
        bgColor="red.100"
      >
        <Link to="/" onClick={onClose}>
          <Box
            p="10px 10px 10px 20px"
            w="100%"
            fontSize="xl"
            color="white"
            bgColor={(location.pathname === '/') ? 'red.200' : 'red.100'}
          >
            Home
          </Box>
        </Link>
        <Link to="/templates" onClick={onClose}>
          <Box
            p="10px 10px 10px 20px"
            w="100%"
            fontSize="xl"
            color="white"
            bgColor={(location.pathname === '/templates' || location.pathname === '/create') ? 'red.200' : 'red.100'}
          >
            Template
          </Box>
        </Link>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
