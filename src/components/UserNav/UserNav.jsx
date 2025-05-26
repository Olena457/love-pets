import { useLocation } from 'react-router-dom';
import { selectUser } from '../../redux/users/usersSelectors.js';
import { useSelector, useDispatch } from 'react-redux';
import { openApproveModal } from '../../redux/modal/modalSlice.js';
import { closeMobMenu } from '../../redux/mobile/mobMenuSlice.js';
import css from './UserNav.module.css';

const UserNav = ({ isHomePage }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const location = useLocation();

  const logoutHandler = () => {
    dispatch(closeMobMenu());
    dispatch(openApproveModal());
  };

  return (
    <div className={css.menuList}>
      {user && location.pathname !== '/add-pet' && (
        <button
          type="button"
          className={`${css.logoutButton} ${
            isHomePage ? css.logoutButtonHome : css.logoutButtonDefault
          }`}
          onClick={logoutHandler}
        >
          LOG OUT
        </button>
      )}
    </div>
  );
};

export default UserNav;
