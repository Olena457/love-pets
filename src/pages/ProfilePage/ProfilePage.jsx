import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
import css from './ProfilePage.module.css';
// import { selectNotice } from '../../redux/notices/noticesSelectors.js'; // Додаємо, якщо використовується
// import ContainerPage from './../../components/ContainerPage/ContainerPage';

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
    <>
      <h1 className={css.title}>Profile Page</h1>
      <div className={css.containerProfile}>
        <UserCard />
        <MyNotice />
        {isModalEditUserOpen && (
          <Modal onClose={() => dispatch(closeModal())}>
            <ModalEditUser />
          </Modal>
        )}

        {isModalOpen && !isModalEditUserOpen && (
          <Modal onClose={() => dispatch(closeModal())}>
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
      </div>
    </>
  );
};

export default ProfilePage;
