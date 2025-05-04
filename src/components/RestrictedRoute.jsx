import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/users/usersSelectors.js';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/home' }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
