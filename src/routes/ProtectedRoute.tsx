import { useEffect, useMemo } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { TOKEN } from '../shared/utils';
import Header from '../shared/components/Header';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = useMemo(() => !!localStorage.getItem(TOKEN), []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to='/login' replace />
  );
};

export default ProtectedRoute;
