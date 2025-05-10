// ______________________________________________________________
// import { useDispatch, useSelector } from 'react-redux';
// import { openModal } from '../../redux/modal/modalSlice.js';
// import {
//   addNoticeToFavorites,
//   removeNoticeFromFavorites,
//   fetchNoticeById,
// } from '../../redux/notices/noticesOperations.js';
// import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
// import css from './NoticesItem.module.css';
// import starYellow from '../../assets/icons/starYellow.svg';
// import trashIcon from '../../assets/icons/trashDel.svg';
// import heartIcon from '../../assets/icons/heartEmpty.svg';

// const NoticesItem = ({ notice, onLearnMore, onToggleFavorite }) => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector(selectIsAuthenticated);

//   const {
//     _id,
//     imgURL,
//     title,
//     popularity,
//     name,
//     birthday,
//     sex,
//     species,
//     category,
//     comment,
//     price = 0,
//     isFavorite,
//   } = notice;

//   const handleLearnMore = () => {
//     dispatch(fetchNoticeById(_id));
//     onLearnMore(_id);
//     dispatch(openModal());
//   };

//   const handleToggleFavorite = async () => {
//     if (!isAuthenticated) {
//       onToggleFavorite(_id);
//       dispatch(openModal());
//       return;
//     }
//     if (isFavorite) {
//       dispatch(removeNoticeFromFavorites(_id));
//     } else {
//       dispatch(addNoticeToFavorites(_id));
//     }
//   };

//   return (
//     <div className={css.item}>
//       <img src={imgURL} alt={title} className={css.image} />
//       <div className={css.titleContainer}>
//         <h2 className={css.title}>{title}</h2>
//         <div className={css.popularity}>
//           <img
//             src={starYellow}
//             alt="star"
//             width="24"
//             height="24"
//             className={css.star}
//           />
//           <span>{popularity}</span>
//         </div>
//       </div>
//       <div className={css.infoContainer}>
//         <p>
//           <b className={css.info}>Name:</b> {name}
//         </p>
//         <p>
//           <b className={css.info}>Birthday:</b>{' '}
//           {birthday
//             ? new Date(birthday).toLocaleDateString('uk-UA')
//             : 'Unknown'}
//         </p>
//         <p>
//           <b className={css.info}>Sex:</b> {sex}
//         </p>
//         <p>
//           <b className={css.info}>Species:</b> {species}
//         </p>
//         <p>
//           <b className={css.info}>Category:</b> {category}
//         </p>
//       </div>
//       <p className={css.comment}>{comment}</p>
//       <div className={css.priceContainer}>
//         {price > 0 ? (
//           <span className={css.price}>${price}</span>
//         ) : (
//           <span className={css.negotiable}>Price negotiable</span>
//         )}
//       </div>
//       <div className={css.actions}>
//         <button className={css.learnMoreBtn} onClick={handleLearnMore}>
//           Learn more
//         </button>
//         <button className={css.favorite} onClick={handleToggleFavorite}>
//           {isFavorite ? (
//             <img src={trashIcon} alt="trash" width="18" height="18" />
//           ) : (
//             <img src={heartIcon} alt="heart" width="18" height="18" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NoticesItem;
// ___________________________________________
// import { useDispatch, useSelector } from 'react-redux';
// import { openModal } from '../../redux/modal/modalSlice.js';
// import {
//   addNoticeToFavorites,
//   removeNoticeFromFavorites,
//   fetchNoticeById,
// } from '../../redux/notices/noticesOperations.js';
// import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
// import css from './NoticesItem.module.css';
// import starYellow from '../../assets/icons/starYellow.svg';
// import trashIcon from '../../assets/icons/trashDel.svg';
// import heartIcon from '../../assets/icons/heartEmpty.svg';

// const NoticesItem = ({ notice, onLearnMore, onAttention }) => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector(selectIsAuthenticated);

//   const handleLearnMore = () => {
//     if (!isAuthenticated) {
//       dispatch(openModal());
//       return;
//     }
//     dispatch(fetchNoticeById(notice._id));
//     dispatch(openModal());
//   };

//   const handleToggleFavorite = () => {
//     if (!isAuthenticated) {
//       dispatch(openModal());
//       return;
//     }
//     if (notice.isFavorite) {
//       dispatch(removeNoticeFromFavorites(notice._id));
//     } else {
//       dispatch(addNoticeToFavorites(notice._id));
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
//         <button
//           className={css.learnMoreBtn}
//           onClick={() => onLearnMore(notice)}
//         >
//           Learn more
//         </button>
//         <button className={css.favorite} onClick={handleToggleFavorite}>
//           {notice.isFavorite ? (
//             <img src={trashIcon} alt="trash" width="18" height="18" />
//           ) : (
//             <img src={heartIcon} alt="heart" width="18" height="18" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NoticesItem;
import { useDispatch, useSelector } from 'react-redux';
import {
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from '../../redux/notices/noticesOperations.js';
import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
import css from './NoticesItem.module.css';
import starYellow from '../../assets/icons/starYellow.svg';
import trashIcon from '../../assets/icons/trashDel.svg';
import heartIcon from '../../assets/icons/heartEmpty.svg';

const NoticesItem = ({ notice, onLearnMore, onAttention }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleToggleFavorite = () => {
    if (!isAuthenticated) {
      onAttention();
      return;
    }
    if (notice.isFavorite) {
      dispatch(removeNoticeFromFavorites(notice._id));
    } else {
      dispatch(addNoticeToFavorites(notice._id));
    }
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
          className={css.learnMoreBtn}
          onClick={() => onLearnMore(notice)}
        >
          Learn more
        </button>
        <button className={css.favorite} onClick={handleToggleFavorite}>
          {notice.isFavorite ? (
            <img src={trashIcon} alt="trash" width="18" height="18" />
          ) : (
            <img src={heartIcon} alt="heart" width="18" height="18" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NoticesItem;
