import { useSyncExternalStore } from 'react';

const getSnapshot = () => {
  return navigator.onLine;
};

const subscribe = (callback: any) => {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
};

export const useNetworkState = () => {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline;
};
