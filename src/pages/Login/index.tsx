import { FormEvent } from 'react';
import { Paper, Typography, Box, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../api';
import LoginForm from '../../shared/components/LoginForm';
import Spinner from '../../shared/components/Spinner';
import {
  ApiError,
  AuthenticateUserData,
  AuthenticateUserResponse,
  TOKEN,
} from '../../shared/utils';

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    mutateAsync: loginMutate,
    isPending,
    error,
    isError,
  } = useMutation<AuthenticateUserResponse, ApiError, AuthenticateUserData>({
    mutationKey: ['authentication'],
    mutationFn: (args) => login(args),
  });

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = (e.target as HTMLFormElement).username.value;
    const password = (e.target as HTMLFormElement).password.value;

    const { token } = await loginMutate({ username, password });

    if (token) {
      localStorage.setItem(TOKEN, token);
      navigate('/');
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: theme.spacing(102.5),
        width: '100%',
        p: `${theme.spacing(5)} 0`,
        m: `0 ${theme.spacing(4)}`,
        borderRadius: theme.spacing(2.5),
        backgroundColor: theme.palette.background.default,
      }}
    >
      <img src='./logo.svg' alt='Logo' style={{ padding: theme.spacing(2) }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: theme.spacing(8),
          height: '100%',
        }}
      >
        {isPending ? (
          <>
            <Spinner />
            <Typography
              variant='h5'
              color={theme.palette.secondary.dark}
              sx={{ p: `${theme.spacing(6)} 0`, fontWeight: 600 }}
            >
              Logging in
            </Typography>
          </>
        ) : (
          <LoginForm
            onSubmit={handleLogin}
            errorMessage={error?.message}
            isError={isError}
          />
        )}
      </Box>
    </Paper>
  );
};

export default Login;
