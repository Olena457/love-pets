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
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setSort(state, action) {
      const sortOption = action.payload;
      if (!Array.isArray(state.sort)) {
        state.sort = [];
      }

      const popularityOptions = ['popular', 'unpopular'];
      const priceOptions = ['cheap', 'expensive'];

      if (state.sort.includes(sortOption)) {
        state.sort = state.sort.filter(option => option !== sortOption);
      } else {
        state.sort = state.sort.filter(
          option =>
            !(
              popularityOptions.includes(option) &&
              popularityOptions.includes(sortOption)
            ) &&
            !(
              priceOptions.includes(option) && priceOptions.includes(sortOption)
            )
        );

        state.sort.push(sortOption);
      }
    },
    resetFilters(state) {
      state.searchQuery = '';
      state.category = '';
      state.gender = '';
      state.type = '';
      state.location = '';
      state.sort = [];
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
