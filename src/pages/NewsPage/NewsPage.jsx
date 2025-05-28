import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../redux/news/newsOperations.js';
import {
  selectNews,
  selectIsLoading,
  selectError,
  selectTotalPages,
} from '../../redux/news/newsSelectors.js';
import { setCurrentPage, setSearchQuery } from '../../redux/news/newsSlice.js';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Title from '../../components/Title/Title.jsx';
import SearchField from '../../components/SearchField/SearchField.jsx';
import NewsList from '../../components/NewsList/NewsList.jsx';
import ContainerPage from '../../components/ContainerPage/ContainerPage.jsx';
import css from './NewsPage.module.css';

const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const error = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(state => state.news.currentPage);
  const searchQuery = useSelector(state => state.news.searchQuery);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, perPage: 6, searchQuery }));
  }, [dispatch, currentPage, searchQuery]);

  const handleSearchSubmit = query => {
    dispatch(setSearchQuery(query));
    dispatch(setCurrentPage(1));
  };

  const handlePageChange = page => {
    dispatch(setCurrentPage(page));
  };

  return (
    <ContainerPage>
      <div className={css.searchContainer}>
        <Title title="News" />
        <div className={css.search}>
          <SearchField
            onSubmit={handleSearchSubmit}
            initialQuery={searchQuery}
          />
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {news.length === 0 && !isLoading && !error && (
        <p className={css.noFound}>
          No results found for &quot;{searchQuery}&quot;.
        </p>
      )}
      {news.length > 0 && <NewsList news={news} />}
      {totalPages > 1 && news.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </ContainerPage>
  );
};

export default NewsPage;
