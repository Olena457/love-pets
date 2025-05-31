import { Link, useLocation } from 'react-router-dom';
import heartFull from '../../assets/icons/heartFull.svg';
import heartWhite from '../../assets/icons/heartWhite.svg';
import css from './LogoChange.module.css';
import Icon from '../../components/Icon/Icon.jsx';

const LogoChange = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <div className={`${css.nav} ${isHomePage ? css.homeNav : ''}`}>
      <div className={css.container}>
        <div className={css.headerNav}>
          <div className={css.logoContainer}>
            <Link to="/" className={css.petAvatar}>
              <Icon id="paw" width={22} height={22} className={css.iconPaw} />
            </Link>
            <Link to="/home" className={css.logo}>
              {isHomePage ? (
                <div className={css.white}>
                  Petl
                  <img
                    src={heartWhite}
                    className={css.heartIcon}
                    alt="White Heart Icon"
                  />
                  ve
                </div>
              ) : (
                <div className={css.color}>
                  Petl
                  <img
                    src={heartFull}
                    className={css.heartIcon}
                    alt="Yellow Heart Icon"
                  />
                  ve
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoChange;
