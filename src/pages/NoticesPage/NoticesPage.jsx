import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import ModalWrapper from '../../components/ModalWrapper/ModalWrapper.jsx';
import { openModal } from '../../redux/modal/modalSlice.js';
import { fetchNoticeById } from '../../redux/notices/noticesOperations.js';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import {
  fetchNotices,
  toggleFavoriteNotice,
} from '../../redux/notices/noticesOperations.js';
import {
  selectTotalPages,
  selectCurrentPage,
  selectIsLoading,
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
  const notices = useSelector(selectFilteredNoticesWithFilters);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const searchQuery = useSelector(selectSearchQuery);
  const category = useSelector(selectCategory);
  const gender = useSelector(selectGender);
  const type = useSelector(selectType);
  const location = useSelector(selectLocation);
  const isModalOpen = useSelector(selectIsOpenModal);
  const isLoading = useSelector(selectIsLoading);

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

  const handleLearnMore = id => {
    dispatch(fetchNoticeById(id));
    dispatch(openModal());
  };

  const handleToggleFavorite = id => {
    dispatch(toggleFavoriteNotice(id));
  };

  const handleFilterChange = () => {
    dispatch(setCurrentPage(1));
    dispatch(
      fetchNotices({
        page: 1,
        perPage: 6,
        searchQuery,
        category,
        gender,
        type,
        location,
      })
    );
  };

  const handlePageChange = page => {
    dispatch(setCurrentPage(page));
    dispatch(
      fetchNotices({
        page,
        perPage: 6,
        searchQuery,
        category,
        gender,
        type,
        location,
      })
    );
  };

  return (
    <div className={css.container}>
      <Title title="Find your favorite pet" />
      <NoticesFilters onFilterChange={handleFilterChange} />
      {isLoading ? (
        <Loader />
      ) : notices.length === 0 ? (
        <div className={css.errorContainer}>
          No results found for the selected filters.
          <br /> Please reset the filter and select other options 🐈
        </div>
      ) : (
        <>
          <NoticesList
            notices={notices}
            onLearnMore={handleLearnMore}
            onToggleFavorite={handleToggleFavorite}
          />
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
      {isModalOpen && <ModalWrapper />}
    </div>
  );
};

export default NoticesPage;
