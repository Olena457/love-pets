import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNoticeById,
  fetchNoticeCategories,
  fetchNoticeSex,
  fetchNoticeSpecies,
} from './noticesOperations.js';

const initialState = {
  notice: null,
  notices: [],
  sex: [],
  categories: [],
  species: [],
  favorites: [],
  searchQuery: '',
  currentPage: 1,
  perPage: 6,
  totalPages: 0,
  error: null,
  isLoading: false,
  // sexOptions: [],
  // selectedNotice: null,
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
        state.error = null;
        state.notices = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // fetch notice by id
      .addCase(fetchNoticeById.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.notice = null;
      })
      .addCase(fetchNoticeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.notice = action.payload;
      })
      .addCase(fetchNoticeById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // featch notice categories
      .addCase(fetchNoticeCategories.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNoticeCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchNoticeCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // fetch sex options
      .addCase(fetchNoticeSex.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNoticeSex.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.sex = action.payload;
      })
      .addCase(fetchNoticeSex.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // fetch species
      .addCase(fetchNoticeSpecies.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNoticeSpecies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.species = action.payload;
      })
      .addCase(fetchNoticeSpecies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage, setSearchQuery } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
