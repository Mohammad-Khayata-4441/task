import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';
import { usePathname } from '../hooks/usePathname';
import { ErrorFallbackProps } from './ErrorBoundary';
import { HomeIcon, ReturnIcon } from './Icons';

export const ErrorElement: React.FC<ErrorFallbackProps> = ({
  resetErrorBoundary
  
  ,
}) => {
  const navigate = useNavigate();
  const debounce = useDebounce();
  usePathname(resetErrorBoundary);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-5 md:mt-40 mt-10">
      <Typography
        variant="h6"
        className="text-center md:w-[500px] w-full leading-8 tracking-wide"
      >
        Oops! Something went wrong. It looks like there was an error loading
        this page. Please try again or go back to the home page.
      </Typography>

      <div className=" flex justify-center items-center gap-2">
        <Button
          variant="contained"
          startIcon={<ReturnIcon />}
          onClick={() => debounce(resetErrorBoundary, 200)}
        >
          Try again
        </Button>
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={() => navigate('/')}
        >
          Go To Home
        </Button>
      </div>
    </div>
  );
};
