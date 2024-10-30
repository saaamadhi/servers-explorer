import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path='/'>
        <Route path='login' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Switch>
  );
};

export default Routes;
