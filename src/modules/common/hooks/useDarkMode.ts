import {
  Context,
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
type Mode = 'dark' | 'light';
const ColorModeContext: Context<{
  mode: string;
  setMode: Dispatch<SetStateAction<Mode>> | any;
}> = createContext({
  mode: 'dark',
  setMode: () => {
    return true;
  },
});

function getInitialMode(defaultMode: Mode) {
  const storedMode: Mode = localStorage.getItem('dark_mode') as Mode;
  return storedMode ?? defaultMode;
}

const useDarkMode = (params?: { initialValue: Mode }) => {
  const [mode, setMode] = useState<Mode>(getInitialMode('light'));
  useEffect(() => {
    if (params?.initialValue) {
      setActiveMode(params.initialValue);
    }
  }, [params?.initialValue]);
  const setActiveMode = (m: Mode) => {
    localStorage.setItem('dark_mode', m);
    setMode(m);
  };
  return { mode, setMode: setActiveMode };
};

export { ColorModeContext, useDarkMode };
