import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice.js';
import Icon from '../../components/Icon/Icon.jsx';
import css from './Modal.module.css';

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  const handleCloseClick = () => {
    dispatch(closeModal());
  };

  return (
    <div className={css.modalOverlay} onClick={handleOverlayClick}>
      <div className={css.modalContainer}>
        <button className={css.modalBtn} onClick={handleCloseClick}>
          <Icon id="cross-small" width={24} height={24} className={css.icon} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
