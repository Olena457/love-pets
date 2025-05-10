import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/users/usersSelectors.js';
import { useLocation } from 'react-router-dom';
// import { closeMobMenu } from '../../redux/mobile/mobMenuSlice.js';
// import { openApproveModal } from '../../redux/modal/modalSlice.js';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors.js';
import Modal from '../Modal/Modal.jsx';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction.jsx';
import css from './UserNav.module.css';
import LogoutButton from '../LogoutButton/LogoutButton.jsx';

const UserNav = () => {
  const user = useSelector(selectUser);
  const isModalOpen = useSelector(selectIsOpenModal);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === '/home');
  }, [location.pathname]);

  return (
    <div className={css.authNav}>
      {user && (
        <>
          <LogoutButton isHomePage={isHomePage} />
          {isModalOpen && (
            <Modal>
              <ModalApproveAction />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default UserNav;

// const UserNav = () => {
//   const user = useSelector(selectUser);
//   const isModalOpen = useSelector(selectIsOpenModal);
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const [isHomePage, setIsHomePage] = useState(false);

//   useEffect(() => {
//     setIsHomePage(location.pathname === '/home');
//   }, [location.pathname]);

//   const handleLogoutClick = () => {
//     dispatch(closeMobMenu());
//     dispatch(openApproveModal());
//   };

//   return (
//     <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ''}`}>
//       {user ? (
//         <>
//           <button
//             className={`${css.logoutButton} ${isHomePage ? css.homeStyle : ''}`}
//             onClick={handleLogoutClick}
//           >
//             LOG OUT
//           </button>
//           <Modal>{isModalOpen && <ModalApproveAction />}</Modal>
//         </>
//       ) : null}
//     </div>
//   );
// };

// export default UserNav;
