// export const selectCities = state => state.notices.cities;

export const selectNotices = state => state.notices.items;
export const selectIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;
export const selectPerPage = state => state.notices.perPage;
export const selectPage = state => state.notices.currentPage;
export const selectTotalPages = state => state.notices.totalPages;
export const selectSexOptions = state => state.notices.sexOptions;
export const selectCategories = state => state.notices.categories;
export const selectSpecies = state => state.notices.species;
export const selectSearchQuery = state => state.notices.searchQuery;
export const selectFavorites = state => state.notices.favorites;
