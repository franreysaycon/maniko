/* eslint-disable import/prefer-default-export */
import React from 'react';
import Main from './src/component/Main';

export const wrapPageElement = ({ element }) => (
  <Main>{element}</Main>
);
