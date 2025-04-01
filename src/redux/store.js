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
// import { noticesReducer } from './notices/noticesSlice.js';
// import { citiesReducer } from './cities/citiesSlice.js';
import { filtersReducer } from './filters/filtersSlice.js';
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
// const noticePersistConfig = {
//   key: 'notice',
//   storage,
//   whitelist: ['currentPage', 'searchQuery', 'favorites'],
// };

const profilePersistConfig = {
  key: 'profile',
  storage,
  whitelist: ['profile'],
};
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    users: persistReducer(usersPersistConfig, usersReducer),
    news: persistReducer(newsPersistConfig, newsReducer),
    // notices: persistReducer(noticePersistConfig, noticesReducer),
    petsStore: persistReducer,
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
