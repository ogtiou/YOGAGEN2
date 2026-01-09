import { useEffect } from 'react';

export default function Luelisaa() {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    }, []);
  
    return null;
  }