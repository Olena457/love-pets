// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../api';

// export const fetchCities = createAsyncThunk(
//   'cities/fetchCities',
//   async (keyword, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get('/cities', {
//         params: { keyword },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// export const fetchCityLocations = createAsyncThunk(
//   'cities/fetchCityLocations',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get('/cities/locations');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );
