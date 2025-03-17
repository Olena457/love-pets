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

export const store = configureStore({
  reducer: {
    users: persistReducer(usersPersistConfig, usersReducer),
    news: persistReducer(newsPersistConfig, newsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
