// import { useLocation } from 'react-router-dom';

// import LogoChange from '../LogoChange/LogoChange.jsx';
// import NavBar from '../NavBar/NavBar.jsx';
// import css from './Header.module.css';
// const Header = () => {
//   const location = useLocation();
//   const isHomePage = location.pathname === './home';
//   return (
//     <header className={`${css.header} ${isHomePage ? css.homeHeader : ''}`}>
//       <LogoChange />
//       <NavBar />
//     </header>
//   );
// };

// export default Header;
import { useLocation } from 'react-router-dom';
import LogoChange from '../LogoChange/LogoChange.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import css from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <header className={`${css.header} ${isHomePage ? css.homeHeader : ''}`}>
      <LogoChange />
      <NavBar />
    </header>
  );
};

export default Header;
