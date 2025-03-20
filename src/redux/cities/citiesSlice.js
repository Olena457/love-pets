import { createSlice } from '@reduxjs/toolkit';
import { fetchCities, fetchCityLocations } from './citiesOperations.js';

const initialState = {
  cities: [],
  cityLocations: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action, key) => {
  state.isLoading = false;
  state[key] = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCities.pending, handlePending)
      .addCase(fetchCities.fulfilled, (state, action) => {
        handleFulfilled(state, action, 'cities');
      })
      .addCase(fetchCities.rejected, handleRejected)
      .addCase(fetchCityLocations.pending, handlePending)
      .addCase(fetchCityLocations.fulfilled, (state, action) => {
        handleFulfilled(state, action, 'cityLocations');
      })
      .addCase(fetchCityLocations.rejected, handleRejected);
  },
});

export const citiesReducer = citiesSlice.reducer;
