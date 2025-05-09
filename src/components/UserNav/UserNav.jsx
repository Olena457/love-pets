// import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { signout } from '../../redux/users/usersOperations.js';
// import ModalApproveAction from '../ModalApproveAction/ModalApproveAction.jsx';
// import { selectUser } from '../../redux/users/usersSelectors.js';
// import css from './UserNav.module.css';

// const UserNav = ({ onClose }) => {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/home';
//   const dispatch = useDispatch();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const user = useSelector(selectUser);

//   const handleLogout = () => {
//     dispatch(signout());
//     if (onClose) {
//       onClose();
//     }
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ''}`}>
//       {user?.isRegistered && user?.isLoggedIn && (
//         <>
//           <button className={css.logoutButton} onClick={openModal}>
//             LOG OUT
//           </button>
//           {isModalOpen && (
//             <ModalApproveAction
//               onConfirm={handleLogout}
//               onCansel={closeModal}
//               message="Already leaving?"
//             />
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default UserNav;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/users/usersSelectors.js';
import { useLocation } from 'react-router-dom';
import { closeMobMenu } from '../../redux/mobile/mobMenuSlice.js';
import { openApproveModal } from '../../redux/modal/modalSlice.js';
import css from './UserNav.module.css';

const UserNav = () => {
  const user = useSelector(selectUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        setIsHome(true);
        break;

      default:
        setIsHome(false);
        break;
    }
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(closeMobMenu());
    dispatch(openApproveModal());
  };

  return (
    <div className={`${css.authNav} ${isHome ? css.authNavHome : ''}`}>
      {user && (
        <button
          className={`${css.logoutButton} ${isHome ? css.homeStyle : ''}`}
          onClick={handleLogout}
        >
          LOG OUT
        </button>
      )}
    </div>
  );
};
export default UserNav;
