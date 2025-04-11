// import { useSelector } from 'react-redux';
// import blackBurger from '../../assets/icons/blackBurger.svg';
// import whiteBurger from '../../assets/icons/whiteBurger.svg';
// import { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
// import closeIcons from '../../assets/icons/closeIcons.svg';
// import css from './NavBar.module.css';
// import UserNav from '../UserNav/UserNav.jsx';
// import AuthNav from '../AuthNav/AuthNav.jsx';
// import UserBar from '../UserBar/UserBar.jsx';

// const NavBar = () => {
//   const location = useLocation();
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const isHomePage = location.pathname === '/home';
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const isActive = path => location.pathname === path;
//   const shouldShowUserBar =
//     isAuthenticated && !['/register', '/login'].includes(location.pathname);

//   useEffect(() => {
//     const handleClickOutside = event => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [menuOpen]);

//   return (
//     <nav>
//       <div className={`${css.nav} ${isHomePage ? css.homeNav : css.otherNav}`}>
//         <div className={css.container}>
//           <div className={css.headerNav}>
//             <div className={css.headerMenu}>
//               <Link
//                 to="/news"
//                 className={`${css.menuItem} ${
//                   isActive('/news') ? css.active : ''
//                 }`}
//               >
//                 News
//               </Link>
//               <Link
//                 to="/notices"
//                 className={`${css.menuItem} ${
//                   isActive('/notices') ? css.active : ''
//                 }`}
//               >
//                 Find pet
//               </Link>
//               <Link
//                 to="/our-friends"
//                 className={`${css.menuItem} ${
//                   isActive('/our-friends') ? css.active : ''
//                 }`}
//               >
//                 Our friends
//               </Link>
//             </div>
//             {isAuthenticated ? (
//               <UserNav onClose={() => setMenuOpen(false)} />
//             ) : (
//               <AuthNav onClose={() => setMenuOpen(false)} />
//             )}
//           </div>
//           <div className={css.icons}>
//             {shouldShowUserBar && <UserBar />}
//             <button className={css.burgerButton} onClick={toggleMenu}>
//               <img
//                 src={isHomePage ? whiteBurger : blackBurger}
//                 alt={isHomePage ? 'white burger' : 'black burger'}
//                 width="40"
//                 height="40"
//                 className={css.burgerIcon}
//               />
//             </button>
//           </div>
//         </div>
//         {menuOpen && (
//           <div
//             className={`${css.burgerMenu} ${
//               isHomePage ? css.burgerMenuHome : css.burgerMenuOther
//             }`}
//             ref={menuRef}
//           >
//             <img src={closeIcons} alt="close" width="40" height="40" />
//             <ul className={css.menuList}>
//               <li>
//                 <Link
//                   to="/news"
//                   className={`${css.menuItem} ${
//                     isActive('/news') ? css.active : ''
//                   }`}
//                   onClick={toggleMenu}
//                 >
//                   News
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/find-pet"
//                   className={`${css.menuItem} ${
//                     isActive('/find-pet') ? css.active : ''
//                   }`}
//                   onClick={toggleMenu}
//                 >
//                   Find pet
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/our-friends"
//                   className={`${css.menuItem} ${
//                     isActive('/our-friends') ? css.active : ''
//                   }`}
//                   onClick={toggleMenu}
//                 >
//                   Our friends
//                 </Link>
//               </li>
//             </ul>
//             <div className={css.authButtons}>
//               {isAuthenticated ? (
//                 <UserNav onClose={() => setMenuOpen(false)} />
//               ) : (
//                 <AuthNav onClose={() => setMenuOpen(false)} />
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import { useSelector, useDispatch } from 'react-redux';
import blackBurger from '../../assets/icons/blackBurger.svg';
import whiteBurger from '../../assets/icons/whiteBurger.svg';
import { Link, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
import { selectIsOpenMobMenu } from '../../redux/mobile/mobMenuSelectors.js';
import { openMobMenu, closeMobMenu } from '../../redux/mobile/mobMenuSlice.js';
import css from './NavBar.module.css';
import UserNav from '../UserNav/UserNav.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import UserBar from '../UserBar/UserBar.jsx';
import { MobMenu } from '../MobMenu/MobMenu.jsx';

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
          {/* <div className={css.headerNav}> */}
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
        {/* </div> */}
      </div>
      {isMobMenuOpen && <MobMenu />}
    </nav>
  );
};

export default NavBar;
