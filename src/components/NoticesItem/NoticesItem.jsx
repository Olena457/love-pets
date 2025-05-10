// import { selectIsAuthenticated } from '../../redux/users/usersSelectors.js';
// import css from './NoticesItem.module.css';
// import starYellow from '../../assets/icons/starYellow.svg';
// import trashIcon from '../../assets/icons/trashDel.svg';
// import heartIcon from '../../assets/icons/heartEmpty.svg';

// const NoticesItem = ({
//   notice,
//   onLearnMore,
//   onToggleFavorite,
//   onAttention,
// }) => {
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
//           onClick={() => {
//             if (!notice.isAuthenticated) {
//               onAttention();
//             } else {
//               onLearnMore(notice);
//             }
//           }}
//         >
//           Learn more
//         </button>
//         <button
//           className={css.favorite}
//           onClick={() => {
//             if (!notice.isAuthenticated) {
//               onAttention();
//             } else {
//               onToggleFavorite(notice);
//             }
//           }}
//         >
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
import css from './NoticesItem.module.css';
import starYellow from '../../assets/icons/starYellow.svg';
import trashIcon from '../../assets/icons/trashDel.svg';
import heartIcon from '../../assets/icons/heartEmpty.svg';

const NoticesItem = ({
  notice,
  // profile
  // viewvd
  isAuthenticated,
  isFavorite,
  onLearnMore,
  onToggleFavorite,
  onAttention,
}) => {
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
          <b className={css.info}>Birthday:</b>
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
          onClick={() => {
            if (!isAuthenticated) {
              onAttention();
            } else {
              onLearnMore(notice);
            }
          }}
        >
          Learn more
        </button>
        <button
          className={css.favorite}
          onClick={() => {
            if (!isAuthenticated) {
              onAttention();
            } else {
              onToggleFavorite(notice);
            }
          }}
        >
          {isFavorite ? (
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
