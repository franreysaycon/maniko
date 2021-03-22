import { Box, Text } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import React from 'react';
import { Menu } from 'react-feather';

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <Menu color={theme.colors.white} size={50} />
      <Text fontSize="50px" color="white" marginLeft="35px" position="relative" top="-7px">maniko</Text>
    </Box>
  );
};

export default Header;
