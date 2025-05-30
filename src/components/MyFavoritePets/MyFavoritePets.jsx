import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProfileFull } from '../../redux/profile/profileSlice.js';
import { selectProfile } from '../../redux/profile/profileSelectors.js';
import ResultsNotFound from '../ResultsNotFound/ResultsNotFound.jsx';
import NoticesList from '../NoticesList/NoticesList.jsx';
import css from './MyFavoritePets.module.css';

const MyFavoritePets = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const favorites = profile?.noticesFavorites || [];

  useEffect(() => {
    dispatch(fetchProfileFull());
  }, [dispatch]);

  const isEmpty = !favorites.length;
  const hasFavorites = favorites && favorites.length > 0;

  return (
    <div
      className={clsx(css.noticesContainer, {
        [css.noticesContainerEmpty]: isEmpty,
      })}
    >
      {hasFavorites ? (
        <NoticesList viewed={false} profile={true} notices={favorites} />
      ) : (
        <ResultsNotFound />
      )}
    </div>
  );
};

export default MyFavoritePets;
