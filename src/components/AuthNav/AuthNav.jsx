import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './AuthNav.module.css';
const AuthNav = ({ onClose }) => {
  const location = useLocation();
  const isHome = location.pathname === '/home';
  return (
    <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ''}`}>
      <Link to="/login" className={css.loginButton} onClick={onClose}>
        LOG IN
      </Link>
      <Link to="/register" className={css.registerButton} onClick={onClose}>
        REGISTER
      </Link>
    </div>
  );
};
export default AuthNav;
