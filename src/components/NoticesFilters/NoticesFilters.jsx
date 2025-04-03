// import { useDispatch, useSelector } from 'react-redux';
// // import React, { memo } from 'react';
// import Select from 'react-select';
// import selectStyles from './selectStyles.js';
// import SelectLocation from '../SelectLocation/SelectLocation.jsx';
// import blackCross from '../../assets/icons/blackCross.svg';

// import {
//   selectAvailableCategories,
//   selectAvailableSexOptions,
//   selectAvailableSpecies,
//   selectAvailableLocations,
// } from '../../redux/filters/filtersSelectors.js';
// import {
//   setSearchQuery,
//   setCategory,
//   setGender,
//   setType,
//   setLocation,
//   setSort,
//   resetFilters,
// } from '../../redux/filters/filtersSlice.js';
// import SearchField from '../SearchField/SearchField.jsx';
// import { setCurrentPage } from '../../redux/notices/noticesSlice.js';
// import { selectSearchQuery } from '../../redux/notices/noticesSelectors.js';
// import css from './NoticesFilters.module.css';
// import { useState } from 'react';

// export const NoticesFilters = ({ genders, species, categories, onFetch }) => {
//   const dispatch = useDispatch();

//   const categories = useSelector(selectAvailableCategories);
//   const sexOptions = useSelector(selectAvailableSexOptions);
//   const species = useSelector(selectAvailableSpecies);
//   const locations = useSelector(selectAvailableLocations);
//   const searchQuery = useSelector(selectSearchQuery);

//   // state sort local
//   const [sortOptions, setSortOptions] = useState([]);

//   const handleCategoryChange = selectedOption => {
//     dispatch(setCategory(selectedOption?.value || ''));
//     dispatch(setCurrentPage(1));
//   };

//   const handleGenderChange = selectedOption => {
//     dispatch(setGender(selectedOption?.value || ''));
//   };

//   const handleSpeciesChange = selectedOption => {
//     dispatch(setSpecies(selectedOption?.value || ''));
//   };

//   const handleLocationChange = selectedOption => {
//     // dispatch(setLocationId(selectedOption?.value || ''));
//     dispatch(setLocation(selectedOption || ''));
//     dispatch(setCurrentPage(1));
//   };

//   const handleSearchQueryChange = term => {
//     dispatch(setSearchQuery(term));
//     onFetch();
//   };

//   const handleSortChange = option => {
//     setSortOptions(prev =>
//       prev.includes(option)
//         ? prev.filter(item => item !== option)
//         : [...prev, option]
//     );
//   };

//   const handleRemoveSort = (option, event) => {
//     event.preventDefault();
//     setSortOptions(prev => prev.filter(item => item !== option));
//   };

//   const handleResetSort = () => {
//     setSortOptions([]);
//   };

//   return (
//     <div className={css.filters}>
//       <div className={css.row}>
//         <div className={css.first}>
//           <SearchField
//             onSubmit={handleSearchQueryChange}
//             initialQuery={searchQuery}
//           />
//         </div>
//         <div className={css.second}>
//           <Select
//             options={categories}
//             placeholder="Categories"
//             onChange={handleCategoryChange}
//             value={categories.find(option => option.value === category)}
//             styles={selectStyles}
//           />
//         </div>
//         <div className={css.third}>
//           <Select
//             options={genders}
//             placeholder="Gender"
//             onChange={handleGenderChange}
//             value={genders.find(option => option.value === gender)}
//             styles={selectStyles}
//           />
//         </div>
//         <div className={css.fourth}>
//           <Select
//             options={species}
//             placeholder="Species"
//             onChange={handleSpeciesChange}
//             value={species.find(option => option.value === specie)}
//             styles={selectStyles}
//           />
//         </div>
//         <div className={css.fifth}>
//           <SelectLocation
//             handleOptionChange={handleLocationChange}
//             selectedOpt={location}
//           />
//         </div>
//       </div>
//       <hr className={css.hr} />

//       {/* Сортування */}
//       <div className={css.sorting}>
//         {['popular', 'unpopular', 'cheap', 'expensive'].map(option => (
//           <div
//             key={option}
//             className={sortOptions.includes(option) ? css.selected : ''}
//           >
//             <input
//               type="checkbox"
//               id={option}
//               value={option}
//               checked={sortOptions.includes(option)}
//               onChange={() => handleSortChange(option)}
//             />
//             <label htmlFor={option} className={css.sortLabel}>
//               {option.charAt(0).toUpperCase() + option.slice(1)}
//               {sortOptions.includes(option) && (
//                 <img
//                   src={blackCross}
//                   alt="clear"
//                   width="18"
//                   height="18"
//                   className={css.crossIcon}
//                   onClick={event => handleRemoveSort(option, event)}
//                 />
//               )}
//             </label>
//           </div>
//         ))}
//       </div>
//       <button className={css.resetButton} onClick={handleResetSort}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default NoticesFilters;
// __________________________________________

// import { useDispatch, useSelector } from 'react-redux';
// import Select from 'react-select';
// import selectStyles from './selectStyles.js';
// import SelectLocation from '../SelectLocation/SelectLocation.jsx';
// import blackCross from '../../assets/icons/blackCross.svg';
// import {
//   selectAvailableCategories,
//   selectAvailableSexOptions,
//   selectAvailableSpecies,
//   selectAvailableLocations,
// } from '../../redux/filters/filtersSelectors.js';
// import {
//   setSearchQuery,
//   setCategory,
//   setGender,
//   setType,
//   setLocation,
//   setSort,
//   resetFilters,
// } from '../../redux/filters/filtersSlice.js';
// import SearchField from '../SearchField/SearchField.jsx';
// import { setCurrentPage } from '../../redux/notices/noticesSlice.js';
// import { selectSearchQuery } from '../../redux/notices/noticesSelectors.js';
// import css from './NoticesFilters.module.css';
// import { useState } from 'react';

