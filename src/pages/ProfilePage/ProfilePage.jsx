import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchPofile from '../../redux/profile/profileSlice.js';
import MyNotice from '../../components/MyNotices/MyNotices.jsx';
import { UserCard } from '../../components/UserCard/UserCard.jsx';
import css from './ProfilePage.module.css';
const ProfilePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPofile());
  }, [dispatch]);
  return (
    <div className={css.containerProfile}>
      <h1 className={css.title}>Profile Page</h1>
      <UserCard />
      <MyNotice />
    </div>
  );
};

export default ProfilePage;
