import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../redux/users/usersSelectors.js';

const RestrictedRoute = ({ component: Component, redirectTo = '/home' }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
