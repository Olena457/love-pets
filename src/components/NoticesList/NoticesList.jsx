import clsx from 'clsx';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import css from './NoticesList.module.css';

const NoticesList = ({
  notices,
  profile,
  viewed,
  isAuthenticated,
  favorites,
  // onLearnMore,
  // onToggleFavorite,
  // onAttention,
}) => {
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
          profile={profile}
          viewed={viewed}
          isFavorite={favorites.includes(notice._id)}
          isAuthenticated={isAuthenticated}
          // onLearnMore={onLearnMore}
          // onAttention={onAttention}
          // onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ul>
  );
};

export default NoticesList;
