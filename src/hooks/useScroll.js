import { useEffect, useState } from 'react';

const useScroll = () => {
  const [startedScroll, setStartedScroll] = useState(false);

  useEffect(() => {
    if (startedScroll) {
      const timer = setTimeout(() => setStartedScroll(false), 600);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [startedScroll]);

  return [startedScroll, setStartedScroll];
};

export default useScroll;
