import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeMobMenu } from '../../redux/mobile/mobMenuSlice.js';
import { closeModal } from '../../redux/modal/modalSlice.js';
import { logout } from '../../redux/users/usersOperations.js';
import catSmall from '../../assets/imgs/cat-small@1x.png';
import css from './ModalApproveAction.module.css';

const ModalApproveAction = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await dispatch(logout()).unwrap();
      localStorage.clear();
      sessionStorage.clear();
      dispatch(closeMobMenu());
      dispatch(closeModal());
      navigate('/home');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={css.modalWrap}>
      <div className={css.iconImgContainer}>
        <img src={catSmall} alt="small cat" className={css.iconCat} />
      </div>
      <p className={css.title}>Already Leaving?</p>
      <div className={css.modalBtnWrap}>
        <button className={css.confirmButton} onClick={handleLogOut}>
          Yes
        </button>
        <button className={css.cancelButton} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalApproveAction;
