import { useNavigate } from 'react-router-dom';
import css from './ModalApproveAction.module.css';
import catSmall from '../../assets/imgs/cat-small@1x.png';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice.js';
import { signout } from '../../redux/users/usersOperations.js';
const ModalApproveAction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogOut = () => {
    dispatch(signout());
    dispatch(closeModal());
    navigate('/home');
  };

  return (
    <div className={css.modalWrap}>
      <div className={css.iconImgContainer}>
        <img src={catSmall} alt="small cat" className={css.iconCat} />
      </div>
      <p className={css.title}>Already Leaving?</p>
      <div className={css.modalBtnWrap}>
        <button className={css.confirmButton} onClick={handlerLogOut}>
          Yes
        </button>
        <button
          className={css.cancelButton}
          onClick={() => dispatch(closeModal)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalApproveAction;
