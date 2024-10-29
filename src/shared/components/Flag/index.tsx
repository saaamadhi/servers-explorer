import { FC } from 'react';
import { Box, useTheme } from '@mui/material';

export interface FlagProps {
  code: string;
}

const Flag: FC<FlagProps> = ({ code }) => {
  const theme = useTheme();

  return (
    <Box
      width={theme.spacing(8)}
      height={theme.spacing(6)}
      mr={theme.spacing(5)}
      overflow='hidden'
      sx={{
        border: `0.5px solid ${theme.palette.primary.grey}`,
        borderRadius: theme.spacing(0.5),
      }}
    >
      <img
        src={`https://flagcdn.com/${code}.svg`}
        alt={`${code} flag`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default Flag;
