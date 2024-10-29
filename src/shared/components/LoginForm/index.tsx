import { FC, FormEvent } from 'react';
import {
  FormControl,
  Button,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

type LoginFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errorMessage?: string;
  isError: boolean;
};

const LoginForm: FC<LoginFormProps> = ({ onSubmit, errorMessage, isError }) => {
  const theme = useTheme();

  return (
    <form
      data-testid='login-form'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(4),
      }}
      onSubmit={onSubmit}
    >
      <Typography variant='h5' textAlign='center' fontWeight={600}>
        Welcome back!
      </Typography>
      <Typography
        variant='subtitle2'
        textAlign='center'
        color={theme.palette.secondary.dark}
      >
        Enter details below to log in to your account.
      </Typography>
      {isError && (
        <Typography
          data-testid='login-error'
          variant='subtitle2'
          color={theme.palette.error.main}
        >
          {errorMessage}
        </Typography>
      )}
      <FormControl fullWidth>
        <Typography variant='caption' color={theme.palette.secondary.dark}>
          Username
        </Typography>
        <TextField
          id='username'
          name='username'
          data-testid='login-username'
          type='text'
          placeholder='Enter username'
          required
        />
      </FormControl>
      <FormControl fullWidth>
        <Typography variant='caption' color={theme.palette.secondary.dark}>
          Password
        </Typography>
        <TextField
          id='password'
          name='password'
          data-testid='login-password'
          type='password'
          autoComplete='off'
          placeholder='Enter password'
          required
        />
      </FormControl>
      <Button
        variant='contained'
        type='submit'
        data-testid='login-submit-btn'
        sx={{
          width: '100%',
          margin: `${theme.spacing(4)} 0`,
          borderRadius: theme.spacing(5),
          textTransform: 'unset',
        }}
      >
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
