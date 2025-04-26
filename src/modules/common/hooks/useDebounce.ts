import React from 'react';

/**
 * The `useDebounce` function in TypeScript creates a debounce function that delays the execution of a
 * callback until a specified timeout has elapsed.
 * @returns The `useDebounce` custom hook is being returned, which includes a `debounce` function that
 * can be used for debouncing callbacks with a specified timeout.
 */
export const useDebounce = () => {
  const debounceRef = React.useRef<NodeJS.Timeout>();

  const debounce = React.useCallback(
    (callback: any, timeout: number, args?: any[]) => {
      clearTimeout(debounceRef.current as NodeJS.Timeout);
      debounceRef.current = setTimeout(callback, timeout, args);
    },
    [],
  );

  return debounce;
};
