import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer.jsx';
import { fetchProfileFull } from '../../redux/profile/profileSlice.js';
import MyNotice from '../../components/MyNotices/MyNotices.jsx';
import UserCard from '../../components/UserCard/UserCard.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import { ModalEditUser } from '../../components/ModalEditUser/ModalEditUser.jsx';
import { selectIsModalEditUserOpen } from '../../redux/modal/modalSelectors.js';
import css from './ProfilePage.module.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalEditUserOpen);

  useEffect(() => {
    dispatch(fetchProfileFull());
  }, [dispatch]);

  return (
    <ProfileContainer>
      <h1 className={css.title}>Profile Page</h1>
      <UserCard />
      <MyNotice />
      {isModalOpen && (
        <Modal>
          <ModalEditUser />
        </Modal>
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;
