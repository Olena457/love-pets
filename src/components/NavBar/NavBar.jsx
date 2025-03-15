import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from '../../redux/users/selectors';
import Icon from '../../components/Icon/Icon';
import css from './Nav.module.css';
import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import UserBar from '../UserBar/UserBar';

const Nav = () => {
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
    <nav className={`${css.nav} ${isHomePage ? css.homeNav : ''}`}>
      <div className={css.container}>
        <div className={css.headerNav}>
          <Icon
            id={isHomePage ? 'logo-white' : 'logo'}
            width={150}
            height={50}
            className={css.logo}
          />

          {/* Меню навігації */}
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
            <Icon id="menu-icon" width={32} height={32} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={css.burgerMenu} ref={menuRef}>
          <Icon
            id="close-icon"
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
    </nav>
  );
};

export default Nav;
