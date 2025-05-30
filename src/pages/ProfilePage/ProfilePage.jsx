import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProfileFull } from '../../redux/profile/profileSlice.js';
import MyNotices from '../../components/MyNotices/MyNotices.jsx';
import UserCard from '../../components/UserCard/UserCard.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import { ModalEditUser } from '../../components/ModalEditUser/ModalEditUser.jsx';
import { closeModal } from '../../redux/modal/modalSlice.js';
import ModalNotices from '../../components/ModalNotices/ModalNotices.jsx';
import ModalApproveAction from './../../components/ModalApproveAction/ModalApproveAction';
import {
  selectIsModalEditUserOpen,
  selectIsOpenModal,
  selectModalData,
  selectIsApproveModalOpen,
} from '../../redux/modal/modalSelectors.js';
import css from './ProfilePage.module.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const isModalEditUserOpen = useSelector(selectIsModalEditUserOpen);
  const isModalOpen = useSelector(selectIsOpenModal);
  const modalData = useSelector(selectModalData);
  const isApproveModalOpen = useSelector(selectIsApproveModalOpen);

  useEffect(() => {
    dispatch(fetchProfileFull());
  }, [dispatch]);

  return (
    <div className={css.wrapperProfile}>
      <div className={css.containerProfile}>
        <UserCard />
        <MyNotices />
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
    </div>
  );
};

export default ProfilePage;
