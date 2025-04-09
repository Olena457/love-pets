import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeModal } from '../../redux/modal/modalSlice.js';
import attentionDog from '../../assets/imgs/attentionDog.png';
import css from './ModalAttention.module.css';

const ModalAttention = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
    dispatch(closeModal());
  };

  const handleRegisterClick = () => {
    navigate('/register');
    dispatch(closeModal());
  };

  return (
    <div className={css.modalWrap}>
      <img className={css.noticeImg} src={attentionDog} alt="Attention" />
      <div className={css.textWrap}>
        <h2 className={css.title}>Attention</h2>
        <p className={css.comment}>
          Some functionality is available only for authorized users. If you have
          an account, please log in. Otherwise, please register to access all
          features.
        </p>
      </div>
      <div className={css.btnWrap}>
        <button
          className={`${css.btn} ${css.loginBtn}`}
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className={`${css.btn} ${css.registerBtn}`}
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default ModalAttention;
