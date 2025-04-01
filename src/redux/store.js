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
import modalReducer from './modal/modalSlice.js';
import { usersReducer } from './users/usersSlice.js';
import { newsReducer } from './news/newsSlice.js';

import { filtersReducer } from './filters/filtersSlice.js';
import profileReducer from './profile/profileSlice.js';
import friendsReducer from './friends/ourFriendsSlice.js';
import petsReducer from './pets/petsSlice.js'; // Імпорт вашого petsReducer

// Конфігурація для users
const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['token'],
};

// Конфігурація для news
const newsPersistConfig = {
  key: 'news',
  storage,
  whitelist: ['currentPage'],
};

// Конфігурація для profile
const profilePersistConfig = {
  key: 'profile',
  storage,
  whitelist: ['profile'],
};

// Конфігурація для petsStore
const petsPersistConfig = {
  key: 'pets',
  storage,
  whitelist: ['currentPage', 'filterTerm', 'favorites'], // Коректний whitelist для збереження
};

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    users: persistReducer(usersPersistConfig, usersReducer),
    news: persistReducer(newsPersistConfig, newsReducer),
    petsStore: persistReducer(petsPersistConfig, petsReducer), // Виправлено
    filtersStore: filtersReducer,
    friendsStore: friendsReducer,
    profileStore: persistReducer(profilePersistConfig, profileReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
