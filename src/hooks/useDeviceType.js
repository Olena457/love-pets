import { useEffect, useState } from 'react';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('mobile');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setDeviceType('desktop');
      } else if (window.innerWidth >= 768) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
};
