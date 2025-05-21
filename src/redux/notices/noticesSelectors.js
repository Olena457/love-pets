export const selectNotices = state => state.notices.notices;
export const selectNotice = state => state.notices.notice;
export const selectCategories = state => state.notices.categories;
export const selectSex = state => state.notices.sex;
export const selectSpecies = state => state.notices.species;
export const selectTotalPages = state => state.notices.totalPages;
export const selectCurrentPage = state => state.notices.currentPage;
export const selectSearchQuery = state => state.notices.searchQuery;
export const selectIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;
export const selectFavorites = state => state.notices.favorites;
// export const selectFavorites = state =>
//   Array.isArray(state.notices.favorites) ? state.notices.favorites : [];
