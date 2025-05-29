import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { closeModal } from '../../redux/modal/modalSlice.js';
import { selectUser } from '../../redux/users/usersSelectors.js';
import { addNoticeToFavorites } from '../../redux/notices/noticesOperations.js';
import { Stars } from '../Stars/Stars.jsx';
import EmptyWhite from '../../assets/icons/emptyWhite.svg';
import {
  selectNotice,
  selectIsLoading,
  selectError,
} from '../../redux/notices/noticesSelectors.js';
import css from './ModalNotices.module.css';

const ModalNotices = () => {
  const dispatch = useDispatch();
  const notice = useSelector(selectNotice);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const profileInfo = useSelector(selectUser);
  const favorites = profileInfo?.noticesFavorites || [];

  const handleAddToFavorites = () => {
    if (favorites.includes(notice._id)) {
      toast.info('This pet is already in your favorites!');
    } else {
      dispatch(addNoticeToFavorites(notice._id));
      toast.info('This animal is already in favorites!');
    }
    dispatch(closeModal());
  };

  const handleContactClick = () => {
    if (notice?.user?.phone) {
      window.location.href = `tel:${notice.user.phone}`;
    } else {
      toast.error('Contact information is unavailable!');
    }
  };

  return (
    !isLoading &&
    !isError && (
      <div className={css.modalWrap}>
        <div className={css.imageWrap}>
          <p className={css.categoryBadge}>{notice?.category}</p>
          <img
            className={css.noticeImg}
            src={notice?.imgURL}
            alt={notice?.title}
          />
        </div>
        <div className={css.textBlock}>
          <h2 className={css.title}>{notice?.title}</h2>
          <div className={css.popularityWrap}>
            <Stars popularity={notice?.popularity || 0} />{' '}
            <p className={css.popularityNumber}>{notice?.popularity || 0}</p>
          </div>
          <ul className={css.propertyList}>
            <li className={css.property}>
              <span className={css.accentProperty}>Name:</span> {notice?.name}
            </li>
            <li className={css.property}>
              <span className={css.accentProperty}>Birthday:</span>
              {notice?.birthday || 'Unknown'}
            </li>
            <li className={css.property}>
              <span className={css.accentProperty}>Sex:</span> {notice?.sex}
            </li>
            <li className={css.property}>
              <span className={css.accentProperty}>Species:</span>
              {notice?.species}
            </li>
          </ul>
          <p className={css.comment}>{notice?.comment}</p>
        </div>
        <div className={css.btnWrap}>
          <button
            className={`${css.btn} ${css.addBtn}`}
            onClick={handleAddToFavorites}
          >
            Add to
            <img src={EmptyWhite} alt="heart" className={css.icon} />
          </button>

          <button
            className={`${css.btn} ${css.contactBtn}`}
            onClick={handleContactClick}
          >
            Contact
          </button>
        </div>
      </div>
    )
  );
};

export default ModalNotices;
