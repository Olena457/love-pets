import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends } from '../../redux/friends/ourFriendsSlice.js';
// import Title from '../../components/Title/Title.jsx';
import {
  selectFriends,
  selectIsLoading,
  selectError,
} from '../../redux/friends/ourFriendsSelectors.js';
import css from './OurFriendsPage.module.css';
import OurFriendsList from '../../components/OurFriendsList/OurFiendsList.jsx';
import Loader from '../../components/Loader/Loader.jsx';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.containerPageFriends}>
          <h1 className={css.titleFriend}>Our friends</h1>
          {/* <Title title={'Our friends'} /> */}
          <OurFriendsList />
          {error && <p>Error: {error}</p>}
          {friends.length === 0 && !isLoading && !error && (
            <p className={css.noFound}>No results found friends.</p>
          )}
        </div>
      )}
    </>
  );
};

export default OurFriendsPage;
