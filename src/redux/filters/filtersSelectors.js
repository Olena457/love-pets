import { createSelector } from '@reduxjs/toolkit';
import {
  selectCategories,
  selectSexOptions,
  selectSpecies,
  selectNotices,
} from '../notices/noticesSelectors.js';
import { selectCityLocations } from '../cities/citiesSelectors.js';

export const selectFilters = state => state.filters;
export const selectSearchQuery = state => state.filters.searchQuery;
export const selectCategory = state => state.filters.category;
export const selectGender = state => state.filters.gender;
export const selectType = state => state.filters.type;
export const selectLocation = state => state.filters.location;

export const selectAvailableCategories = createSelector(
  [selectCategories],
  categories => categories || []
);

export const selectAvailableSexOptions = createSelector(
  [selectSexOptions],
  sexOptions => sexOptions || []
);

export const selectAvailableSpecies = createSelector(
  [selectSpecies],
  species => species || []
);

export const selectAvailableLocations = createSelector(
  [selectCityLocations],
  locations => locations || []
);

export const selectFilteredNoticesWithFilters = createSelector(
  [selectNotices, selectFilters],
  (notices, filters) => {
    const { searchQuery, category, gender, type, location, sort } = filters;

    let filteredNotices = notices.filter(item => {
      const matchesSearchQuery =
        !searchQuery ||
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.comment?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !category || item.category === category;
      const matchesGender = !gender || item.sex === gender;
      const matchesType = !type || item.species === type;
      const matchesLocation = !location || item.location === location;

      return (
        matchesSearchQuery &&
        matchesCategory &&
        matchesGender &&
        matchesType &&
        matchesLocation
      );
    });

    const sortNotices = (array, sortOption) => {
      const sortingMap = {
        popular: (a, b) => (b.popularity || 0) - (a.popularity || 0),
        unpopular: (a, b) => (a.popularity || 0) - (b.popularity || 0),
        cheap: (a, b) => (Number(a.price) || 0) - (Number(b.price) || 0),
        expensive: (a, b) => (Number(b.price) || 0) - (Number(a.price) || 0),
      };

      const sortFunction = sortingMap[sortOption];
      return sortFunction ? array.sort(sortFunction) : array;
    };

    if (sort) {
      sort.forEach(sortOption => {
        filteredNotices = sortNotices([...filteredNotices], sortOption);
      });
    }

    return filteredNotices;
  }
);
