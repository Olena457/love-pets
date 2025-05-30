import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Title from '../../components/Title/Title.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import { closeModal } from '../../redux/modal/modalSlice.js';
import Modal from '../../components/Modal/Modal.jsx';
import ModalAttention from '../../components/ModalAttention/ModalAttention.jsx';
import ModalApproveAction from './../../components/ModalApproveAction/ModalApproveAction';

import ModalNotices from '../../components/ModalNotices/ModalNotices.jsx';
import { fetchNotices } from '../../redux/notices/noticesOperations.js';
import {
  selectIsOpenModal,
  selectIsApproveModalOpen,
  selectModalData,
  selectIsAttentionModalOpen,
} from '../../redux/modal/modalSelectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import {
  selectTotalPages,
  selectCurrentPage,
  selectIsLoading,
  selectFavorites,
  // selectNotice,
  selectError,
} from '../../redux/notices/noticesSelectors.js';
import {
  selectFilteredNoticesWithFilters,
  selectSearchQuery,
  selectCategory,
  selectGender,
  selectType,
  selectLocation,
} from '../../redux/filters/filtersSelectors.js';
import { setCurrentPage } from '../../redux/notices/noticesSlice.js';
import css from './NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsOpenModal);
  const modalData = useSelector(selectModalData);
  const notices = useSelector(selectFilteredNoticesWithFilters);
  const favorites = useSelector(selectFavorites);
  const isAttentionModalOpen = useSelector(selectIsAttentionModalOpen);
  // const selectedNoticeState = useSelector(selectNotice);
  const isApproveModalOpen = useSelector(selectIsApproveModalOpen);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  const searchQuery = useSelector(selectSearchQuery);
  const category = useSelector(selectCategory);
  const gender = useSelector(selectGender);
  const type = useSelector(selectType);
  const location = useSelector(selectLocation);
  const errorMessage = useSelector(selectError);

  const params = useMemo(
    () => ({
      page: currentPage,
      perPage: 6,
      searchQuery,
      category,
      gender,
      type,
      location,
    }),
    [currentPage, searchQuery, category, gender, type, location]
  );

  useEffect(() => {
    dispatch(fetchNotices(params));
  }, [dispatch, params]);

  const handleFilterChange = () => {
    dispatch(setCurrentPage(1));
    dispatch(fetchNotices(params));
  };

  const handlePageChange = page => {
    dispatch(setCurrentPage(page));
    dispatch(fetchNotices({ ...params, page }));
  };
  return (
    <div className={css.container}>
      <Title title="Find your favorite pet" />
      <NoticesFilters onFilterChange={handleFilterChange} />

      {isLoading ? (
        <div className={css.loadText}>Loading pets... </div>
      ) : notices.length === 0 && !isLoading ? (
        <div className={css.errorContainer}>
          No results found for the selected filters. <br />
          Please select more filter for search.🐈
        </div>
      ) : errorMessage ? (
        <div className={css.errorContainer}>{errorMessage}</div>
      ) : (
        <>
          <NoticesList notices={notices} favorites={favorites} />
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}

      {isModalOpen && (
        <Modal onClose={() => dispatch(closeModal())}>
          {isAttentionModalOpen && <ModalAttention />}
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
  );
};
export default NoticesPage;
