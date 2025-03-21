export const selectNotices = state => state.notices.items;
export const selectSelectedNotices = state => state.notices.selectedNotice;
export const selectCategories = state => state.notices.categories;
export const selectSexOptions = state => state.notices.sexOptions;
export const selectFavorites = state => state.notices.favorites;
export const selectTotalPages = state => state.notices.totalPages;
export const selectSearchQuery = state => state.notices.searchQuery;
export const selectIsLoading = state => state.notices.isloading;
export const selectCurrentPage = state => state.notices.currentPage;
export const selectError = state => state.notices.error;
export const selectSpecies = state => state.notices.species;

// export const selectById = (items, id) => items.find(item => item.id === id);
// export const selectNoticeById = (state, id) =>
//   selectById(state.notices.items, id);
