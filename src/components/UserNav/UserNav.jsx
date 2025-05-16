import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  selectUser,
  selectIsAuthenticated,
} from '../../redux/users/usersSelectors.js';
// import { selectIsOpenModal } from '../../redux/modal/modalSelectors.js';
// import Modal from '../Modal/Modal.jsx';
// import ModalApproveAction from '../ModalApproveAction/ModalApproveAction.jsx';
import LogoutButton from '../LogoutButton/LogoutButton.jsx';
import css from './UserNav.module.css';

const UserNav = () => {
  const isUser = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  // const isModalOpen = useSelector(selectIsOpenModal);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === '/home');
  }, [location.pathname]);

  return (
    <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ''}`}>
      {isAuthenticated ? (
        <>
          <div className={css.logoutButtonContainer}>
            <LogoutButton isHomePage={isHomePage} />
          </div>
          <span className={css.userName}>{isUser?.name}</span>
          {/* <Modal>{isModalOpen && <ModalApproveAction />}</Modal> */}
        </>
      ) : null}
    </div>
  );
};

export default UserNav;
