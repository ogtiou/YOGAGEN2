import { useEffect } from 'react';

export default function Booking() {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    }, []);
  
    return null;
  }