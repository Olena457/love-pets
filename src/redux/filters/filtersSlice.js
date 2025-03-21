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
      if (!Array.isArray(state.sort)) {
        state.sort = [];
      }
      const popularityOptions = ['popular', 'unpopular'];
      const priceOptions = ['cheap', 'expensive'];

      // toggle sort option
      if (state.sort.includes(sortOption)) {
        state.sort = state.sort.filter(option => option !== sortOption);
      } else {
        state.sort = state.sort.filter(
          options =>
            !(
              popularityOptions.includes(options) &&
              popularityOptions.includes(sortOption)
            ) &&
            !(
              priceOptions.includes(options) &&
              priceOptions.includes(sortOption)
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
