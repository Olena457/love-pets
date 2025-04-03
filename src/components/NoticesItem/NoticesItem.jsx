// import css from './NoticesItem.module.css';
// import Icon from '../Icon/Icon.jsx';

// const NoticesItem = ({ notice, onLearnMore, onToggleFavorite }) => {
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
//     onLearnMore(_id);
//   };

//   const handleToggleFavorite = () => {
//     onToggleFavorite(_id);
//   };

//   return (
//     <div className={css.item}>
//       <img src={imgURL} alt={title} className={css.image} />
//       <div className={css.titleContainer}>
//         <h2 className={css.title}>{title}</h2>
//         <div className={css.popularity}>
//           <Icon
//             id="star"
//             width={24}
//             height={24}
//             className={css.star}

//             // stroke="#f6b83d"
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
//       <p className={css.price}>{price > 0 ? `${price}` : 'Price negotiable'}</p>
//       <div className={css.actions}>
//         <button className={css.learnMore} onClick={handleLearnMore}>
//           Learn more
//         </button>
//         <button className={css.favorite} onClick={handleToggleFavorite}>
//           {isFavorite ? (
//             <Icon
//               id="heart-full"
//               width={24}
//               height={24}
//               className={css.star}
//               stroke="#f6b83d"
//             />
//           ) : (
//             <Icon
//               id="heart-transparent"
//               width={24}
//               height={24}
//               className={css.star}
//               fillColor="#f6b83d"
//               stroke="#f6b83d"
//             />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NoticesItem;
import css from './NoticesItem.module.css';
import Icon from '../Icon/Icon.jsx';

const NoticesItem = ({ notice, onLearnMore, onToggleFavorite }) => {
  const {
    _id,
    imgURL,
    title,
    popularity,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
    price = 0,
    isFavorite,
  } = notice;

  const handleLearnMore = () => {
    onLearnMore(_id); // Передає ID
  };

  const handleToggleFavorite = () => {
    onToggleFavorite(_id); // Передає ID
  };

  return (
    <div className={css.item}>
      <img src={imgURL} alt={title} className={css.image} />
      <div className={css.titleContainer}>
        <h2 className={css.title}>{title}</h2>
        <div className={css.popularity}>
          <Icon id="star" width={24} height={24} className={css.star} />
          <span>{popularity}</span>
        </div>
      </div>
      <div className={css.infoContainer}>
        <p>
          <b className={css.info}>Name:</b> {name}
        </p>
        <p>
          <b className={css.info}>Birthday:</b>{' '}
          {birthday
            ? new Date(birthday).toLocaleDateString('uk-UA')
            : 'Unknown'}
        </p>
        <p>
          <b className={css.info}>Sex:</b> {sex}
        </p>
        <p>
          <b className={css.info}>Species:</b> {species}
        </p>
        <p>
          <b className={css.info}>Category:</b> {category}
        </p>
      </div>
      <p className={css.comment}>{comment}</p>
      <p className={css.price}>{price > 0 ? `${price}` : 'Price negotiable'}</p>
      <div className={css.actions}>
        <button className={css.learnMore} onClick={handleLearnMore}>
          Learn more
        </button>
        <button className={css.favorite} onClick={handleToggleFavorite}>
          {isFavorite ? (
            <Icon
              id="heart-full"
              width={24}
              height={24}
              className={css.star}
              stroke="#f6b83d"
            />
          ) : (
            <Icon
              id="heart-transparent"
              width={24}
              height={24}
              className={css.star}
              fillColor="#f6b83d"
              stroke="#f6b83d"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default NoticesItem;
