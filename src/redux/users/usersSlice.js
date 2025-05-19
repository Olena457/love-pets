import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  authenticatedUser,
  logout,
  refresh,
} from './usersOperations.js';

const initialState = {
  userData: { name: '', email: '', password: '' },
  token: '',
  isRefreshing: false,
  isAuthenticated: false,
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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, handleRejected)

      .addCase(authenticatedUser.pending, handlePending)
      .addCase(authenticatedUser.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(authenticatedUser.rejected, handleRejected)

      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(logout.rejected, handleRejected)

      // refresh__________________________

      .addCase(refresh.pending, handlePending)
      .addCase(refresh.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(refresh.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
