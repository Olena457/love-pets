import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import selectStyles from './selectStyles.js';
import SelectLocation from '../SelectLocation/SelectLocation.jsx';
import { selectLocation } from '../../redux/filters/filtersSelectors.js';
import { setFilterTerm, setPage } from '../../redux/pets/petsSlice.js';
import { selectFilterTerm } from '../../redux/pets/petsSelectors.js';
import {
  setCategory,
  setGender,
  setLocation,
  setLocationId,
  setSpecie,
} from '../../redux/filters/filtersSlice.js';
import SearchField from '../SearchField/SearchField.jsx';
import css from './NoticesFilters.module.css';

export const NoticesFilters = ({
  genders,
  species,
  categories,
  filterTearm,
  onFetch,
  onPageChange,
  categoryTerm,
  specieTerm,
  genderTerm,
}) => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  const handleCategoryChange = selectedOption => {
    dispatch(setCategory(selectedOption.value));
    dispatch(setPage(1));
  };

  const handleSpecieChange = selectedOption => {
    dispatch(setSpecie(selectedOption.value));
    dispatch(setPage(1));
  };

  const handleLocationChange = selectedOption => {
    dispatch(setLocationId(selectedOption.value));
    dispatch(setLocation(selectedOption));
    dispatch(setPage(1));
  };

  const handleGenderChange = selectedOption => {
    dispatch(setGender(selectedOption?.value || ''));
  };

  return (
    <div className={css.filters}>
      <div className={css.row}>
        <div className={css.first}>
          <SearchField
            onFetch={onFetch}
            setFilterTerm={setFilterTerm}
            selectFilterTerm={selectFilterTerm}
            onPageChange={onPageChange}
            filterWord={filterTearm}
            isInFilters
          />
        </div>
        <div className={css.second}>
          <Select
            options={categories}
            placeholder="Category"
            onChange={handleCategoryChange}
            value={categoryTerm}
            styles={selectStyles}
          />
        </div>
        <div className={css.third}>
          <Select
            options={genders}
            placeholder="Gender"
            onChange={handleGenderChange}
            value={genderTerm}
            styles={selectStyles}
          />
        </div>
        <div className={css.fourth}>
          <Select
            options={species}
            placeholder="Type"
            onChange={handleSpecieChange}
            value={specieTerm}
            styles={selectStyles}
          />
        </div>
        <div className={css.fifth}>
          <SelectLocation
            handleOptionChange={handleLocationChange}
            selectedOpt={location}
          />
        </div>
      </div>
      <hr className={css.hr} />
    </div>
  );
};

export default NoticesFilters;
