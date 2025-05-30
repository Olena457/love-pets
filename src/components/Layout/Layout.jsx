import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className={css.container}>{children}</div>
      <Outlet />
    </>
  );
};

export default Layout;
