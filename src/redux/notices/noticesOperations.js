// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../api.js';

// export const fetchNotices = createAsyncThunk(
//   'notices/fetchNotices',
//   async (
//     {
//       page = 1,
//       perPage = 3,
//       searchQuery = '',
//       category = '',
//       gender = '',
//       type = '',
//       location = '',
//     },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await axiosInstance.get('/notices', {
//         params: {
//           page,
//           perPage,
//           keyword: searchQuery,
//           category,
//           gender,
//           type,
//           location,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // fetch categories
// export const fetchNoticeById = createAsyncThunk(
//   'notices/fetchNoticeById',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get(`/notices/${id}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // fetch sex options of pets
// export const fetchNoticeSexOptions = createAsyncThunk(
//   'notices/fetchSexOptions',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get('/notices/sex');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// export const fetchNoticeSpecies = createAsyncThunk(
//   'notices/fetchSpecies',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get('/notices/species');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );
// export const fetchNoticeCategories = createAsyncThunk(
//   'notices/fetchCategories',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get('/notices/categories');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );
// // add to favorites
// export const addNoticeToFavorites = createAsyncThunk(
//   'notices/addToFavorites',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post(`/notices/favorites/add/${id}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // delete from favorites
// export const removeNoticeFromFavorites = createAsyncThunk(
//   'notices/removeFromFavorites',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.delete(
//         `/notices/favorites/remove/${id}`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );
// // toggle favorite
// export const toggleFavoriteNotice = createAsyncThunk(
//   'notices/toggleFavoriteNotice',
//   async (id, { getState, rejectWithValue }) => {
//     const state = getState();
//     const isFavorite = state.notices.favorites.includes(id);
//     try {
//       if (isFavorite) {
//         const response = await axiosInstance.delete(
//           `/notices/favorites/remove/${id}`
//         );
//         return response.data;
//       } else {
//         const response = await axiosInstance.post(
//           `/notices/favorites/add/${id}`
//         );
//         return response.data;
//       }
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );
