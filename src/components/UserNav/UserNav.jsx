// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../redux/users/usersSelectors.js';
// import { useLocation } from 'react-router-dom';
// import { closeMobMenu } from '../../redux/mobile/mobMenuSlice.js';
// import { openApproveModal } from '../../redux/modal/modalSlice.js';
// import css from './UserNav.module.css';

// const UserNav = () => {
//   const user = useSelector(selectUser);
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const [isHomePage, setIsHomePage] = useState(false);

//   useEffect(() => {
//     switch (location.pathname) {
//       case '/home':
//         setIsHomePage(true);
//         break;

//       default:
//         setIsHomePage(false);
//         break;
//     }
//   }, [location.pathname]);

//   const handleLogout = () => {
//     dispatch(closeMobMenu());
//     dispatch(openApproveModal());
//   };

//   return (
//     <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ''}`}>
//       {user && (
//         <button
//           className={`${css.logoutButton} ${isHomePage ? css.homeStyle : ''}`}
//           onClick={handleLogout}
//         >
//           LOG OUT
//         </button>
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
import { selectIsModalOpen } from '../../redux/modal/modalSelectors.js';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction.jsx';
import css from './UserNav.module.css';

const UserNav = () => {
  const user = useSelector(selectUser);
  const isModalOpen = useSelector(selectIsModalOpen);
  const location = useLocation();
  const dispatch = useDispatch();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === '/home');
  }, [location.pathname]);

  const handleLogoutClick = () => {
    dispatch(closeMobMenu());
    dispatch(openApproveModal());
  };

  return (
    <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ''}`}>
      {user?.isRegistered && user?.isLoggedIn && (
        <>
          <button
            className={`${css.logoutButton} ${isHomePage ? css.homeStyle : ''}`}
            onClick={handleLogoutClick}
          >
            LOG OUT
          </button>
          {isModalOpen && <ModalApproveAction />}
        </>
      )}
    </div>
  );
};

export default UserNav;
