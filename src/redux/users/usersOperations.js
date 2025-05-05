import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { setAuthHeader, clearAuthHeader } from '../api.js';
import { toast } from 'react-toastify';

// This function prepares the authorization header for requests that require authentication.
const prepareAuthHeader = thunkAPI => {
  const token = thunkAPI.getState().user.token;
  if (!token) {
    return thunkAPI.rejectWithValue('Token is missing');
  }
  setAuthHeader(token);
};

// register user
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

// login user
export const signin = createAsyncThunk(
  'user/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/users/signin', credentials);
      const { token, ...userData } = response.data;
      token;
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
        'Error getting user data';
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
// ___________________________________________________
// Реєстрація користувача
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance, { setAuthHeader, clearAuthHeader } from '../api.js';
// import { toast } from 'react-toastify';

// export const signup = createAsyncThunk(
//   'user/signup',
//   async (userData, thunkAPI) => {
//     try {
//       const { data } = await axiosInstance.post('/users/signup', userData);
//       setAuthHeader(data.token);
//       toast.success('Registration is successful');
//       return data;
//     } catch (error) {
//       const errorMessage =
//         error?.response?.data?.message ||
//         error.message ||
//         'An unknown error occurred';
//       toast.error(errorMessage);
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

// // Вхід користувача
// export const signin = createAsyncThunk(
//   'user/signin',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axiosInstance.post('/users/signin', credentials); // ✅ Виправлено маршрут
//       setAuthHeader(data.token);
//       toast.success('Welcome back!');
//       return data;
//     } catch (error) {
//       const errorMessage =
//         error?.response?.data?.message ||
//         error.message ||
//         'An unknown error occurred';
//       toast.error(errorMessage);
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

// // Вихід користувача
// export const signout = createAsyncThunk('user/signout', async (_, thunkAPI) => {
//   try {
//     await axiosInstance.post('/users/signout');
//     clearAuthHeader();
//     toast.success('Exit successful');
//     return {};
//   } catch (error) {
//     const errorMessage =
//       error?.response?.data?.message ||
//       error.message ||
//       'An unknown error occurred';
//     toast.error(errorMessage);
//     return thunkAPI.rejectWithValue(errorMessage);
//   }
// });

// // Отримання поточного користувача
// export const getCurrentUser = createAsyncThunk(
//   'user/current',
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.token;
//       if (!token) {
//         return thunkAPI.rejectWithValue('Token is missing');
//       }
//       setAuthHeader(token);
//       const { data } = await axiosInstance.get('/users/current');
//       return data;
//     } catch (error) {
//       const errorMessage =
//         error?.response?.data?.message ||
//         error.message ||
//         'Error getting user data';
//       toast.error(errorMessage);
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

// // Отримання повної інформації про користувача
// export const getCurrentUserFullInfo = createAsyncThunk(
//   'user/current/full',
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.token;
//       if (!token) {
//         return thunkAPI.rejectWithValue('Token is missing');
//       }
//       setAuthHeader(token);
//       const { data } = await axiosInstance.get('/users/current/full');
//       return data;
//     } catch (error) {
//       const errorMessage =
//         error?.response?.data?.message ||
//         error.message ||
//         'Error getting user data';
//       toast.error(errorMessage);
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );
