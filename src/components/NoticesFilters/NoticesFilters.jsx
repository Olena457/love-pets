import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import selectStyles from './selectStyles.js';
import SelectLocation from '../SelectLocation/SelectLocation.jsx';
import blackCross from '../../assets/icons/blackCross.svg';

import {
  selectAvailableCategories,
  selectAvailableSexOptions,
  selectAvailableSpecies,
  selectAvailableLocations,
} from '../../redux/filters/filtersSelectors.js';
import {
  setSearchQuery,
  setCategory,
  setGender,
  setLocation,
  setSort,
} from '../../redux/filters/filtersSlice.js';
import SearchField from '../SearchField/SearchField.jsx';
import { setCurrentPage } from '../../redux/notices/noticesSlice.js';
import { selectSearchQuery } from '../../redux/notices/noticesSelectors.js';
import css from './NoticesFilters.module.css';

export const NoticesFilters = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectAvailableCategories);
  const sexOptions = useSelector(selectAvailableSexOptions);
  const species = useSelector(selectAvailableSpecies);
  const locations = useSelector(selectAvailableLocations);
  const searchQuery = useSelector(selectSearchQuery);
  const addShowAllOption = options => [
    { value: '', label: 'Show all' }, // "Show all"
    ...options,
  ];
  //
  const sortOptions = useSelector(state => state.filters.sort);

  const handleCategoryChange = selectedOption => {
    dispatch(setCategory(selectedOption?.value || ''));
    dispatch(setCurrentPage(1));
  };

  const handleGenderChange = selectedOption => {
    dispatch(setGender(selectedOption?.value || ''));
    dispatch(setCurrentPage(1));
  };

  const handleSpeciesChange = selectedOption => {
    dispatch(setCategory(selectedOption?.value || ''));
    dispatch(setCurrentPage(1));
  };

  const handleLocationChange = selectedOption => {
    dispatch(setLocation(selectedOption?.value || ''));
    dispatch(setCurrentPage(1));
  };

  const handleSearchQueryChange = term => {
    dispatch(setSearchQuery(term));
    dispatch(setCurrentPage(1));
  };

  const handleSortChange = option => {
    dispatch(setSort(option)); // renew sort
    dispatch(setCurrentPage(1)); // return page 1
  };

  const handleRemoveSort = (option, event) => {
    event.preventDefault();
    dispatch(setSort(option));
  };

  const handleResetSort = () => {
    dispatch(setSort([]));
  };

  return (
    <div className={css.filters}>
      <div className={css.row}>
        <div className={css.first}>
          <SearchField
            onSubmit={handleSearchQueryChange}
            initialQuery={searchQuery}
          />
        </div>
        <div className={css.second}>
          <Select
            options={categories}
            placeholder="Categories"
            onChange={handleCategoryChange}
            styles={selectStyles}
          />
        </div>
        <div className={css.third}>
          <Select
            options={sexOptions}
            placeholder="Gender"
            onChange={handleGenderChange}
            styles={selectStyles}
          />
        </div>
        <div className={css.fourth}>
          <Select
            options={species}
            placeholder="Species"
            onChange={handleSpeciesChange}
            styles={selectStyles}
          />
        </div>

        <div className={css.fifth}>
          <SelectLocation
            handleOptionChange={handleLocationChange}
            // value={locationValue}
            options={addShowAllOption(
              locations.map(location => ({
                value: location.cityEn,
                label: location.cityEn,
              }))
            )}
            onChange={handleLocationChange}
            placeholder="Location"
            styles={selectStyles}
          />
        </div>
      </div>
      <hr className={css.hr} />
      {/* sort */}
      <div className={css.sorting}>
        {['popular', 'unpopular', 'cheap', 'expensive'].map(option => (
          <div
            key={option}
            className={sortOptions.includes(option) ? css.selected : ''}
          >
            <input
              type="checkbox"
              id={option}
              value={option}
              checked={sortOptions.includes(option)}
              onChange={() => handleSortChange(option)}
            />
            <label htmlFor={option} className={css.sortLabel}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
              {sortOptions.includes(option) && (
                <img
                  src={blackCross}
                  alt="clear"
                  width="18"
                  height="18"
                  className={css.crossIcon}
                  onClick={event => handleRemoveSort(option, event)}
                />
              )}
            </label>
          </div>
        ))}
      </div>
      <button className={css.resetButton} onClick={handleResetSort}>
        Reset
      </button>
    </div>
  );
};

export default NoticesFilters;
