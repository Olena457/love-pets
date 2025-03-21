import { createSlice } from '@reduxjs/toolkit';
import { fetchCities, fetchCityLocations } from './citiesOperations.js';

const initialState = {
  cities: [],
  cityLocations: [],
  isLoading: false,
  error: null,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCities.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCityLocations.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCityLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cityLocations = action.payload;
      })
      .addCase(fetchCityLocations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const citiesReducer = citiesSlice.reducer;
