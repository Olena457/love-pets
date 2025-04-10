import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpenMobMenu: false };

const mobMenuSlice = createSlice({
  name: 'mobMenu',
  initialState,
  reducers: {
    openMobMenu: state => {
      state.isOpenMobMenu = true;
    },
    closeMobMenu: state => {
      state.isOpenMobMenu = false;
    },
  },
});
export const { openMobMenu, closeMobMenu } = mobMenuSlice.actions;
export default mobMenuSlice.reducer;
