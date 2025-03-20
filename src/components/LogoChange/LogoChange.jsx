import css from './LogoChange.module.css';
import { Link, useLocation } from 'react-router-dom';

const LogoChange = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <div className={`${css.nav} ${isHomePage ? css.homeNav : ''}`}>
      <div className={css.container}>
        <div className={css.headerNav}>
          <Link to="/home" className={css.logo}>
            {isHomePage ? (
              <div className={css.white}>Petl🤍ve</div>
            ) : (
              <div className={css.color}>Petl💛ve</div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoChange;
