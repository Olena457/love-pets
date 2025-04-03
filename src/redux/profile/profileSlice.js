import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from '../notices/noticesOperations.js';
import axiosInstance from '../api';

//  fetching  user profile
export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('users/current/full');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//  updating  user profile
export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(
        'users/current/edit',
        profileData
      );
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  profile: {},
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // actions  fetching profile
      .addCase(fetchProfile.pending, handlePending)
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, handleRejected)

      //actions updating profile
      .addCase(updateProfile.pending, handlePending)
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, handleRejected)

      // Handle  adding to favorites
      .addCase(addNoticeToFavorites.pending, handlePending)
      .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile.favorites = action.payload; // Update favorites list
      })
      .addCase(removeNoticeFromFavorites.rejected, handleRejected);
  },
});

export default profileSlice.reducer;
