import { navigate } from 'gatsby-link';
import React, { useEffect } from 'react';
import { useManikoStore } from '../ManikoProvider';

const TemplateGuard = ({ children }) => {
  const { templateIsReady } = useManikoStore();

  useEffect(() => {
    if (!templateIsReady) {
      navigate('/create');
    }
  }, [templateIsReady]);

  if (!templateIsReady) {
    return <></>;
  }

  return (
    <>
      {children}
    </>
  );
};

export default TemplateGuard;
