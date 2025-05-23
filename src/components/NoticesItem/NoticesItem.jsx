// import css from './NoticesItem.module.css';
// import starYellow from '../../assets/icons/starYellow.svg';
// import trashIcon from '../../assets/icons/trashDel.svg';
// import heartIcon from '../../assets/icons/heartEmpty.svg';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
// import { fetchProfileFull } from '../../redux/profile/profileSlice.js';
// import { openModal } from '../../redux/modal/modalSlice.js';
// import { toast } from 'react-toastify';
// import {
//   fetchNoticeById,
//   addNoticeToFavorites,
//   deleteFromFavorites,
// } from '../../redux/notices/noticesOperations.js';

// const NoticesItem = ({ notice, profile, viewed }) => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const isFavorite = profile?.favorites?.some(fav => fav._id === notice._id);

//   const handleLearnMore = async () => {
//     if (isAuthenticated) {
//       dispatch(fetchNoticeById(notice._id));
//       dispatch(openModal());
//     } else {
//       // dispatch(setModalData(null));
//       dispatch(openModal());
//     }
//   };

//   const handleToggleFavorite = async () => {
//     if (!isAuthenticated) {
//       // dispatch(setModalData(null));
//       dispatch(openModal());
//       return;
//     }

//     if (isFavorite) {
//       dispatch(deleteFromFavorites(notice._id));
//       toast.info(`Notice "${notice.title}" has been removed from favorites!`);
//     } else {
//       dispatch(addNoticeToFavorites(notice._id));
//       toast.success(`Notice "${notice.title}" has been added to favorites!`);
//     }
//     dispatch(fetchProfileFull());
//   };

//   return (
//     <div className={css.item}>
//       <img src={notice.imgURL} alt={notice.title} className={css.image} />
//       <div className={css.titleContainer}>
//         <h2 className={css.title}>{notice.title}</h2>
//         <div className={css.popularity}>
//           <img
//             src={starYellow}
//             alt="star"
//             width="24"
//             height="24"
//             className={css.star}
//           />
//           <span>{notice.popularity}</span>
//         </div>
//       </div>
//       <div className={css.infoContainer}>
//         <p>
//           <b className={css.info}>Name:</b> {notice.name}
//         </p>
//         <p>
//           <b className={css.info}>Birthday:</b>{' '}
//           {notice.birthday
//             ? new Date(notice.birthday).toLocaleDateString('uk-UA')
//             : 'Unknown'}
//         </p>
//         <p>
//           <b className={css.info}>Sex:</b> {notice.sex}
//         </p>
//         <p>
//           <b className={css.info}>Species:</b> {notice.species}
//         </p>
//         <p>
//           <b className={css.info}>Category:</b> {notice.category}
//         </p>
//       </div>
//       <p className={css.comment}>{notice.comment}</p>
//       <div className={css.priceContainer}>
//         {notice.price > 0 ? (
//           <span className={css.price}>${notice.price}</span>
//         ) : (
//           <span className={css.negotiable}>Price negotiable</span>
//         )}
//       </div>
//       {isAuthenticated ? (
//       <div className={css.actions}>
//          <button
//           data-profile={profile}
//           onClick={handleLearnMore}
//           className={css.learnMoreBtn}
//         >
//           Learn more
//         </button>

