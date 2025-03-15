import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import css from './UserNav.module.css';
import { useState } from 'react';
import { singout } from '../../redux/users/usersOperations.js';
import ModalAction from '../ModalAction/ModalAction.jsx';

const UserNav = ({ onClose }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogout = () => {
    dispatch(singout());
    if (onClose) {
      onClose();
    }
  };
  const openModal = () => {
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ''}`}>
      <button className={css.logoutButton} onClick={openModal}>
        LOG OUT
      </button>
      {isModalOpen && (
        <ModalAction
          onConfirm={handleLogout}
          onCansel={closeModal}
          message="Already leaving?"
        />
      )}
    </div>
  );
};

export default UserNav;
