// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import ProfileContainer from '../../components/ProfileContainer/ProfileContainer.jsx';
// import { fetchProfileFull } from '../../redux/profile/profileSlice.js';
// import MyNotice from '../../components/MyNotices/MyNotices.jsx';
// import UserCard from '../../components/UserCard/UserCard.jsx';
// import Modal from '../../components/Modal/Modal.jsx';
// import { ModalEditUser } from '../../components/ModalEditUser/ModalEditUser.jsx';
// import { selectIsModalEditUserOpen } from '../../redux/modal/modalSelectors.js';
// import css from './ProfilePage.module.css';

// const ProfilePage = () => {
//   const dispatch = useDispatch();
//   const isModalOpen = useSelector(selectIsModalEditUserOpen);

//   useEffect(() => {
//     dispatch(fetchProfileFull());
//   }, [dispatch]);

//   return (
//     <ProfileContainer>
//       <h1 className={css.title}>Profile Page</h1>
//       <UserCard />
//       <MyNotice />
//       {isModalOpen && (
//         <Modal>
//           <ModalEditUser />
//         </Modal>
//       )}
//     </ProfileContainer>
//   );
// };

// export default ProfilePage;

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer.jsx';
import { fetchProfileFull } from '../../redux/profile/profileSlice.js';
import MyNotice from '../../components/MyNotices/MyNotices.jsx';
import UserCard from '../../components/UserCard/UserCard.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import { ModalEditUser } from '../../components/ModalEditUser/ModalEditUser.jsx';
import { closeModal } from '../../redux/modal/modalSlice.js';
// import ModalAttention from '../../components/ModalAttention/ModalAttention.jsx';
import ModalNotices from '../../components/ModalNotices/ModalNotices.jsx';
import ModalApproveAction from './../../components/ModalApproveAction/ModalApproveAction';
import {
  // selectIsAttentionModalOpen,
  selectIsModalEditUserOpen,
  selectIsOpenModal,
  selectModalData,
  selectIsApproveModalOpen,
} from '../../redux/modal/modalSelectors.js';
// import { selectNotice } from '../../redux/notices/noticesSelectors.js'; // Додаємо, якщо використовується
import css from './ProfilePage.module.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const isModalEditUserOpen = useSelector(selectIsModalEditUserOpen);
  const isModalOpen = useSelector(selectIsOpenModal);
  // const isAttentionModalOpen = useSelector(selectIsAttentionModalOpen);
  const modalData = useSelector(selectModalData);
  const isApproveModalOpen = useSelector(selectIsApproveModalOpen);
  // const selectedNoticeState = useSelector(selectNotice);

  useEffect(() => {
    dispatch(fetchProfileFull());
  }, [dispatch]);

  return (
    <ProfileContainer>
      <h1 className={css.title}>Profile Page</h1>
      <UserCard />
      <MyNotice />
      {isModalEditUserOpen && (
        <Modal onClose={() => dispatch(closeModal())}>
          <ModalEditUser />
        </Modal>
      )}

      {isModalOpen && !isModalEditUserOpen && (
        <Modal onClose={() => dispatch(closeModal())}>
          {/* {isAttentionModalOpen && <ModalAttention />} */}
          {isApproveModalOpen && (
            <ModalApproveAction onClose={() => dispatch(closeModal())} />
          )}
          {modalData && (
            <ModalNotices
              notice={modalData}
              onClose={() => dispatch(closeModal())}
            />
          )}
        </Modal>
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;
