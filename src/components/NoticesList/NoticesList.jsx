import css from './NoticesList.module.css';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';

const NoticesList = ({ notices, onLearnMore, onToggleFavorite }) => {
  return (
    <div className={css.list}>
      {notices.map(notice => (
        <NoticesItem
          key={notice._id}
          // notices={filteredNotices}
          notice={notice}
          onLearnMore={onLearnMore}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default NoticesList;
// const NoticesList = ({ notices, onLearnMore, onToggleFavorite }) => {
//   if (!notices || !Array.isArray(notices)) {
//     console.error('Expected an array but got:', notices);
//     return <p>No notices available.</p>; // Або будь-яке інше повідомлення
//   }

//   return (
//     <div className={css.list}>
//       {notices.map(notice => (
//         <NoticesItem
//           key={notice._id}
//           notice={notice}
//           onLearnMore={onLearnMore}
//           onToggleFavorite={onToggleFavorite}
//         />
//       ))}
//     </div>
//   );
// };
// export default NoticesList;
