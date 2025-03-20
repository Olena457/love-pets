import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  category: '',
  gender: '',
  type: '',
  location: '',
  sort: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // renew search query
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    // renew category of pet
    setCategory(state, action) {
      state.category = action.payload;
    },
    // renew sex of pet
    setGender(state, action) {
      state.gender = action.payload;
    },
    // renew type of pet
    setType(state, action) {
      state.type = action.payload;
    },
    // renew location
    setLocation(state, action) {
      state.location = action.payload;
    },
    // renew sortion options
    setSort(state, action) {
      const sortOption = action.payload;
      const { sort } = state;

      const sortingGroups = {
        popularity: ['popular', 'unpopular'],
        price: ['cheap', 'expensive'],
      };

      // toggle sort option
      if (sort.includes(sortOption)) {
        state.sort = sort.filter(option => option !== sortOption);
        return;
      }

      // filter out conflicting options
      const isConflictingOption = group =>
        sortingGroups[group].includes(sortOption);

      const updatedSort = sort.filter(
        option =>
          !Object.keys(sortingGroups).some(
            group =>
              isConflictingOption(group) &&
              sortingGroups[group].includes(option)
          )
      );

      state.sort = [...updatedSort, sortOption];
    },
    // reset all filters
    resetFilters(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setSearchQuery,
  setCategory,
  setGender,
  setType,
  setLocation,
  setSort,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
