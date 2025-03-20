import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api.js';

// utileties API
const apiRequest = async (
  method,
  path,
  { params = {}, body = null } = {},
  rejectWithValue
) => {
  try {
    const response = await axiosInstance({
      method,
      url: path,
      params,
      data: body,
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
};

// fearch notices

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
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
    return await apiRequest(
      'get',
      '/notices',
      {
        params: {
          page,
          perPage,
          keyword: searchQuery,
          category,
          gender,
          type,
          location,
        },
      },
      rejectWithValue
    );
  }
);

// featch notice  ID
export const fetchNoticeById = createAsyncThunk(
  'notices/fetchNoticeById',
  async (id, { rejectWithValue }) => {
    return await apiRequest('get', `/notices/${id}`, {}, rejectWithValue);
  }
);

// featch categories
export const fetchNoticeCategories = createAsyncThunk(
  'notices/fetchNoticeCategories',
  async (_, { rejectWithValue }) => {
    return await apiRequest('get', '/notices/categories', {}, rejectWithValue);
  }
);

//featch sex options of pets
export const fetchNoticeSexOptions = createAsyncThunk(
  'notices/fetchNoticeSexOptions',
  async (_, { rejectWithValue }) => {
    return await apiRequest('get', '/notices/sex', {}, rejectWithValue);
  }
);

// featch species
export const fetchNoticeSpecies = createAsyncThunk(
  'notices/fetchNoticeSpecies',
  async (_, { rejectWithValue }) => {
    return await apiRequest('get', '/notices/species', {}, rejectWithValue);
  }
);

// addet to favorite
export const addNoticeToFavorites = createAsyncThunk(
  'notices/addNoticeToFavorites',
  async (id, { rejectWithValue }) => {
    return await apiRequest(
      'post',
      `/notices/favorites/add/${id}`,
      {},
      rejectWithValue
    );
  }
);

// delete from favorites
export const removeNoticeFromFavorites = createAsyncThunk(
  'notices/removeNoticeFromFavorites',
  async (id, { rejectWithValue }) => {
    return await apiRequest(
      'delete',
      `/notices/favorites/remove/${id}`,
      {},
      rejectWithValue
    );
  }
);

// toggle favorite
export const toggleFavoriteNotice = createAsyncThunk(
  'notices/toggleFavoriteNotice',
  async (id, { getState, rejectWithValue }) => {
    const state = getState();
    const isFavorite = state.notices.favorites.includes(id);

    const method = isFavorite ? 'delete' : 'post';
    const path = isFavorite
      ? `/notices/favorites/remove/${id}`
      : `/notices/favorites/add/${id}`;

    return await apiRequest(method, path, {}, rejectWithValue);
  }
);
