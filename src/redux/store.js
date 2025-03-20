import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersReducer } from './users/usersSlice.js';
import { newsReducer } from './news/newsSlice.js';
import { noticesReducer } from './notice/noticesSlice.js';
import { citiesReducer } from './cities/citiesSlice.js';
import { filtersReducer } from './filters/filtersSlice.js';
import { profileReducer } from './profile/profileSlice.js';
const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['token'],
};
const newsPersistConfig = {
  key: 'news',
  storage,
  whitelist: ['currentPage', 'searchQuery'],
};
const noticePersistConfig = {
  key: 'notice',
  storage,
  whitelist: ['currentPage', 'searchQuery', 'favorites'],
};
const filtersPersistConfig = {
  key: 'filters',
  storage,
  whitelist: ['searchQuery', 'category', 'gender', 'type', 'location', 'sort'],
};
const profilePersistConfig = {
  key: 'profile',
  storage,
  whitelist: ['profile'],
};
export const store = configureStore({
  reducer: {
    users: persistReducer(usersPersistConfig, usersReducer),
    news: persistReducer(newsPersistConfig, newsReducer),
    notices: persistReducer(noticePersistConfig, noticesReducer),
    filters: persistReducer(filtersPersistConfig, filtersReducer),
    profile: persistReducer(profilePersistConfig, profileReducer),
    cities: citiesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
