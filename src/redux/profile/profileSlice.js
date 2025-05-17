import axiosInstance from '../api.js';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from '../notices/noticesOperations.js';

//  fetching  user profile__________________________
export const fetchProfile = createAsyncThunk(
  ' /users/fetchProfile',
  async () => {
    try {
      const response = await axiosInstance.get('/users/current/full');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  }
);

//  updating  user profile_____________________
export const updateProfile = createAsyncThunk(
  '/users/updateProfile',
  async profileData => {
    try {
      const response = await axiosInstance.patch(
        '/users/current/edit',
        profileData
      );
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
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
      // add notice to favorites
      .addCase(addNoticeToFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
      })
      .addCase(addNoticeToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // remove notice from favorites
      .addCase(removeNoticeFromFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeNoticeFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
      })
      .addCase(removeNoticeFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
