import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../api.js';
import {
  addNoticeToFavorites,
  deleteFromFavorites,
} from '../notices/noticesOperations.js';

//  fetching  user profile__________________________
export const fetchProfileFull = createAsyncThunk(
  ' /users/fetchProfileFull ',
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
      .addCase(fetchProfileFull.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfileFull.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile = action.payload;
      })
      .addCase(fetchProfileFull.rejected, (state, action) => {
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
        state.error = null;
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // add notice to favorites___________________
      .addCase(addNoticeToFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile.favorites = action.payload;
      })
      .addCase(addNoticeToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // remove notice from favorites_________________
      .addCase(deleteFromFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile.favorites = action.payload;
      })
      .addCase(deleteFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
