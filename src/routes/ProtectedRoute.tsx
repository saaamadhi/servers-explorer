import { useEffect, useMemo } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Header from '../shared/components/Header';
import { TOKEN } from '../shared/utils';

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
