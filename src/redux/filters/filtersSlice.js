// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   category: '',
//   gender: '',
//   specie: '',
//   popular: null,
//   expensive: null,
//   location: '',
//   locationId: '',
// };

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState,
//   reducers: {
//     setCategory(state, action) {
//       state.category = action.payload;
//     },
//     setGender(state, action) {
//       state.gender = action.payload;
//     },
//     setSpecie(state, action) {
//       state.type = action.payload;
//     },
//     setPopular(state, action) {
//       state.popular = action.payload;
//     },
//     setExpensive(state, action) {
//       state.expensive = action.payload;
//     },
//     // renew location
//     setLocation(state, action) {
//       state.location = action.payload;
//     },
//     setLocationId(state, action) {
//       state.locationId = action.payload;
//     },
//   },
// });

// export const {
//   setCategory,
//   setGender,
//   setSpecie,
//   setPopular,
//   setExpensive,
//   setLocation,
//   setLocationId,
//   resetFilters,
// } = filtersSlice.actions;

// export const filtersReducer = filtersSlice.reducer;
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

      const conflictGroups = [
        ['popular', 'unpopular'],
        ['cheap', 'expensive'],
      ];

      state.sort = state.sort.includes(sortOption)
        ? state.sort.filter(option => option !== sortOption)
        : state.sort
            .filter(
              option =>
                !conflictGroups.some(
                  group => group.includes(option) && group.includes(sortOption)
                )
            )
            .concat(sortOption);
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
