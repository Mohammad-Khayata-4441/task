import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDebounce } from './useDebounce';

// eslint-disable-next-line no-unused-vars
type callback = (pathName: string) => void;
export const usePathname = (onPathChange?: callback) => {
  const { pathname } = useLocation();
  const previousPathRef = React.useRef(pathname);
  const debounce = useDebounce();

  const callbackRef = React.useRef(onPathChange);

  React.useLayoutEffect(() => {
    if (callbackRef.current !== onPathChange) {
      callbackRef.current = onPathChange;
    }
  }, [onPathChange]);

  React.useEffect(() => {
    if (!callbackRef.current) return;
    if (pathname !== previousPathRef.current) {
      previousPathRef.current = pathname;
      debounce(() => callbackRef.current?.(pathname), 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return pathname;
};
