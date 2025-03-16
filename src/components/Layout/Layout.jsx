import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layoutContainer}>{children}</div>
      <Outlet />
    </>
  );
};

export default Layout;
