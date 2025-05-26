import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

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
