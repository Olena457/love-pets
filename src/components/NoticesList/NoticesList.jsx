import { useSelector } from 'react-redux';
import clsx from 'clsx';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import { selectProfile } from '../../redux/profile/profileSelectors.js';
import css from './NoticesList.module.css';

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
          viewed={viewed}
          // viewed={false}
          //isFavorite={favorites.some(fav => fav._id === notice._id)}
        />
      ))}
    </ul>
  );
};

export default NoticesList;
