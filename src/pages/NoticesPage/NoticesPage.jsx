import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import {
  fetchNotices,
  toggleFavoriteNotice,
} from '../../redux/notices/noticesOperations.js';
import {
  selectTotalPages,
  selectCurrentPage,
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

  useEffect(() => {
    dispatch(
      fetchNotices({
        page: currentPage,
        perPage: 3,
        searchQuery,
        category,
        gender,
        type,
        location,
      })
    );
  }, [dispatch, currentPage, searchQuery, category, gender, type, location]);

  const handleLearnMore = id => {
    console.log(`Fetch details for notice with id: ${id}`);
    // need to add modal window with details
  };

  const handleToggleFavorite = id => {
    dispatch(toggleFavoriteNotice(id));
  };

  const handleFilterChange = page => {
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
      {notices.length === 0 ? (
        <p className={css.noResults}>
          "Unfortunately, no pets were found for your request.😿 Please try
          again."
        </p>
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
    </div>
  );
};

export default NoticesPage;
