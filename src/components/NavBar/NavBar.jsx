import { useSelector } from 'react-redux';
import Icon from '../Icon/Icon.jsx';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
import LogoChange from '../LogoChange/LogoChange.jsx';
import css from './NavBar.module.css';
import UserNav from '../UserNav/UserNav.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import UserBar from '../UserBar/UserBar.jsx';

const NavBar = () => {
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isHomePage = location.pathname === '/home';
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = path => location.pathname === path;
  const shouldShowUserBar =
    isAuthenticated &&
    location.pathname !== '/register' &&
    location.pathname !== '/login';

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav>
      <div className={`${css.nav} ${isHomePage ? css.homeNav : ''}`}>
        <div className={css.container}>
          <div className={css.headerNav}>
            <LogoChange isHomePage={isHomePage} />
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
                to="/friends"
                className={`${css.menuItem} ${
                  isActive('/friends') ? css.active : ''
                }`}
              >
                Our friends
              </Link>
            </div>
            {isAuthenticated ? (
              <UserNav onClose={() => setMenuOpen(false)} />
            ) : (
              <AuthNav onClose={() => setMenuOpen(false)} />
            )}
          </div>
          <div className={css.icons}>
            {shouldShowUserBar && <UserBar />}
            <button className={css.menuButton} onClick={toggleMenu}>
              <Icon id="menu" width={32} height={32} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className={css.burgerMenu} ref={menuRef}>
            <Icon
              id="cross"
              width={32}
              height={32}
              className={css.closeIcon}
              onClick={toggleMenu}
            />
            <ul className={css.menuList}>
              <li>
                <Link
                  to="/news"
                  className={`${css.menuItem} ${
                    isActive('/news') ? css.active : ''
                  }`}
                  onClick={toggleMenu}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/notices"
                  className={`${css.menuItem} ${
                    isActive('/notices') ? css.active : ''
                  }`}
                  onClick={toggleMenu}
                >
                  Find pet
                </Link>
              </li>
              <li>
                <Link
                  to="/friends"
                  className={`${css.menuItem} ${
                    isActive('/friends') ? css.active : ''
                  }`}
                  onClick={toggleMenu}
                >
                  Our friends
                </Link>
              </li>
            </ul>
            <div className={css.authButtons}>
              {isAuthenticated ? (
                <UserNav onClose={() => setMenuOpen(false)} />
              ) : (
                <AuthNav onClose={() => setMenuOpen(false)} />
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
