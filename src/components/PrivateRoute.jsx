import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/users/usersSelectors.js';

function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? Component : <Navigate to={redirectTo} />;
}
export default PrivateRoute;
