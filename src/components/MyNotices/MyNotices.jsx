import { Outlet, NavLink } from 'react-router-dom';
import css from './MyNotices.module.css';

const MyNotices = () => {
  return (
    <div className={css.myNoticesWrap}>
      <div className={css.wrapperLink}>
        <NavLink
          className={`${css.navLink} ${css.navLinkFavorite}`}
          to="favorites"
        >
          My favorites pets
        </NavLink>
        <NavLink className={`${css.navLink} ${css.navLinkView}`} to="viewed">
          Viewed
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MyNotices;
