import { createSelector } from '@reduxjs/toolkit';
import {
  selectCategories,
  selectSexOptions,
  selectSpecies,
  selectNotices,
} from '../notices/noticesSelectors';
import { selectCityLocations } from '../cities/citiesSelectors';

export const selectFilters = state => state.filters;
export const selectSearchQuery = state => state.filters.searchQuery;
export const selectCategory = state => state.filters.category;
export const selectGender = state => state.filters.gender;
export const selectSpeciesType = state => state.filters.species;
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
    const { searchQuery, category, gender, species, location, sort } = filters;

    let filteredNotices = notices.filter(notice => {
      const matchesSearchQuery =
        !searchQuery ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.comment.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !category || notice.category === category;
      const matchesGender = !gender || notice.sex === gender;
      const matchesSpecies = !species || notice.species === species;
      const matchesLocation = !location || notice.location === location;

      return (
        matchesSearchQuery &&
        matchesCategory &&
        matchesGender &&
        matchesSpecies &&
        matchesLocation
      );
    });

    // sort
    if (sort && sort.length > 0) {
      sort.forEach(sortOption => {
        if (sortOption === 'popular') {
          filteredNotices.sort(
            (a, b) => (b.popularity || 0) - (a.popularity || 0)
          );
        } else if (sortOption === 'unpopular') {
          filteredNotices.sort(
            (a, b) => (a.popularity || 0) - (b.popularity || 0)
          );
        } else if (sortOption === 'cheap') {
          filteredNotices.sort(
            (a, b) => (Number(a.price) || 0) - (Number(b.price) || 0)
          );
        } else if (sortOption === 'expensive') {
          filteredNotices.sort(
            (a, b) => (Number(b.price) || 0) - (Number(a.price) || 0)
          );
        }
      });
    }

    return filteredNotices;
  }
);
