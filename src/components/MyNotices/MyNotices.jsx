import { Outlet, NavLink } from 'react-router-dom';
import styles from './MyNotices.module.css';

const MyNotices = () => {
  return (
    <div className={styles.myNoticesWrap}>
      <div className={styles.myNoticesList}>
        <NavLink className={styles.navLinkFavorite} to="favorites">
          My favorites pets
        </NavLink>
        <NavLink className={styles.navLinkView} to="viewed">
          Viewed
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MyNotices;
