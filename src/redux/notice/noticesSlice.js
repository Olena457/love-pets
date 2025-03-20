import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNoticeById,
  fetchNoticeCategories,
  fetchNoticeSexOptions,
  fetchNoticeSpecies,
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from './operations';

const initialState = {
  items: [],
  selectedNotice: null,
  categories: [],
  sexOptions: [],
  species: [],
  favorites: [],
  totalPages: 0,
  currentPage: 1,
  perPage: 6,
  searchQuery: '',
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
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
      .addCase(fetchNotices.pending, handlePending)
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNotices.rejected, handleRejected)
      .addCase(fetchNoticeById.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.selectedNotice = null;
      })
      .addCase(fetchNoticeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedNotice = action.payload;
      })
      .addCase(fetchNoticeById.rejected, handleRejected)
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
