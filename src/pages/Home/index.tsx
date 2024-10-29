import { Box, Typography, useTheme } from '@mui/material';
import ServerList from '../../shared/components/ServerList';

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        p: theme.spacing(4),
        mt: theme.spacing(36),

        [theme.breakpoints.down('sm')]: {
          mt: theme.spacing(30),
        },
      }}
    >
      <Typography
        variant='h5'
        sx={{
          p: `${theme.spacing(1.5)} 0 ${theme.spacing(4)} 0`,
          fontWeight: 600,
        }}
      >
        Server list
      </Typography>
      <Typography
        variant='subtitle2'
        textAlign='center'
        color={theme.palette.secondary.grey}
      >
        The distance between you and the server
      </Typography>
      <ServerList />
    </Box>
  );
};

export default Home;
