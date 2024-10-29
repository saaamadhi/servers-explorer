import { FC } from 'react';
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  circularProgressClasses,
  useTheme,
} from '@mui/material';

const Spinner: FC<CircularProgressProps> = (props) => {
  const theme = useTheme();

  return (
    <>
      <svg>
        <defs>
          <linearGradient id='spinner-gradient'>
            <stop
              offset='0%'
              stopOpacity='1'
              stopColor={theme.palette.primary.main}
            />
            <stop
              offset='100%'
              stopOpacity='0'
              stopColor={theme.palette.primary.main}
            />
          </linearGradient>
        </defs>
      </svg>
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant='determinate'
          sx={{
            color: theme.palette.secondary.main,
          }}
          size={80}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant='indeterminate'
          disableShrink
          sx={{
            color: theme.palette.primary.main,
            animationDuration: '1550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
              stroke: 'url(#spinner-gradient)',
            },
          }}
          size={80}
          thickness={4}
          {...props}
        />
      </Box>
    </>
  );
};

export default Spinner;
