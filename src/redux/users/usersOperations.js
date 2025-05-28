import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api.js';
import { toast } from 'react-toastify';

export const setToken = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const unsetToken = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};
export const registerUser = createAsyncThunk(
  '/users/registerUser',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/users/signup', userData);
      setToken(data.token);
      toast.success('Registration is successful');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// login user
export const authenticatedUser = createAsyncThunk(
  '/users/authenticatedUser',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/users/signin', userData);
      setToken(data.token);

      toast.success('Welcome back!');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Logout user
export const logout = createAsyncThunk(
  '/users/signout',
  async (_, thunkAPI) => {
    try {
      const { data } = axiosInstance.post('/users/signout');
      unsetToken();

      toast.success('Exit successful');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// get current user
export const refresh = createAsyncThunk(
  '/users/refresh',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().users.token;

      setToken(token);
      const { data } = await axiosInstance.get('/users/current');
      console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
