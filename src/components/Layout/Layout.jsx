import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <div className={css.layoutContainer}>{children}</div>
      <Outlet />
    </>
  );
};

export default Layout;
