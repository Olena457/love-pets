import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice.js';
import {
  selectIsApproveModalOpen,
  selectIsOpenModal,
} from '../../redux/modal/modalSelectors.js';
import ModalApproveAction from './../../components/ModalApproveAction/ModalApproveAction';
import Modal from '../../components/Modal/Modal.jsx';
import { fetchFriends } from '../../redux/friends/ourFriendsSlice.js';
import {
  selectFriends,
  selectIsLoading,
  selectError,
} from '../../redux/friends/ourFriendsSelectors.js';
import OurFriendsList from '../../components/OurFriendsList/OurFiendsList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import css from './OurFriendsPage.module.css';
import ContainerPage from '../../components/ContainerPage/ContainerPage.jsx';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isModalOpen = useSelector(selectIsOpenModal);
  const isApproveModalOpen = useSelector(selectIsApproveModalOpen);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ContainerPage>
          <div className={css.containerPageFriends}>
            <h1 className={css.titleFriend}>Our friends</h1>
            <OurFriendsList />
            {error && <p>Error: {error}</p>}
            {friends.length === 0 && !isLoading && !error && (
              <p className={css.noFound}>No results found friends.</p>
            )}
          </div>
          {isModalOpen && (
            <Modal onClose={() => dispatch(closeModal())}>
              {isApproveModalOpen && (
                <ModalApproveAction onClose={() => dispatch(closeModal())} />
              )}
            </Modal>
          )}
        </ContainerPage>
      )}
    </>
  );
};

export default OurFriendsPage;
