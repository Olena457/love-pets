// // ____________________________________________
// import css from './NoticesItem.module.css';
// import starYellow from '../../assets/icons/starYellow.svg';
// import trashIcon from '../../assets/icons/trashDel.svg';
// import heartIcon from '../../assets/icons/heartEmpty.svg';
// import { useDispatch } from 'react-redux';
// // import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
// import { fetchProfileFull } from '../../redux/profile/profileSlice.js';
// import { openModal } from '../../redux/modal/modalSlice.js';
// import { toast } from 'react-toastify';
// import {
//   fetchNoticeById,
//   addNoticeToFavorites,
//   deleteFromFavorites,
// } from '../../redux/notices/noticesOperations.js';

// const NoticesItem = ({ notice }) => {
//   const dispatch = useDispatch();
//   // const isAuthenticated = useSelector(selectIsAuthenticated);
//   const isFavorite = notice.isFavorite;

//   const handleLearnMore = async () => {
//     if (!notice?._id) {
//       toast.error('Invalid notice ID');
//       return;
//     }
//     try {
//       const response = await dispatch(fetchNoticeById(notice._id)).unwrap();
//       dispatch(openModal(response)); // data id
//     } catch (error) {
//       console.error('Error fetching notice details:', error);
//       toast.error('Failed to load notice details.');
//     }
//   };

//   const handleAddToFavorites = () => {
//     if (!notice?._id) {
//       toast.error('Invalid notice ID');
//       return;
//     }
//     dispatch(addNoticeToFavorites(notice._id));
//     toast.success('Notice added to favorites!');
//   };

//   const handleDeleteNotice = async () => {
//     if (!notice?._id) {
//       toast.error('Invalid notice ID');
//       return;
//     }
//     try {
//       await dispatch(deleteFromFavorites(notice._id)).unwrap();
//       dispatch(fetchProfileFull());
//       toast.success('Notice successfully removed!');
//     } catch (error) {
//       console.error('Error deleting notice:', error);
//       toast.error(error.message || 'Failed to delete notice.');
//     }
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
//       <div className={css.actions}>
//         <button className={css.learnMoreBtn} onClick={handleLearnMore}>
//           Learn more
//         </button>
//         {isFavorite ? (
//           <button className={css.favorite} onClick={handleDeleteNotice}>
//             <img src={trashIcon} alt="trash" width="18" height="18" />
//           </button>
//         ) : (
//           <button className={css.favorite} onClick={handleAddToFavorites}>
//             <img src={heartIcon} alt="heart" width="18" height="18" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NoticesItem;

// NoticesItem.jsx
import css from './NoticesItem.module.css';
import starYellow from '../../assets/icons/starYellow.svg';
import trashIcon from '../../assets/icons/trashDel.svg';
import heartIcon from '../../assets/icons/heartEmpty.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
import { fetchProfileFull } from '../../redux/profile/profileSlice.js';
import { openModal } from '../../redux/modal/modalSlice.js';
// import { toast } from 'react-toastify';
import {
  fetchNoticeById,
  addNoticeToFavorites,
  deleteFromFavorites,
} from '../../redux/notices/noticesOperations.js';

const NoticesItem = ({ notice, profile, viewed }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isFavorite = profile?.favorites?.some(fav => fav._id === notice._id);

  const handleLearnMore = async () => {
    if (isAuthenticated) {
      dispatch(openModal());
      dispatch(fetchNoticeById({ _id: notice._id }));
    }
  };
  const handleToggleFavorite = async () => {
    if (!isAuthenticated) {
      dispatch(openModal());
      return;
    }

    if (isFavorite) {
      dispatch(deleteFromFavorites({ _id: notice._id }));
    } else {
      dispatch(addNoticeToFavorites({ _id: notice._id }));
    }

    dispatch(fetchProfileFull()); // Оновлюємо список улюблених
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
          data-profile={profile}
          onClick={handleLearnMore}
          className={css.learnMoreBtn}
        >
          Learn more
        </button>
        {/* {isAuthenticated ? (
          <button
            data-profile={profile}
            className={css.favorite}
            onClick={handleAddToFavorites}
          >
            <img src={heartIcon} alt="heart" width="18" height="18" />
          </button>
        ) : (
          <button
            data-viewed={viewed}
            data-profile={profile}
            onClick={handleDeleteNotice}
            className={css.favorite}
          >
            <img src={trashIcon} alt="trash" width="18" height="18" />
          </button>
        )} */}
        {isAuthenticated && (
          <button
            data-viewed={viewed}
            data-profile={profile}
            onClick={handleToggleFavorite}
            className={`${css.favorite} ${
              isFavorite ? css.removeFavorite : css.addFavorite
            }`}
          >
            <img
              src={isFavorite ? trashIcon : heartIcon}
              alt={isFavorite ? 'trash' : 'heart'}
              width="18"
              height="18"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default NoticesItem;
