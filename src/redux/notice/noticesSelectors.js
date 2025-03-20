export const selectNotices = state => state.notices.items;
export const selectSelectedNotices = state => state.notices.selectedNotice;
export const selectCftegories = state => state.notices.categories;
export const selectSexOptions = state => state.notices.sexOptions;
export const selectFavorites = state => state.notices.favorites;
export const selectSpecies = state => state.notices.species;
export const selectTotalPage = state => state.notices.totalPage;
export const selectSearchQuery = state => state.notices.searchQuery;
export const selectIsLoading = state => state.notices.isloading;
export const selectError = state => state.notices.error;

export const selectById = (items, id) => items.find(item => item.id === id);
export const selectNoticeById = (state, id) =>
  selectById(state.notices.items, id);

// export const selectFavoriteNotices = createSelector(
//   [state => state.notices.items, state => state.notices.favorites],
//   (items, favorites) => favorites.map(id => selectById(items, id))
// );
