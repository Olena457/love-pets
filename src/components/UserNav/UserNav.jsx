// import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors.js';
// import { selectProfile } from '../../redux/profile/profileSelectors.js';
import { openApproveModal, closeModal } from '../../redux/modal/modalSlice.js';
import Modal from '../Modal/Modal.jsx';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction.jsx';
import LogoutButton from '../LogoutButton/LogoutButton.jsx';
import css from './UserNav.module.css';

const UserNav = ({ isHomePage }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isModalOpen = useSelector(selectIsOpenModal);

  return (
    <div className={css.menuList}>
      {isAuthenticated ? (
        <>
          <LogoutButton
            isHomePage={isHomePage}
            onClick={() => dispatch(openApproveModal())}
          />
          {isModalOpen && (
            <Modal>
              <ModalApproveAction onClose={() => dispatch(closeModal())} />
            </Modal>
          )}
        </>
      ) : null}
    </div>
  );
};

export default UserNav;
