// import { createSlice } from '@reduxjs/toolkit';
// import {
//   signup,
//   signin,
//   signout,
//   getCurrentUser,
//   getCurrentUserFullInfo,
// } from './usersOperations.js';

// const initialState = {
//   user: null,
//   token: null,
//   isLoading: false,
//   error: null,
// };

// const setLoading = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const setSuccess = state => {
//   state.isLoading = false;
// };

// const setError = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const setAuthData = (state, action) => {
//   state.isLoading = false;
//   state.user = action.payload.user;
//   state.token = action.payload.token;
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
//       .addCase(signout.fulfilled, state => {
//         setSuccess(state);
//         state.user = null;
//         state.token = null;
//       })
//       .addCase(signout.rejected, setError)
//       // getCurrentUser
//       .addCase(getCurrentUser.pending, setLoading)
//       .addCase(getCurrentUser.fulfilled, (state, action) => {
//         setSuccess(state);
//         state.user = action.payload;
//       })
//       .addCase(getCurrentUser.rejected, setError)
//       // getCurrentUserFullInfo
//       .addCase(getCurrentUserFullInfo.pending, setLoading)
//       .addCase(getCurrentUserFullInfo.fulfilled, (state, action) => {
//         setSuccess(state);
//         state.user = action.payload;
//       })
//       .addCase(getCurrentUserFullInfo.rejected, setError);
//   },
// });

// export const usersReducer = usersSlice.reducer;
// __________________________________________________________________
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
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // signup
      .addCase(signup.pending, setLoading)
      .addCase(signup.fulfilled, (state, action) => setAuthData(state, action))
      .addCase(signup.rejected, setError)
      // signin
      .addCase(signin.pending, setLoading)
      .addCase(signin.fulfilled, (state, action) => setAuthData(state, action))
      .addCase(signin.rejected, setError)
      // signout (Очищаємо стан повністю)
      .addCase(signout.pending, setLoading)
      .addCase(signout.fulfilled, () => initialState)
      .addCase(signout.rejected, setError)
      // getCurrentUser
      .addCase(getCurrentUser.pending, setLoading)
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(getCurrentUser.rejected, setError)
      // getCurrentUserFullInfo
      .addCase(getCurrentUserFullInfo.pending, setLoading)
      .addCase(getCurrentUserFullInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(getCurrentUserFullInfo.rejected, setError);
  },
});

export const usersReducer = usersSlice.reducer;
// ____________________________________________________________;
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
//   isLoading: false,
//   error: null,
// };

// const setLoading = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const setError = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload || 'An error occurred';
// };

// const setAuthData = (state, action) => {
//   state.isLoading = false;
//   state.userData = action.payload?.user || { name: '', email: '' };
//   state.token = action.payload?.token || null;
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
//       .addCase(signout.fulfilled, state => {
//         state.userData = { name: '', email: '' };
//         state.token = null;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(signout.rejected, setError)
//       // getCurrentUser
//       .addCase(getCurrentUser.pending, setLoading)
//       .addCase(getCurrentUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.userData = action.payload || { name: '', email: '' };
//       })
//       .addCase(getCurrentUser.rejected, setError)
//       // getCurrentUserFullInfo
//       .addCase(getCurrentUserFullInfo.pending, setLoading)
//       .addCase(getCurrentUserFullInfo.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.userData = action.payload || { name: '', email: '' };
//       })
//       .addCase(getCurrentUserFullInfo.rejected, setError);
//   },
// });

// export const usersReducer = usersSlice.reducer;