//           isFavorite ? (
//             <button
//               data-profile={profile}
//               className={`${css.favorite} ${css.removeFavorite}`}
//               onClick={handleToggleFavorite}
//             >
//               <img src={trashIcon} alt="trash" width="18" height="18" />
//             </button>
//           ) : (
//             <button
//               data-viewed={viewed}
//               data-profile={profile}
//               onClick={handleToggleFavorite}
//               className={css.favorite}
//             >
//               <img src={trashIcon} alt="trash" width="18" height="18" />
//             </button>
//           )
//         ) : (
//           <button
//             data-profile={profile}
//             className={`${css.favorite} ${css.addFavorite}`}
//             onClick={handleToggleFavorite}
//           >
//             <img src={heartIcon} alt="heart" width="18" height="18" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NoticesItem;
import css from './NoticesItem.module.css';
import starYellow from '../../assets/icons/starYellow.svg';
import trashIcon from '../../assets/icons/trashDel.svg';
import heartIcon from '../../assets/icons/heartEmpty.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
import { fetchProfileFull } from '../../redux/profile/profileSlice.js';
import { openModal } from '../../redux/modal/modalSlice.js';
// import { setModalData } from '../../redux/modal/modalSlice.js'; // Якщо потрібно, розкоментуйте
import { toast } from 'react-toastify';
import {
  fetchNoticeById,
  addNoticeToFavorites,
  deleteFromFavorites,
} from '../../redux/notices/noticesOperations.js';
import { selectProfile } from '../../redux/profile/profileSelectors.js';

const NoticesItem = ({ notice, profile, viewed }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userProfile = useSelector(selectProfile);

  const isFavorite = userProfile?.noticesFavorites?.some(
    fav => fav._id === notice._id
  );

  const handleLearnMore = async () => {
    if (isAuthenticated) {
      dispatch(fetchNoticeById(notice._id));
      dispatch(openModal());
    } else {
      // dispatch(setModalData(null)); // Якщо потрібно для модалки, розкоментуйте
      dispatch(openModal());
    }
  };

  const handleToggleFavorite = async () => {
    if (!isAuthenticated) {
      // dispatch(setModalData(null)); // Якщо потрібно для модалки, розкоментуйте
      dispatch(openModal());
      return;
    }
    console.log('Видаляється notice з ID:', notice._id); // ⬅️ Додаємо лог перед видаленням
    if (isFavorite) {
      dispatch(deleteFromFavorites(notice._id));
      toast.info(`Notice "${notice.title}" has been removed from favorites!`);
    } else {
      dispatch(addNoticeToFavorites(notice._id));
      toast.success(`Notice "${notice.title}" has been added to favorites!`);
    }
    dispatch(fetchProfileFull());
  };

  return (
    <div className={css.item}>
      <img src={notice.imgURL} alt={notice.title} className={css.image} />
      <div className={css.titleContainer}>
        <h2 className={css.title}>{notice.title}</h2>
        <div className={css.popularity}>
          <img
            src={starYellow}
            alt="star"
            width="24"
            height="24"
            className={css.star}
          />
          <span>{notice.popularity}</span>
        </div>
      </div>
      <div className={css.infoContainer}>
        <p>
          <b className={css.info}>Name:</b> {notice.name}
        </p>
        <p>
          <b className={css.info}>Birthday:</b>{' '}
          {notice.birthday
            ? new Date(notice.birthday).toLocaleDateString('uk-UA')
            : 'Unknown'}
        </p>
        <p>
          <b className={css.info}>Sex:</b> {notice.sex}
        </p>
        <p>
          <b className={css.info}>Species:</b> {notice.species}
        </p>
        <p>
          <b className={css.info}>Category:</b> {notice.category}
        </p>
      </div>
      <p className={css.comment}>{notice.comment}</p>
      <div className={css.priceContainer}>
        {notice.price > 0 ? (
          <span className={css.price}>${notice.price}</span>
        ) : (
          <span className={css.negotiable}>Price negotiable</span>
        )}
      </div>

      <div className={css.actions}>
        <button
          data-viewed={viewed}
          onClick={handleLearnMore}
          className={css.learnMoreBtn}
        >
          Learn more
        </button>

        {isAuthenticated &&
          !viewed &&
          (isFavorite ? (
            <button
              data-profile={profile}
              className={`${css.favorite} ${css.removeFavorite}`}
              onClick={handleToggleFavorite}
            >
              <img src={trashIcon} alt="trash" width="18" height="18" />
            </button>
          ) : (
            <button
              className={`${css.favorite} ${css.addFavorite}`}
              onClick={handleToggleFavorite}
            >
              <img src={heartIcon} alt="heart" width="18" height="18" />
            </button>
          ))}
      </div>
    </div>
  );
};

export default NoticesItem;
