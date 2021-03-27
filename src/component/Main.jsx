/* eslint-disable import/prefer-default-export */
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import 'typeface-poppins';
import ManikoPage from './ManikoPage';
import ManikoProvider from './ManikoProvider';

const theme = extendTheme({
  colors: {
    violet: {
      100: '#6D597A',
    },
    red: {
      100: '#B56576',
      200: '#E56B6F',
    },
    orange: {
      100: '#EAAC8B',
    },
    blue: {
      100: '#355070',
    },
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Poppins, monospace',
  },
});

const Main = ({ children }) => (
  <ChakraProvider theme={theme} resetCSS>
    <ManikoProvider>
      <ManikoPage>
        {children}
      </ManikoPage>
    </ManikoProvider>
  </ChakraProvider>
);

export default Main;
