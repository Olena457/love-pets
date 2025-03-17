import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './newsOperations.js';
const initialState = {
  news: [],
  totalPages: 0,
  isLoading: false,
  error: null,
  currentPage: 1,
  searchQuery: '',
};
const newsSlice = createSlice({
  name: 'news',
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
      .addCase(fetchNews.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setCurrentPage, setSearchQuery } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
