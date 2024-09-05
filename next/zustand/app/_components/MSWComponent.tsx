'use client';
import { useEffect } from 'react';

export const MSWComponent = () => {
  useEffect(() => {
    const initMockServiceWorker = async () => {
      if (typeof window !== 'undefined') {
        if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
          const worker = (await import('@/_mocks/browser')).default;
          worker.start();
        }
      }
    };

    initMockServiceWorker();
  }, []);

  return null;
};
