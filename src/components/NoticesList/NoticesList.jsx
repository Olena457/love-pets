import css from './NoticesList.module.css';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';

const NoticesList = ({
  notices,
  onLearnMore,
  onToggleFavorite,
  onAttention,
  isAuthenticated,
  favorites,
}) => {
  return (
    <ul className={css.list}>
      {notices.map(notice => (
        <NoticesItem
          key={notice._id}
          notice={notice}
          isFavorite={favorites.includes(notice._id)}
          onLearnMore={onLearnMore}
          onAttention={onAttention}
          onToggleFavorite={onToggleFavorite}
          isAuthenticated={isAuthenticated}
        />
      ))}
    </ul>
  );
};

export default NoticesList;
