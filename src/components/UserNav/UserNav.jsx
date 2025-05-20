// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { selectProfile } from '../../redux/profile/profileSelectors.js';
// import {
//   selectIsAuthenticated,
// } from '../../redux/users/usersSelectors.js';
// import { selectIsOpenModal } from '../../redux/modal/modalSelectors.js';
// import ModalApproveAction from '../ModalApproveAction/ModalApproveAction.jsx';
// import LogoutButton from '../LogoutButton/LogoutButton.jsx';
// import css from './UserNav.module.css';

// const UserNav = () => {
//   const isProfile = useSelector(selectProfile);
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const isModalOpen = useSelector(selectIsOpenModal);
//   const location = useLocation();
//   const [isHomePage, setIsHomePage] = useState(false);

//   useEffect(() => {
//     setIsHomePage(location.pathname === '/home');
//   }, [location.pathname]);

//   return (

//            <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ''}`}>
//        {isAuthenticated ? (
//          <>
//            <div className={css.logoutButtonContainer}>
//             <LogoutButton isHomePage={isHomePage} />
//            </div>
//            {isModalOpen && <ModalApproveAction />}
//     <span className={css.userName}>{isProfile?.name}</span>
//         </>
//       ) : null}
//     </div>
//   );
// };

// export default UserNav;
// import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors.js';
import { selectProfile } from '../../redux/profile/profileSelectors.js';
import { openApproveModal, closeModal } from '../../redux/modal/modalSlice.js';
import Modal from '../Modal/Modal.jsx';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction.jsx';
import LogoutButton from '../LogoutButton/LogoutButton.jsx';
import css from './UserNav.module.css';

const UserNav = ({ isHomePage }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isModalOpen = useSelector(selectIsOpenModal);
  const profile = useSelector(selectProfile);

  return (
    <div className={css.menuList}>
      {isAuthenticated ? (
        <>
          <span className={css.userName}>{profile?.name}</span>
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
