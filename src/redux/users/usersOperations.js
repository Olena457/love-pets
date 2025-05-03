// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance, { setAuthHeader, clearAuthHeader } from '../api.js';

// const prepareAuthHeader = thunkAPI => {
//   const token = thunkAPI.getState().auth.token;
//   if (!token) {
//     throw new Error('Token is missing');
//   }
//   setAuthHeader(token);
// };
// export const signup = createAsyncThunk(
//   'user/signup',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/users/signup', userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const signin = createAsyncThunk(
//   'user/signin',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/user/signin', credentials);

//       const { token, ...userData } = response.data;

//       setAuthHeader(token);
//       return { token, userData };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const signout = createAsyncThunk(
//   'user/signout',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/user/signout');
//       clearAuthHeader();
//       return response.data.message;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const getCurrentUser = createAsyncThunk(
//   'user/current',
//   async (_, thukAPi) => {
//     try {
//       prepareAuthHeader(thukAPi);
//       const response = await axiosInstance.get('/user/current');
//       return response.data.data;
//     } catch (error) {
//       return thukAPi.rejectWithValue(error.reponse.data);
//     }
//   }
// );
// export const getCurrentUserFullInfo = createAsyncThunk(
//   'user/current/full',
//   async (_, thukAPI) => {
//     try {
//       prepareAuthHeader(thukAPI);
//       const response = await axiosInstance.get('/user/current/full');
//       return response.data.data;
//     } catch (error) {
//       return thukAPI.rejectWithValue(error.reponse.data);
//     }
//   }
// );
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { setAuthHeader, clearAuthHeader } from '../api.js';
import { toast } from 'react-toastify';

// Функція для перевірки токена перед запитом
const prepareAuthHeader = thunkAPI => {
  const token = thunkAPI.getState().auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue('Token is missing');
  }
  setAuthHeader(token);
};

// Реєстрація
export const signup = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/users/signup', userData);
      toast.success('Registration is successful');
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        'An unknown error occurred';
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// Логін
export const signin = createAsyncThunk(
  'user/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/users/signin', credentials);
      const { token, ...userData } = response.data;

      setAuthHeader(token);
      toast.success('Welcome back!');
      return { token, userData };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        'An unknown error occurred';
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// singout user
export const signout = createAsyncThunk(
  'user/signout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/users/signout');
      clearAuthHeader();
      toast.success('Exit successful');
      return response.data.message;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        'An unknown error occurred';
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// getcurrent user
export const getCurrentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
      await prepareAuthHeader(thunkAPI);
      const response = await axiosInstance.get('/users/current');
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        'Помилка отримання даних користувача';
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// get full info about current user
export const getCurrentUserFullInfo = createAsyncThunk(
  'user/current/full',
  async (_, thunkAPI) => {
    try {
      await prepareAuthHeader(thunkAPI);
      const response = await axiosInstance.get('/users/current/full'); // Виправлено шлях!
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        'Error getting user data';
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
