import css from './NoticesList.module.css';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';

const NoticesList = ({ notices, onLearnMore, onToggleFavorite }) => {
  return (
    <div className={css.list}>
      {notices.map(notice => (
        <NoticesItem
          key={notice._id}
          notice={notice}
          onLearnMore={onLearnMore}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default NoticesList;
