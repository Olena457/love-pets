import { useNavigate } from 'react-router';
import css from './ModalAction.module.css';
import { useEffect, useCallback } from 'react';
import closeIcons from '../../assets/icons/closeIcons.svg';
import catSmall from '../../assets/imgs/cat-small@1x.png';

const ModalAction = ({ onConfirm, onCancel, message }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    if (onCancel) {
      onCancel();
    }
    navigate('/home');
  };

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape' && onCancel) {
        onCancel();
      }
    },
    [onCancel]
  );

  const handleBackdropClick = e => {
    if (e.target.classList.contains(css.modalBackdrop) && onCancel) {
      onCancel();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onCancel}>
          <img src={closeIcons} className={css.iconCross} />
        </button>
        <div className={css.iconContainer}>
          <img src={catSmall} alt="small cat" className={css.iconCat} />
        </div>
        <p className={css.message}>{message}</p>
        <div className={css.modalActions}>
          <button className={css.confirmButton} onClick={handleConfirm}>
            Yes
          </button>
          <button className={css.cancelButton} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAction;
