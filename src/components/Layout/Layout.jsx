import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <div className={css.layoutContainer}>{children}</div>
      <div className={css.containerLogo}>
        <Link to="/home" className="homeButton">
          <div className={css.logoMain}></div>
        </Link>
      </div>
      <main className="mainContent">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
