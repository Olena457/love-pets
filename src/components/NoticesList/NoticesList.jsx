// import clsx from 'clsx';
// import NoticesItem from '../NoticesItem/NoticesItem.jsx';
// import css from './NoticesList.module.css';

// const NoticesList = ({
//   notices,
//   profile,
//   viewed,
//   // isAuthenticated,
//   // favorites,
//   // onLearnMore,
//   // onToggleFavorite,
//   // onAttention,
// }) => {
//   return (
//     <ul
//       className={clsx(css.list, {
//         [css.profileList]: profile,
//         [css.viewedList]: viewed,
//       })}
//     >
//       {notices.map((notice, index) => (
//         <NoticesItem
//           key={`${notice._id} + ${index}`}
//           notice={notice}
//           profile={profile}
//           viewed={viewed}
//           // isFavorite={favorites.includes(notice._id)}
//           // isAuthenticated={isAuthenticated}
//           // onLearnMore={onLearnMore}
//           // onAttention={onAttention}
//           // onToggleFavorite={onToggleFavorite}
//         />
//       ))}
//     </ul>
//   );
// };

// export default NoticesList;
// NoticesList.jsx
import clsx from 'clsx';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import css from './NoticesList.module.css';
import { useSelector } from 'react-redux'; // Додайте useSelector
import { selectFavorites } from '../../redux/notices/noticesSelectors.js'; // Додайте імпорт селектора

const NoticesList = ({
  notices,
  profile,
  viewed,
  // ... інші пропси
}) => {
  const favorites = useSelector(selectFavorites) || []; // Отримуємо фаворитів з профілю

  return (
    <ul
      className={clsx(css.list, {
        [css.profileList]: profile,
        [css.viewedList]: viewed,
      })}
    >
      {notices.map((notice, index) => (
        <NoticesItem
          key={`${notice._id}-${index}`} // Змінив ключ для уникнення potential conflicts, хоча _id має бути унікальним
          notice={notice}
          profile={profile}
          viewed={viewed}
          // Передаємо isFavorite як проп
          isFavorite={favorites.includes(notice._id)}
          // isFavorite={profileFavorites.some(fav => fav._id === notice._id)} // <-- Важливо: перевіряємо чи є ID оголошення в масиві фаворитів
        />
      ))}
    </ul>
  );
};

export default NoticesList;
