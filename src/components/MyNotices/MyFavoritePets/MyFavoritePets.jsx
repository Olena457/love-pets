import { useEffect } from 'react';
import ResultsNotFound from '../../ResultsNotFound/ResultsNotFound.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../../redux/profile/profileSlice';
import NoticesList from '../../NoticesList/NoticesList.jsx';

const MyFavoritesPets = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.profile.noticesFavorites);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <NoticesContainer isEmpty={!favorite?.length}>
      {favorite?.length ? (
        <NoticesList viewed={false} profile={true} notices={favorite} />
      ) : (
        <ResultsNotFound />
      )}
    </NoticesContainer>
  );
};

export default MyFavoritesPets;
