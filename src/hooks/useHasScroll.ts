import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export const useHasScroll = (): boolean => {
  const [hasScroll, setHasScroll] = useState(false);
  const location = useLocation();

  const updateHasScroll = (): void => {
    setHasScroll(
      document.documentElement.scrollHeight !== window.innerHeight
    );
  };

  useEffect(() => {
    document.addEventListener('scroll', updateHasScroll);
    window.addEventListener('resize', updateHasScroll);

    return () => {
      document.removeEventListener('scroll', updateHasScroll);
      window.removeEventListener('resize', updateHasScroll);
    };
  }, []);

  useEffect(updateHasScroll, [location]);

  return hasScroll;
};
