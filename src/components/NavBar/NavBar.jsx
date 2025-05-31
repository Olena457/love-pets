import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
import { selectIsOpenMobMenu } from '../../redux/mobile/mobMenuSelectors.js';
import { openMobMenu, closeMobMenu } from '../../redux/mobile/mobMenuSlice.js';
import { MobMenu } from '../MobMenu/MobMenu.jsx';
import UserNav from '../UserNav/UserNav.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import UserBar from '../UserBar/UserBar.jsx';
import blackBurger from '../../assets/icons/blackBurger.svg';
import whiteBurger from '../../assets/icons/whiteBurger.svg';
import css from './NavBar.module.css';

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isMobMenuOpen = useSelector(selectIsOpenMobMenu);
  const isHomePage = location.pathname === '/home';

  const isActive = path => location.pathname === path;
  const shouldShowUserBar =
    isAuthenticated && !['/register', '/login'].includes(location.pathname);

  const handleBurgerClick = () => {
    dispatch(openMobMenu());
  };

  const handleMenuClose = () => {
    dispatch(closeMobMenu());
  };

  return (
    <nav>
      <div className={`${css.nav} ${isHomePage ? css.homeNav : css.otherNav}`}>
        <div className={css.container}>
          <div className={css.headerNav}>
            <div className={css.headerMenu}>
              <Link
                to="/news"
                className={`${css.menuItem} ${
                  isActive('/news') ? css.active : ''
                }`}
              >
                News
              </Link>
              <Link
                to="/notices"
                className={`${css.menuItem} ${
                  isActive('/notices') ? css.active : ''
                }`}
              >
                Find pet
              </Link>
              <Link
                to="/our-friends"
                className={`${css.menuItem} ${
                  isActive('/our-friends') ? css.active : ''
                }`}
              >
                Our friends
              </Link>
            </div>
            {isAuthenticated ? (
              <UserNav onClose={handleMenuClose} />
            ) : (
              <AuthNav onClose={handleMenuClose} />
            )}
          </div>
          <div className={css.iconsWrap}>
            {shouldShowUserBar && <UserBar />}
            <button
              className={`${css.burgerButton} ${
                isHomePage ? css.whiteIcon : css.blackIcon
              }`}
              onClick={handleBurgerClick}
            >
              <img
                src={isHomePage ? whiteBurger : blackBurger}
                alt={isHomePage ? 'white burger' : 'black burger'}
                width="40"
                height="40"
                className={css.burgerIcon}
              />
            </button>
          </div>
        </div>
      </div>
      {isMobMenuOpen && <MobMenu />}
    </nav>
  );
};

export default NavBar;
