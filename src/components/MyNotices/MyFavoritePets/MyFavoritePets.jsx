// import clsx from 'clsx';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchProfile } from '../../../redux/profile/profileSlice';
// import ResultsNotFound from '../../ResultsNotFound/ResultsNotFound.jsx';
// import NoticesList from '../../NoticesList/NoticesList.jsx';
// import css from './MyFavoritePets.module.css';
// const MyFavoritePets = () => {
//   const dispatch = useDispatch();
//   const favorite = useSelector(state => state.profile.noticesFavorites);

//   useEffect(() => {
//     dispatch(fetchProfile());
//   }, [dispatch]);

//   const isEmpty = !favorite?.length;

//   return (
//     <div
//       className={clsx(css.noticesContainer, {
//         [css.noticesContainerEmpty]: isEmpty,
//       })}
//     >
//       {isEmpty ? (
//         <ResultsNotFound />
//       ) : (
//         <NoticesList viewed={false} profile={true} notices={favorite} />
//       )}
//     </div>
//   );
// };

// export default MyFavoritePets;
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProfileFull } from '../../../redux/profile/profileSlice';
import ResultsNotFound from '../../ResultsNotFound/ResultsNotFound.jsx';
import NoticesList from '../../NoticesList/NoticesList.jsx';
import css from './MyFavoritePets.module.css';

const MyFavoritePets = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.profile?.noticesFavorites || []);

  useEffect(() => {
    dispatch(fetchProfileFull());
  }, [dispatch]);

  const isEmpty = !favorite?.length;
  const hasFavorites = Array.isArray(favorite) && favorite.length > 0;

  return (
    <div
      className={clsx(css.noticesContainer, {
        [css.noticesContainerEmpty]: isEmpty,
      })}
    >
      {hasFavorites ? (
        <NoticesList viewed={false} profile={true} notices={favorite} />
      ) : (
        <ResultsNotFound />
      )}
    </div>
  );
};

export default MyFavoritePets;
