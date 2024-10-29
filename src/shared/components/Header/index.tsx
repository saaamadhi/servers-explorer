import { Paper, Button, useTheme, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../../utils';

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem(TOKEN);
    navigate('/login');
  };

  return (
    <Paper
      elevation={8}
      sx={{
        position: 'fixed',
        top: 0,
        zIndex: 3,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: theme.spacing(5),
        backgroundColor: theme.palette.background.default,
        borderRadius: 'unset',
      }}
    >
      <Box
        width={theme.spacing(18)}
        height={theme.spacing(8)}
        mr={theme.spacing(2.5)}
      >
        <img
          src='./logo.svg'
          alt='Logo'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      <Button
        type='button'
        variant='outlined'
        data-testid='logout-btn'
        onClick={handleLogOut}
        sx={{
          padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
          borderRadius: theme.spacing(5),
          borderColor: theme.palette.primary.grey,
          textTransform: 'unset',
        }}
      >
        <Typography
          variant='caption'
          color={theme.palette.primary.dark}
          fontWeight={600}
        >
          Log Out
        </Typography>
      </Button>
    </Paper>
  );
};

export default Header;
