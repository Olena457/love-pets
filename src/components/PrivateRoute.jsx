import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/users/usersSelectors.js';

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };
// export default PrivateRoute;
function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? Component : <Navigate to={redirectTo} />;
}
export default PrivateRoute;