// export const NoticesFilters = ({
//   genders = [],
//   species = [],
//   categories = [],
//   onFetch = () => {},
// }) => {
//   const dispatch = useDispatch();

//   const availableCategories = useSelector(selectAvailableCategories) || [];
//   const availableSexOptions = useSelector(selectAvailableSexOptions) || [];
//   const availableSpecies = useSelector(selectAvailableSpecies) || [];
//   const availableLocations = useSelector(selectAvailableLocations) || [];
//   const searchQuery = useSelector(selectSearchQuery) || '';

//   const [sortOptions, setSortOptions] = useState([]);

//   // useEffect(() => {
//   //   dispatch(fetchNoticeCategories());
//   //   dispatch(fetchNoticeSexOptions());
//   //   dispatch(fetchNoticeSpecies());
//   //   dispatch(fetchCityLocations());
//   // }, [dispatch]);

//   const handleCategoryChange = selectedOption => {
//     dispatch(setCategory(selectedOption?.value || ''));
//     dispatch(setCurrentPage(1));
//   };

//   const handleGenderChange = selectedOption => {
//     dispatch(setGender(selectedOption?.value || ''));
//   };

//   const handleSpeciesChange = selectedOption => {
//     dispatch(setType(selectedOption?.value || ''));
//   };

//   const handleLocationChange = selectedOption => {
//     dispatch(setLocation(selectedOption?.value || ''));
//     dispatch(setCurrentPage(1));
//   };

//   const handleSearchQueryChange = term => {
//     dispatch(setSearchQuery(term));
//     onFetch();
//   };

//   const handleSortChange = option => {
//     const updatedSort = sortOptions.includes(option)
//       ? sortOptions.filter(item => item !== option)
//       : [...sortOptions, option];
//     setSortOptions(updatedSort);
//     dispatch(setSort(updatedSort));
//     onFetch();
//   };

//   const handleRemoveSort = (option, event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     const updatedSort = sortOptions.filter(item => item !== option);
//     setSortOptions(updatedSort);
//     dispatch(setSort(updatedSort));
//     onFetch();
//   };

//   const handleResetSort = () => {
//     setSortOptions([]);
//     dispatch(resetFilters());
//     onFetch();
//   };

//   return (
//     <div className={css.filters}>
//       <div className={css.row}>
//         <div className={css.first}>
//           <SearchField
//             onSubmit={handleSearchQueryChange}
//             initialQuery={searchQuery}
//           />
//         </div>
//         <div className={css.second}>
//           <Select
//             options={availableCategories.map(category => ({
//               value: category,
//               label: category,
//             }))}
//             placeholder="Categories"
//             onChange={handleCategoryChange}
//             value={
//               availableCategories.find(option => option.value === categories) ||
//               null
//             }
//             styles={selectStyles}
//           />
//         </div>
//         <div className={css.third}>
//           <Select
//             options={availableSexOptions.map(sex => ({
//               value: sex,
//               label: sex,
//             }))}
//             placeholder="Gender"
//             onChange={handleGenderChange}
//             value={
//               availableSexOptions.find(option => option.value === genders) ||
//               null
//             }
//             styles={selectStyles}
//           />
//         </div>
//         <div className={css.fourth}>
//           <Select
//             options={availableSpecies.map(type => ({
//               value: type,
//               label: type,
//             }))}
//             placeholder="Species"
//             onChange={handleSpeciesChange}
//             value={
//               availableSpecies.find(option => option.value === species) || null
//             }
//             styles={selectStyles}
//           />
//         </div>
//         <div className={css.fifth}>
//           <SelectLocation
//             handleOptionChange={handleLocationChange}
//             selectedOpt={
//               (availableLocations || []).find(
//                 option => option.value === location
//               ) || null
//             }
//           />
//         </div>
//       </div>
//       <hr className={css.hr} />

//       <div className={css.sorting}>
//         {['popular', 'unpopular', 'cheap', 'expensive'].map(option => (
//           <div
//             key={option}
//             className={sortOptions.includes(option) ? css.selected : ''}
//           >
//             <input
//               type="checkbox"
//               id={option}
//               value={option}
//               checked={sortOptions.includes(option)}
//               onChange={() => handleSortChange(option)}
//             />
//             <label htmlFor={option} className={css.sortLabel}>
//               {option.charAt(0).toUpperCase() + option.slice(1)}
//               {sortOptions.includes(option) && (
//                 <img
//                   src={blackCross}
//                   alt="clear"
//                   width="18"
//                   height="18"
//                   className={css.crossIcon}
//                   onClick={event => handleRemoveSort(option, event)}
//                 />
//               )}
//             </label>
//           </div>
//         ))}
//       </div>
//       <button className={css.resetButton} onClick={handleResetSort}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default NoticesFilters;
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

  // Локальний стан для сортування
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
    dispatch(setSort(option)); // Оновлення сортування в Redux
    dispatch(setCurrentPage(1)); // Повернення до першої сторінки
  };

  const handleRemoveSort = (option, event) => {
    event.preventDefault();
    dispatch(setSort(option)); // Видалення сортування
  };

  const handleResetSort = () => {
    dispatch(setSort([])); // Скидання сортування в Redux
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
          <SelectLocation handleOptionChange={handleLocationChange} />
        </div>
      </div>
      <hr className={css.hr} />

      {/* Сортування */}
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
