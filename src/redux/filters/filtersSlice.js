import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  gender: '',
  specie: '',
  popular: null,
  expensive: null,
  location: '',
  locationId: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setSpecie(state, action) {
      state.type = action.payload;
    },
    setPopular(state, action) {
      state.popular = action.payload;
    },
    setExpensive(state, action) {
      state.expensive = action.payload;
    },
    // renew location
    setLocation(state, action) {
      state.location = action.payload;
    },
    setLocationId(state, action) {
      state.locationId = action.payload;
    },
  },
});

export const {
  setCategory,
  setGender,
  setSpecies,
  setPopular,
  setExpensive,
  setLocation,
  setLocationId,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
