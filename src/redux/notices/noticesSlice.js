import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNoticeById,
  fetchNoticeCategories,
  fetchNoticeSexOptions,
  fetchNoticeSpecies,
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from './noticesOperations';

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
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchNoticeById.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.selectedNotice = null;
      })
      .addCase(fetchNoticeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedNotice = action.payload;
      })
      .addCase(fetchNoticeById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchNoticeCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchNoticeSexOptions.fulfilled, (state, action) => {
        state.sexOptions = action.payload;
      })
      .addCase(fetchNoticeSpecies.fulfilled, (state, action) => {
        state.species = action.payload;
      })
      .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(removeNoticeFromFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export const { setCurrentPage, setSearchQuery } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
