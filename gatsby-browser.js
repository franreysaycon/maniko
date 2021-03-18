/* eslint-disable import/prefer-default-export */
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import MainBackground from './src/component/MainBackground';
import 'typeface-poppins';

const theme = extendTheme({
  colors: {
    fonts: {
      body: 'Poppins, sans-serif',
      heading: 'Poppins, sans-serif',
      mono: 'Poppins, monospace',
    },
    fontSizes: {

    },
    violet: {
      100: '#6D597A',
    },
  },
});

export const wrapPageElement = ({ element }) => (
  <ChakraProvider theme={theme} resetCSS>
    <MainBackground>
      {element}
    </MainBackground>
  </ChakraProvider>
);
