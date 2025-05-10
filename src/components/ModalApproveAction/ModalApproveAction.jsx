// import { useNavigate } from 'react-router-dom';
// import { closeModal } from '../../redux/modal/modalSlice.js';
// import { useDispatch } from 'react-redux';
// import { signout } from '../../redux/users/usersOperations.js';
// import css from './ModalApproveAction.module.css';
// import catSmall from '../../assets/imgs/cat-small@1x.png';

// const ModalApproveAction = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogOut = () => {
//     dispatch(signout());
//     localStorage.clear();
//     sessionStorage.clear();
//     dispatch(closeModal());
//     navigate('/home');
//   };

//   return (
//     <div className={css.modalWrap}>
//       <div className={css.iconImgContainer}>
//         <img src={catSmall} alt="small cat" className={css.iconCat} />
//       </div>
//       <p className={css.title}>Already Leaving?</p>
//       <div className={css.modalBtnWrap}>
//         <button className={css.confirmButton} onClick={handleLogOut}>
//           Yes
//         </button>
//         <button
//           className={css.cancelButton}
//           // onClick={() => dispatch(closeModal)}
//           onClick={() => dispatch(closeModal())}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ModalApproveAction;
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice.js';
import { signout } from '../../redux/users/usersOperations.js';
import css from './ModalApproveAction.module.css';
import catSmall from '../../assets/imgs/cat-small@1x.png';

const ModalApproveAction = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await dispatch(signout()).unwrap();
      localStorage.clear();
      sessionStorage.clear();
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
