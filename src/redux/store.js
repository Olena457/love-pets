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
import { citiesReducer } from './cities/citiesSlice.js';
import { filtersReducer } from './filters/filtersSlice.js';
import { noticesReducer } from './notices/noticesSlice.js';
import profileReducer from './profile/profileSlice.js';
import friendsReducer from './friends/ourFriendsSlice.js';

const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['token'],
};

const newsPersistConfig = {
  key: 'news',
  storage,
  whitelist: ['currentPage'],
};

const profilePersistConfig = {
  key: 'profile',
  storage,
  whitelist: ['profile'],
};

const noticesPersistConfig = {
  key: 'notices',
  storage,
  whitelist: ['currentPage', 'searchQuery', 'favorites'],
};
const filtersPersistConfig = {
  key: 'filters',
  storage,
  whitelist: ['searchQuery', 'category', 'gender', 'type', 'location', 'sort'],
};
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    users: persistReducer(usersPersistConfig, usersReducer),
    news: persistReducer(newsPersistConfig, newsReducer),
    notices: persistReducer(noticesPersistConfig, noticesReducer),
    profile: persistReducer(profilePersistConfig, profileReducer),
    filters: filtersReducer(filtersPersistConfig, filtersReducer),
    friends: friendsReducer,
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
