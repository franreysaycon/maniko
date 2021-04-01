import React from 'react';
import TemplateGuard from '../component/common/TemplateGuard';
import Homepage from '../component/Homepage';

const Home = () => (
  <TemplateGuard>
    <Homepage />
  </TemplateGuard>
);

export default Home;
