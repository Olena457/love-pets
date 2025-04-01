import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title/Title.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import {
  fetchCategories,
  fetchGenders,
  fetchPets,
  fetchSpecies,
} from '../../redux/pets/petsOperation.js';
import {
  selectCategories,
  selectError,
  selectFilterTerm,
  selectGenders,
  selectIsLoading,
  selectPage,
  selectPerPage,
  selectPets,
  selectSpecies,
  selectTotalPages,
} from '../../redux/pets/petsSelectors.js';
import {
  selectCategory,
  selectGender,
  selectIsExpensive,
  selectIsPopular,
  selectLocationId,
  selectSpecie,
} from '../../redux/filters/filtersSelectors.js';
import { setFilterTerm, setPage } from '../../redux/pets/petsSlice.js';
import css from './NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const currentPage = useSelector(selectPage);
  const error = useSelector(selectError);
  const filterWord = useSelector(selectFilterTerm);
  const genders = useSelector(selectGenders);
  const isLoading = useSelector(selectIsLoading);
  const perPage = useSelector(selectPerPage);
  const genderTerm = useSelector(selectGender);
  const species = useSelector(selectSpecies);
  const pets = useSelector(selectPets);
  const totalPages = useSelector(selectTotalPages);
  const categoryTerm = useSelector(selectCategory);
  const isExpensive = useSelector(selectIsExpensive);
  const isPopular = useSelector(selectIsPopular);
  const locationId = useSelector(selectLocationId);
  const specieTerm = useSelector(selectSpecie);

  const filteredPets = genderTerm
    ? pets.filter(pet => pet.sex === genderTerm)
    : pets;

  // Initial data fetching
  useEffect(() => {
    dispatch(fetchGenders());
    dispatch(fetchCategories());
    dispatch(fetchSpecies());
    dispatch(setFilterTerm(''));
    dispatch(setPage(1));
  }, [dispatch]);

  // Fetch pets based on filters and pagination
  useEffect(() => {
    dispatch(
      fetchPets({
        page: currentPage,
        limit: perPage,
        filterWord,
        category: categoryTerm,
        species: specieTerm,
        sex: genderTerm,
        isPopular,
        isExpensive,
        locationId,
      })
    );
  }, [
    dispatch,
    currentPage,
    perPage,
    filterWord,
    categoryTerm,
    specieTerm,
    genderTerm,
    isPopular,
    isExpensive,
    locationId,
  ]);

  const handlePageChange = newPage => {
    dispatch(setPage(newPage));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={css.container}>
      {error && (
        <p className={css.error}>Oops...Please try to reload the page</p>
      )}
      <Title title="Find your favorite pet" />
      <NoticesFilters
        genders={genders}
        categories={categories}
        species={species}
        filterTerm={filterWord}
        onFilterChange={term => dispatch(setFilterTerm(term))}
        categoryTerm={categoryTerm}
        genderTerm={genderTerm}
      />
      {filteredPets.length === 0 ? (
        <div className={css.noResults}>
          "Unfortunately, no pets were found for your request.😿 Please try
          again."
        </div>
      ) : (
        <>
          <NoticesList pets={filteredPets} />
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
