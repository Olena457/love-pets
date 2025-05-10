import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api.js';
import { toast } from 'react-toastify';

export const setToken = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const unsetToken = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};
export const signup = createAsyncThunk(
  '/user/signup',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/signup', userData);
      setToken(data.token);
      toast.success('Registration is successful');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// login user
export const signin = createAsyncThunk(
  '/user/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/signin', credentials); // ✅ Виправлено маршрут
      setToken(data.token);

      toast.success('Welcome back!');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Logout user
export const signout = createAsyncThunk(
  '/user/signout',
  async (_, thunkAPI) => {
    try {
      const { data } = axiosInstance.post('/signout');
      unsetToken();

      toast.success('Exit successful');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// get current user
export const getCurrentUser = createAsyncThunk(
  '/user/current',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().users.token; //aut change users
      if (!token) {
        return thunkAPI.rejectWithValue('No token found');
      }
      setToken(token);
      const { data } = await axiosInstance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// get full info about current user
export const getCurrentUserFullInfo = createAsyncThunk(
  '/user/current/full',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      setToken(token);

      const { data } = await axiosInstance.get('/current/full');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
