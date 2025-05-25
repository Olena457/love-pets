// import { useLocation } from 'react-router-dom';
// import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
// import { selectProfile } from '../../redux/profile/profileSelectors.js';
// import { selectIsOpenModal } from '../../redux/modal/modalSelectors.js';
import { selectUser } from '../../redux/users/usersSelectors.js';
import { useSelector, useDispatch } from 'react-redux';
import { openApproveModal } from '../../redux/modal/modalSlice.js';
import { closeMobMenu } from '../../redux/mobile/mobMenuSlice.js';
// import Modal from '../Modal/Modal.jsx';
// import ModalApproveAction from '../ModalApproveAction/ModalApproveAction.jsx';
// import LogoutButton from '../LogoutButton/LogoutButton.jsx';
import css from './UserNav.module.css';

const UserNav = ({ isHomePage }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  // const isModalOpen = useSelector(selectIsOpenModal);
  const logoutHandler = () => {
    dispatch(closeMobMenu());
    dispatch(openApproveModal());
  };

  return (
    <div className={css.menuList}>
      {user ? (
        <button
          type="button"
          className={`${css.logoutButton} ${
            isHomePage ? css.logoutButtonHome : css.logoutButtonDefault
          }`}
          onClick={logoutHandler}
        >
          LOG OUT
        </button>
      ) : null}
    </div>
  );
};

export default UserNav;
{
  /* {isModalOpen && (
            <Modal>
              <ModalApproveAction onClose={() => dispatch(closeModal())} />
            </Modal>
          )} */
}
