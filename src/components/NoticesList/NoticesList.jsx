import clsx from 'clsx';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import css from './NoticesList.module.css';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../redux/profile/profileSelectors.js';

const NoticesList = ({ notices, profile, viewed }) => {
  const userProfile = useSelector(selectProfile);
  return (
    <ul
      className={clsx(css.list, {
        [css.profileList]: profile,
        [css.viewedList]: viewed,
      })}
    >
      {notices.map((notice, index) => (
        <NoticesItem
          key={`${notice._id} + ${index}`}
          notice={notice}
          profile={userProfile}
          // viewed={profile ? false : viewed}
          viewed={viewed}
          //           isFavorite={favorites.some(fav => fav._id === notice._id)} // Коректна перевірка
        />
      ))}
    </ul>
  );
};

export default NoticesList;
// import clsx from 'clsx';
// import NoticesItem from '../NoticesItem/NoticesItem.jsx';
// import css from './NoticesList.module.css';
// import { useSelector } from 'react-redux';
// import { selectProfile } from '../../redux/profile/profileSelectors.js';

// const NoticesList = ({ notices, profile, viewed }) => {
//   const userProfile = useSelector(selectProfile);
//   const favorites = userProfile?.noticesFavorites || [];

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
//           isFavorite={favorites.some(fav => fav._id === notice._id)} // Коректна перевірка
//         />
//       ))}
//     </ul>
//   );
// };

// export default NoticesList;
