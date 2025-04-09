// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import attentionDog from '../../assets/imgs/attentionDog.png';
// import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
// import { closeModal } from '../../redux/modal/modalSlice.js';
// import { addNoticeToFavorites } from '../../redux/notices/noticesOperations.js';
// import {
//   selectNotices,
//   selectFavorites,
//   selectIsLoading,
//   selectError,
// } from '../../redux/notices/noticesSelectors.js';
// import heartEmpty from '../../assets/icons/heartEmpty.svg';
// import { Stars } from '../Stars/Stars.jsx';
// import css from './ModalNotices.module.css';

// const ModalNotices = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const notice = useSelector(selectNotices);
//   const favorites = useSelector(selectFavorites) || [];
//   const isLoading = useSelector(selectIsLoading);
//   const isError = useSelector(selectError);

//   const handleAddToFavorites = () => {
//     if (!notice || !notice.id) {
//       toast.error('Notice information is missing!');
//       return;
//     }

//     if (favorites.includes(notice.id)) {
//       toast.error('This notice is already in your favorites!');
//       dispatch(closeModal());
//       return;
//     }

//     dispatch(addNoticeToFavorites(notice.id));
//     toast.success('Notice added to favorites!');
//     dispatch(closeModal());
//   };

//   const handleContactClick = () => {
//     if (notice?.user?.phone) {
//       window.location.href = `tel:${notice.user.phone}`;
//     } else {
//       toast.error('Contact information is unavailable!');
//     }
//   };

//   const handleLoginClick = () => {
//     navigate('/login');
//     dispatch(closeModal());
//   };

//   const handleRegisterClick = () => {
//     navigate('/register');
//     dispatch(closeModal());
//   };

//   return (
//     !isLoading &&
//     !isError && (
//       <div className={css.modalWrap}>
//         <div className={css.imageWrap}>
//           {isAuthenticated && (
//             <p className={css.categoryBadge}>{notice?.category || ''}</p>
//           )}
//           <img
//             className={css.noticeImg}
//             src={isAuthenticated ? notice?.imgURL : attentionDog}
//             alt="dog"
//           />
//         </div>
//         <div className={css.textBlock}>
//           <h2 className={css.title}>
//             {isAuthenticated ? notice?.title || '' : 'Attention'}
//           </h2>
//           {isAuthenticated && (
//             <>
//               <div className={css.popularityWrap}>
//                 <Stars popularity={notice?.popularity || 0} />
//                 <p className={css.popularityNumber}>
//                   {notice?.popularity || 0}
//                 </p>
//               </div>
//               <ul className={css.propertyList}>
//                 <li className={css.property}>
//                   <span className={css.accentProperty}>Name:</span>{' '}
//                   {notice?.name || ''}
//                 </li>
//                 <li className={css.property}>
//                   <span className={css.accentProperty}>Birthday:</span>{' '}
//                   {notice?.birthday || ''}
//                 </li>
//                 <li className={css.property}>
//                   <span className={css.accentProperty}>Sex:</span>{' '}
//                   {notice?.sex || ''}
//                 </li>
//                 <li className={css.property}>
//                   <span className={css.accentProperty}>Species:</span>{' '}
//                   {notice?.species || ''}
//                 </li>
//               </ul>
//             </>
//           )}
//           <p className={css.comment}>
//             {isAuthenticated
//               ? notice?.comment || 'No comments available.'
//               : 'Some functionality is available only for authorized users. Please log in or register to access these features.'}
//           </p>
//         </div>
//         <div className={css.btnWrap}>
//           <button
//             className={css.btn}
//             onClick={isAuthenticated ? handleAddToFavorites : handleLoginClick}
//           >
//             {isAuthenticated ? (
//               <>
//                 Add to
//                 <img src={heartEmpty} alt="heart" className={css.iconHeart} />
//               </>
//             ) : (
//               'Login'
//             )}
//           </button>
//           <button
//             className={`${css.btn} ${css.contactBtn}`}
//             onClick={isAuthenticated ? handleContactClick : handleRegisterClick}
//           >
//             {isAuthenticated ? 'Contact' : 'Register'}
//           </button>
//         </div>
//       </div>
//     )
//   );
// };

// export default ModalNotices;
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice.js';
import { addNoticeToFavorites } from '../../redux/notices/noticesOperations.js';
import { toast } from 'react-toastify';
import EmptyWhite from '../../assets/icons/emptyWhite.svg';
import { Stars } from '../Stars/Stars.jsx';
import css from './ModalNotices.module.css';

const ModalNotices = () => {
  const dispatch = useDispatch();
  const notice = useSelector(state => state.notices.selectedNotice);
  const favorites = useSelector(state => state.notices.favorites) || [];

  const handleAddToFavorites = () => {
    if (favorites.includes(notice._id)) {
      toast.error('This notice is already in your favorites!');
    } else {
      dispatch(addNoticeToFavorites(notice._id));
      toast.success('Notice added to favorites!');
    }
    dispatch(closeModal());
  };

  const handleContactClick = () => {
    if (notice?.user?.phone) {
      window.location.href = `tel:${notice.user.phone}`;
    } else {
      toast.error('Contact information is unavailable!');
    }
  };

  return (
    <div className={css.modalWrap}>
      <div className={css.imageWrap}>
        <p className={css.categoryBadge}>{notice?.category}</p>
        <img
          className={css.noticeImg}
          src={notice?.imgURL}
          alt={notice?.title}
        />
      </div>
      <div className={css.textBlock}>
        <h2 className={css.title}>{notice?.title}</h2>
        <div className={css.popularityWrap}>
          <Stars popularity={notice?.popularity || ''} />
          <p className={css.popularityNumber}>{notice?.popularity || ''}</p>
        </div>
        <ul className={css.propertyList}>
          <li className={css.property}>
            <span className={css.accentProperty}>Name:</span> {notice?.name}
          </li>
          <li className={css.property}>
            <span className={css.accentProperty}>Birthday:</span>
            {notice?.birthday || 'Unknown'}
          </li>
          <li className={css.property}>
            <span className={css.accentProperty}>Sex:</span> {notice?.sex}
          </li>
          <li className={css.property}>
            <span className={css.accentProperty}>Species:</span>
            {notice?.species}
          </li>
        </ul>
        <p className={css.comment}>{notice?.comment}</p>
      </div>
      <div className={css.btnWrap}>
        <button className={css.btn} onClick={handleAddToFavorites}>
          Add to
          <img src={EmptyWhite} alt="heart" className={css.icon} />
        </button>
        <button
          className={`${css.btn} ${css.contactBtn}`}
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default ModalNotices;
