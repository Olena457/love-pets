import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { setAuthHeader, clearAuthHeader } from '../api.js';

const prepareAuthHeader = thunkAPI => {
  const token = thunkAPI.getState().auth.token;
  if (!token) {
    throw new Error('Token is missing');
  }
  setAuthHeader(token);
};
export const singup = createAsyncThunk(
  'user/singup',
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
      const response = await axiosInstance.post('/user/sifnin', credentials);

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
