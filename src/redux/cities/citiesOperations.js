import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api';

const handleRequest = async (url, params = {}, rejectWithValue) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
};

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async (keyword, { rejectWithValue }) => {
    return await handleRequest('/cities', { keyword }, rejectWithValue);
  }
);

export const fetchCityLocations = createAsyncThunk(
  'cities/fetchCityLocations',
  async (_, { rejectWithValue }) => {
    return await handleRequest('/cities/locations', {}, rejectWithValue);
  }
);
