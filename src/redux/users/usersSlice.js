// import { createSlice } from '@reduxjs/toolkit';
// import {
//   signup,
//   signin,
//   signout,
//   getCurrentUser,
//   getCurrentUserFullInfo,
// } from './usersOperations.js';

// const initialState = {
//   userData: { name: '', email: '' },
//   token: null,
//   isAuthenticated: false,
//   isLoading: false,
//   error: null,
// };

// const setLoading = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const setError = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const setAuthData = (state, action) => {
//   state.isLoading = false;
//   state.userData = action.payload.user;
//   state.token = action.payload.token;
//   state.isAuthenticated = true;
// };

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       // signup
//       .addCase(signup.pending, setLoading)
//       .addCase(signup.fulfilled, (state, action) => setAuthData(state, action))
//       .addCase(signup.rejected, setError)

//       // signin
//       .addCase(signin.pending, setLoading)
//       .addCase(signin.fulfilled, (state, action) => setAuthData(state, action))
//       .addCase(signin.rejected, setError)

//       // signout
//       .addCase(signout.pending, setLoading)
//       .addCase(signout.fulfilled, () => initialState)
//       .addCase(signout.rejected, setError)

//       // getCurrentUser
//       .addCase(getCurrentUser.pending, setLoading)
//       .addCase(getCurrentUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.userData = action.payload;
//         state.isAuthenticated = true; //add
//       })

//       // getCurrentUserFullInfo
//       .addCase(getCurrentUser.rejected, setError)
//       .addCase(getCurrentUserFullInfo.pending, setLoading)
//       .addCase(getCurrentUserFullInfo.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.userData = action.payload;
//         state.isAuthenticated = false;
//       })
//       .addCase(getCurrentUserFullInfo.rejected, setError);
//   },
// });

// export const usersReducer = usersSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  signin,
  signout,
  getCurrentUser,
  getCurrentUserFullInfo,
} from './usersOperations.js';

const initialState = {
  userData: { name: '', email: '' },
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const setLoading = state => {
  state.isLoading = true;
  state.error = null;
};

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setAuthData = (state, action) => {
  state.isLoading = false;
  state.userData = action.payload.user;
  state.token = action.payload.token;
  state.isAuthenticated = true;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signup.pending, setLoading)
      .addCase(signup.fulfilled, setAuthData)
      .addCase(signup.rejected, setError)

      .addCase(signin.pending, setLoading)
      .addCase(signin.fulfilled, setAuthData)
      .addCase(signin.rejected, setError)

      .addCase(signout.pending, setLoading)
      .addCase(signout.fulfilled, state => {
        state.userData = { name: '', email: '' };
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(signout.rejected, setError)

      .addCase(getCurrentUser.pending, setLoading)
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      .addCase(getCurrentUserFullInfo.pending, setLoading)
      .addCase(getCurrentUserFullInfo.fulfilled, (state, action) => {
        state.isLoading = true;
        state.userData = action.payload;
      })
      .addCase(getCurrentUserFullInfo.rejected, setError);
  },
});

export const usersReducer = usersSlice.reducer;
