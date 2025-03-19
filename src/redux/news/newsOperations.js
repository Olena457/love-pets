import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api.js';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ page = 1, perPage = 2, searchQuery = '' }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/news', {
        params: { page, perPage, keyword: searchQuery },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
