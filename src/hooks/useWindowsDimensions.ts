import { useEffect, useState } from 'react';
export default function useWindowsDimensions() {
  const getSize = () => {
    if (typeof window === 'undefined') {
      return { screenWidth: 0, screenHeight: 0 };
    }
    return { screenWidth: window.innerWidth, screenHeight: window.innerHeight };
  };
  const [size, setSize] = useState(getSize());
  useEffect(() => {
    function onResize() {
      setSize(getSize());
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return size;
}