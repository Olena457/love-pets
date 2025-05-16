import axiosInstance from '../api.js';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from '../notices/noticesOperations.js';

//  fetching  user profile__________________________
export const fetchProfile = createAsyncThunk(
  // '/profile/fetchProfile',
  ' /users/current/full',
  // async (_, { rejectWithValue }) => {
  async () => {
    try {
      const response = await axiosInstance.get('/users/current/full');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      // return rejectWithValue(error.response?.data || error.message);
      throw error;
    }
  }
);

//  updating  user profile_____________________
export const updateProfile = createAsyncThunk(
  '/users/current/edit',
  // async (profileData, { rejectWithValue }) => {
  async profileData => {
    try {
      const response = await axiosInstance.patch(
        '/users/current/edit',
        profileData
      );
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      // return rejectWithValue(error.response?.data || error.message);
      throw error;
    }
  }
);

const initialState = {
  profile: {},
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // actions  fetching profile
      .addCase(fetchProfile.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //actions updating profile
      .addCase(updateProfile.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      //  adding to favorites
      .addCase(addNoticeToFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile.favorites = action.payload; // Update favorites list
      })
      .addCase(addNoticeToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      //  removing from favorites
      .addCase(removeNoticeFromFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeNoticeFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile.favorites = action.payload; // Update favorites list
      })
      .addCase(removeNoticeFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
