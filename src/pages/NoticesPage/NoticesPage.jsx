import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import {
  fetchCategories,
  fetchNoticeSex,
  fetchNotices,
  toggleFavoriteNotice,
  fetchSpecies,
} from '../../redux/notices/noticesOperations.js';
import {
  selectCategories,
  selectError,
  selectSearchQuery,
  selectSexOptions,
  selectIsLoading,
  selectPage,
  selectPerPage,
  selectFilteredNoticesWithFilters,
  selectSpecies,
  selectTotalPages,
} from '../../redux/notices/noticesSelectors.js';
import {
  selectCategory,
  selectGender,
} from '../../redux/filters/filtersSelectors.js';
import {
  setSearchQuery,
  setCurrentPage,
} from '../../redux/notices/noticesSlice.js';
import css from './NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const currentPage = useSelector(selectPage);
  const error = useSelector(selectError);
  const SearchQuery = useSelector(selectSearchQuery);
  const genders = useSelector(selectSexOptions);
  const isLoading = useSelector(selectIsLoading);
  const perPage = useSelector(selectPerPage);
  const genderTerm = useSelector(selectGender);
  const species = useSelector(selectSpecies);
  const notices = useSelector(selectFilteredNoticesWithFilters); // Використовуємо notices замість pets
  const totalPages = useSelector(selectTotalPages);
  const categoryTerm = useSelector(selectCategory);
  const sort = useSelector(state => state.filters.sort); // Додано

  const filteredNotices = genderTerm
    ? notices.filter(notice => notice.sex === genderTerm)
    : notices;

  // Initial data fetching
  useEffect(() => {
    dispatch(fetchNoticeSex());
    dispatch(fetchCategories());
    dispatch(fetchSpecies());
    dispatch(setSearchQuery(''));
    dispatch(setCurrentPage(1));
  }, [dispatch]);

  // Fetch notices based on filters, pagination, and sort options
  useEffect(() => {
    dispatch(
      fetchNotices({
        page: currentPage,
        limit: perPage,
        SearchQuery,
        category: categoryTerm,
        species,
        sex: genderTerm,
        isPopular: sort.includes('popular'),
        isExpensive: sort.includes('expensive'),
      })
    );
  }, [
    dispatch,
    currentPage,
    perPage,
    SearchQuery,
    categoryTerm,
    species,
    genderTerm,
    sort,
  ]);

  const handlePageChange = newPage => {
    dispatch(setCurrentPage(newPage));
  };
  const handleLearnMore = id => {
    console.log(`Fetch details for notice ID: ${id}`);
    // Додати модалку
  };

  const handleToggleFavorite = id => {
    dispatch(toggleFavoriteNotice(id));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={css.container}>
      {error && (
        <p className={css.error}>Oops...Please try to reload the page🐈</p>
      )}
      <Title title="Find your favorite pet" />
      <NoticesFilters
        genders={genders}
        categories={categories}
        species={species}
        filterTerm={SearchQuery}
        onFilterChange={term => dispatch(setSearchQuery(term))}
        onFetch={params => dispatch(fetchNotices(params))}
        onPageChange={page => dispatch(setCurrentPage(page))}
        categoryTerm={categoryTerm}
        genderTerm={genderTerm}
      />
      {filteredNotices.length === 0 ? (
        <div className={css.noResults}>
          "Unfortunately, no pets were found for your request.😿 Please try
          again."
        </div>
      ) : (
        <>
          <NoticesList
            notices={filteredNotices}
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
