import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../api.js';
import {
  addNoticeToFavorites,
  deleteFromFavorites,
} from '../notices/noticesOperations.js';

//  fetching  user profile__________________________
export const fetchProfileFull = createAsyncThunk(
  '/users/fetchProfileFull',
  async () => {
    try {
      const response = await axiosInstance.get('/users/current/full');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  }
);

//  updating  user profile_____________________
export const updateProfile = createAsyncThunk(
  '/users/updateProfile',
  async profileData => {
    try {
      const response = await axiosInstance.patch(
        '/users/current/edit',
        profileData
      );
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }
);

const initialState = {
  profile: {
    // name: '',
    // email: '',
    // phone: '',
    // birthday: '',
    // location: {
    //   city: '',
    //   country: '',
    // },
    // avatarURL: '',
    noticesFavorites: [],
  },
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // actions  fetching profile__________
      .addCase(fetchProfileFull.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfileFull.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile = action.payload;
      })
      .addCase(fetchProfileFull.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //actions updating profile_________________
      .addCase(updateProfile.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // add notice to favorites___________________
      .addCase(addNoticeToFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.profile.favorites = action.payload;
        state.profile.noticesFavorites = action.payload;
      })
      .addCase(addNoticeToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // remove notice from favorites_________________
      .addCase(deleteFromFavorites.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile.noticesFavorites = action.payload;
        // state.profile.favorites = action.payload;
      })
      .addCase(deleteFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axiosInstance from '../api.js';
// import {
//   addNoticeToFavorites,
//   deleteFromFavorites,
//   // toggleFavoriteNotice,
// } from '../notices/noticesOperations.js';

// // --- fetching user profile __________________________
// export const fetchProfileFull = createAsyncThunk(
//   '/users/fetchProfileFull',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get('/users/current/full');
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching profile:', error);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // --- updating user profile _____________________
// export const updateProfile = createAsyncThunk(
//   '/users/updateProfile',
//   async (profileData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.patch(
//         '/users/current/edit',
//         profileData
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const initialState = {
//   profile: {
//     name: '',
//     email: '',
//     phone: '',
//     birthday: '',
//     location: {
//       city: '',
//       country: '',
//     },
//     avatarURL: '',
//     noticesFavorites: [],
//   },
//   isLoading: false,
//   error: null,
// };

// const profileSlice = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       // --- actions fetching profile __________
//       .addCase(fetchProfileFull.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchProfileFull.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.profile = action.payload;
//       })
//       .addCase(fetchProfileFull.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || action.error.message;
//       })

//       // --- actions updating profile _________________
//       .addCase(updateProfile.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(updateProfile.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.profile = action.payload;
//       })
//       .addCase(updateProfile.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || action.error.message;
//       })

//       // --- add notice to favorites ___________________
//       .addCase(addNoticeToFavorites.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.profile.noticesFavorites = action.payload;
//       })
//       .addCase(addNoticeToFavorites.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || action.error.message;
//       })

//       // --- remove notice from favorites _________________
//       .addCase(deleteFromFavorites.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(deleteFromFavorites.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;

//         state.profile.noticesFavorites = action.payload;
//       })
//       .addCase(deleteFromFavorites.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || action.error.message;
//       });

//     // оскільки toggleFavoriteNotice їх "обгортає".
//     // .addCase(toggleFavoriteNotice.fulfilled, (state, action) => {
//     //   state.isLoading = false;
//     //   state.error = null;
//     //   state.profile.noticesFavorites = action.payload;
//     // });
//   },
// });

// export default profileSlice.reducer;
// export const selectProfile = state => state.profile.profile;
