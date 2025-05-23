import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api.js';

export const fetchNotices = createAsyncThunk(
  '/notices/fetchNotices',
  async (
    {
      page = 1,
      perPage = 6,
      searchQuery = '',
      category = '',
      gender = '',
      type = '',
      location = '',
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.get('/notices', {
        params: {
          page,
          perPage,
          keyword: searchQuery,
          category,
          gender,
          type,
          location,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchNoticeById = createAsyncThunk(
  '/notices/fetchNoticeById',
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/notices/${_id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchNoticeCategories = createAsyncThunk(
  '/notices/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/notices/categories');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchNoticeSex = createAsyncThunk(
  '/notices/fetchNoticeSex',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/notices/sex');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchNoticeSpecies = createAsyncThunk(
  '/notices/fetchNoticeSpecies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/notices/species');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addNoticeToFavorites = createAsyncThunk(
  '/notices/addNoticeToFavorites',
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/notices/favorites/add/${_id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteFromFavorites = createAsyncThunk(
  '/notices/deleteFromFavorites',
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/notices/favorites/remove/${_id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const toggleFavoriteNotice = createAsyncThunk(
  '/notices/toggleFavoriteNotice',
  async ({ _id }, { getState, rejectWithValue }) => {
    const state = getState();
    const isFavorite = state.notices.favorites.includes(_id);

    try {
      if (isFavorite) {
        const response = await axiosInstance.delete(
          `/notices/favorites/remove/${_id}`
        );
        return response.data;
      } else {
        const response = await axiosInstance.post(
          `/notices/favorites/add/${_id}`
        );
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
