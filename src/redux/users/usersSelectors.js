export const selectUser = state => state.users.userData;
export const selectIsAuthenticated = state => state.users.isAuthenticated;
export const selectToken = state => state.users.token;
export const selectIsRefreshing = state => state.users.isRefreshing;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;

// export const selectToken = state => state.users.token ?? null;
// export const selectIsAuthenticated = state => Boolean(state.users.token);
