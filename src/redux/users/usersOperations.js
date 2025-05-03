import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { setAuthHeader, clearAuthHeader } from '../api.js';

const prepareAuthHeader = thunkAPI => {
  const token = thunkAPI.getState().auth.token;
  if (!token) {
    throw new Error('Token is missing');
  }
  setAuthHeader(token);
};
export const signup = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/users/signup', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const signin = createAsyncThunk(
  'user/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/user/signin', credentials);

      const { token, ...userData } = response.data;

      setAuthHeader(token);
      return { token, userData };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const signout = createAsyncThunk(
  'user/signout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/user/signout');
      clearAuthHeader();
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  'user/current',
  async (_, thukAPi) => {
    try {
      prepareAuthHeader(thukAPi);
      const response = await axiosInstance.get('/user/current');
      return response.data.data;
    } catch (error) {
      return thukAPi.rejectWithValue(error.reponse.data);
    }
  }
);
export const getCurrentUserFullInfo = createAsyncThunk(
  'user/current/full',
  async (_, thukAPI) => {
    try {
      prepareAuthHeader(thukAPI);
      const response = await axiosInstance.get('/user/current/full');
      return response.data.data;
    } catch (error) {
      return thukAPI.rejectWithValue(error.reponse.data);
    }
  }
);
