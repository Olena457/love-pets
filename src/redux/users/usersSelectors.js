export const selectUser = state => state.users.user;
export const selectToken = state => state.users.token;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const selectIsAuthenticated = state => Boolean(state.users.toket);
