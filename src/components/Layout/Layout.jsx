import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <div className={css.layoutContainer}>{children}</div>

      <main className="mainContent">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
