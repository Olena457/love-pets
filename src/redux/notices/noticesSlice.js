// import { createSlice } from '@reduxjs/toolkit';
// import {
//   fetchNotices,
//   fetchNoticeById,
//   fetchNoticeCategories,
//   fetchNoticeSexOptions,
//   fetchNoticeSpecies,
//   addNoticeToFavorites,
//   removeNoticeFromFavorites,
// } from './noticesOperations';

// const initialState = {
//   items: [],
//   selectedNotice: null,
//   categories: [],
//   sexOptions: [],
//   species: [],
//   favorites: [],
//   totalPages: 0,
//   currentPage: 1,
//   perPage: 3,
//   searchQuery: '',
//   isLoading: false,
//   error: null,
// };

// const noticesSlice = createSlice({
//   name: 'notices',
//   initialState,
//   reducers: {
//     setCurrentPage(state, action) {
//       state.currentPage = action.payload;
//     },
//     setSearchQuery(state, action) {
//       state.searchQuery = action.payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchNotices.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchNotices.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = action.payload.results;
//         state.totalPages = action.payload.totalPages;
//       })
//       .addCase(fetchNotices.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(fetchNoticeById.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//         state.selectedNotice = null;
//       })
//       .addCase(fetchNoticeById.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.selectedNotice = action.payload;
//       })
//       .addCase(fetchNoticeById.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(fetchNoticeCategories.fulfilled, (state, action) => {
//         state.categories = action.payload;
//       })
//       .addCase(fetchNoticeSexOptions.fulfilled, (state, action) => {
//         state.sexOptions = action.payload;
//       })
//       .addCase(fetchNoticeSpecies.fulfilled, (state, action) => {
//         state.species = action.payload;
//       })
//       .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
//         state.favorites = action.payload;
//       })
//       .addCase(removeNoticeFromFavorites.fulfilled, (state, action) => {
//         state.favorites = action.payload;
//       });
//   },
// });

// export const { setCurrentPage, setSearchQuery } = noticesSlice.actions;

// export const noticesReducer = noticesSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNoticeById,
  fetchCategories,
  fetchNoticeSex,
  fetchSpecies,
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from './noticesOperations';
import { fetchCities, fetchCityLocations } from '../cities/citiesOperations.js';
const initialState = {
  items: [],
  selectedNotice: null,
  categories: [],
  sexOptions: [],
  species: [],
  favorites: [],
  totalPages: 0,
  currentPage: 1,
  perPage: 3,
  searchQuery: '',
  cities: [],
  cityLocations: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // fetch data
      .addCase(fetchNotices.pending, state => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
        state.error = null;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = action.payload;
      })
      // ID pets
      .addCase(fetchNoticeById.pending, state => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
        state.selectedNotice = null;
        state.error = null;
      })
      .addCase(fetchNoticeById.fulfilled, (state, action) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.selectedNotice = action.payload;
      })
      .addCase(fetchNoticeById.rejected, (state, action) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = action.payload;
      })
      // categories
      .addCase(fetchCategories.pending, state => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = action.payload;
      })
      // sex options
      .addCase(fetchNoticeSex.pending, state => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      })
      .addCase(fetchNoticeSex.fulfilled, (state, action) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.sexOptions = action.payload;
      })
      .addCase(fetchNoticeSex.rejected, (state, action) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = action.payload;
      })
      // Завантаження видів
      .addCase(fetchSpecies.pending, state => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      })
      .addCase(fetchSpecies.fulfilled, (state, action) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.species = action.payload;
      })
      .addCase(fetchSpecies.rejected, (state, action) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = action.payload;
      })
      // add favorite
      .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      // remove favorite
      .addCase(removeNoticeFromFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload;
      })
      .addCase(fetchCityLocations.fulfilled, (state, action) => {
        state.cityLocations = action.payload;
      });
  },
});

export const { setSearchQuery, setCurrentPage } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
