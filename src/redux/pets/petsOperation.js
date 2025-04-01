import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api';

// Fetching various filters
export const fetchPets = createAsyncThunk(
  'pets/fetchPets',
  async ({
    page,
    limit,
    filterWord,
    category,
    species,
    isPopular,
    isExpensive,
    locationId,
  }) => {
    try {
      const response = await axiosInstance.get(
        `notices?page=${page}&limit=${limit}&keyword=${
          filterWord || ''
        }&category=${category || ''}&species=${species || ''}&byPopularity=${
          isPopular ? 'true' : 'false'
        }&locationId=${locationId || ''}&${
          category === 'sell'
            ? `&byPrice=${isExpensive ? 'true' : 'false'}`
            : ''
        }`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching pets:', error);
      throw error;
    }
  }
);

// Fetch pet by ID
export const fetchPetsById = createAsyncThunk(
  'pets/fetchPetsById',
  async ({ _id }) => {
    try {
      const response = await axiosInstance.get(`notices/${_id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching pet by ID:', error);
      throw error;
    }
  }
);

// Fetch genders
export const fetchGenders = createAsyncThunk('pets/fetchGenders', async () => {
  try {
    const response = await axiosInstance.get('notices/sex');
    return response.data;
  } catch (error) {
    console.error('Error fetching genders:', error);
    throw error;
  }
});

// Fetch categories
export const fetchCategories = createAsyncThunk(
  'pets/fetchCategories',
  async () => {
    try {
      const response = await axiosInstance.get('notices/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
);

// Fetch species
export const fetchSpecies = createAsyncThunk('pets/fetchSpecies', async () => {
  try {
    const response = await axiosInstance.get('notices/species');
    return response.data;
  } catch (error) {
    console.error('Error fetching species:', error);
    throw error;
  }
});

// Fetch cities
export const fetchCities = createAsyncThunk('pets/fetchCities', async () => {
  try {
    const response = await axiosInstance.get('cities');
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
});

// Adding  favorites
export const addPetToFavorites = createAsyncThunk(
  'pets/addToFavorites',
  async ({ _id }) => {
    try {
      const response = await axiosInstance.post(`notices/favorites/add/${_id}`);
      return response.data;
    } catch (error) {
      console.error('Error adding pet to favorites:', error);
      throw error;
    }
  }
);

// Removing favorites
export const deletePetFromFavorites = createAsyncThunk(
  'pets/deleteFromFavorites',
  async ({ _id }) => {
    try {
      const response = await axiosInstance.delete(
        `notices/favorites/remove/${_id}`
      );
      return response.data;
    } catch (error) {
      console.error('Error removing pet from favorites:', error);
      throw error;
    }
  }
);
