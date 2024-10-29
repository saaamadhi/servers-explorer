import { Typography, Box, useTheme, Button, Stack } from '@mui/material';
import SyncProblemOutlinedIcon from '@mui/icons-material/SyncProblemOutlined';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Stack>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <SyncProblemOutlinedIcon />
        <Typography
          variant='h5'
          sx={{ fontWeight: 600, ml: theme.spacing(2.5) }}
        >
          404 Content not found
        </Typography>
      </Box>
      <Button variant='contained' onClick={() => navigate('/')}>
        Go to the home page
      </Button>
    </Stack>
  );
};

export default NotFound;
