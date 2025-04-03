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
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api';

// Fetch Notices
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
//       const response = await axiosInstance.get(
//         `notices?page=${page}&perPage=${perPage}&keyword=${
//           searchQuery || ''
//         }&category=${category || ''}&gender=${gender || ''}&type=${
//           type || ''
//         }&location=${location || ''}&${
//           category === 'sell' ? `byPrice=true` : ''
//         }`
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching notices:', error);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (
    {
      page = 1,
      perPage = 3,
      searchQuery = '',
      category = '',
      gender = '',
      type = '',
      location = '',
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.get('/notices', {
        params: {
          page,
          perPage,
          keyword: searchQuery,
          category,
          gender,
          type,
          location,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch Notice by ID
export const fetchNoticeById = createAsyncThunk(
  'notices/fetchNoticeById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/notices/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching notice by ID:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch Sex Options
export const fetchNoticeSex = createAsyncThunk(
  'notices/fetchNoticeSex',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/notices/sex');
      return response.data;
    } catch (error) {
      console.error('Error fetching sex options:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch Species
export const fetchSpecies = createAsyncThunk(
  'notices/fetchSpecies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/notices/species');
      return response.data;
    } catch (error) {
      console.error('Error fetching species:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch Categories
export const fetchCategories = createAsyncThunk(
  'notices/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/notices/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Add to Favorites
export const addNoticeToFavorites = createAsyncThunk(
  'notices/addToFavorites',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/notices/favorites/add/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error adding notice to favorites:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Remove from Favorites
export const removeNoticeFromFavorites = createAsyncThunk(
  'notices/removeFromFavorites',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/notices/favorites/remove/${id}`
      );
      return response.data;
    } catch (error) {
      console.error('Error removing notice from favorites:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Toggle Favorites
export const toggleFavoriteNotice = createAsyncThunk(
  'notices/toggleFavoriteNotice',
  async (id, { getState, rejectWithValue }) => {
    const state = getState();
    const isFavorite = state.notices.favorites.includes(id);

    try {
      const response = isFavorite
        ? await axiosInstance.delete(`/notices/favorites/remove/${id}`)
        : await axiosInstance.post(`/notices/favorites/add/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error toggling favorite notice:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
