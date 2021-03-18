/* eslint-disable import/prefer-default-export */
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import MainBackground from './src/component/MainBackground';

const theme = extendTheme({
  colors: {
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
