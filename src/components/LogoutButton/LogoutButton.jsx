import { useDispatch } from 'react-redux';
import { closeMobMenu } from '../../redux/mobile/mobMenuSlice.js';
import { openApproveModal } from '../../redux/modal/modalSlice.js';
import css from './LogoutButton.module.css';

const LogoutButton = ({ isHomePage }) => {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(closeMobMenu());
    dispatch(openApproveModal());
  };

  return (
    <button
      className={`${css.logoutButton} ${
        isHomePage ? css.logoutButtonHome : css.logoutButtonDefault
      }`}
      onClick={handleLogoutClick}
    >
      LOG OUT
    </button>
  );
};

export default LogoutButton;
