// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isOpenModal: false,
//   isApproveModalOpen: false,
//   isModalEditUserOpen: false,
//   modalData: null,
// };

// const modalSlice = createSlice({
//   name: 'modal',
//   initialState,
//   reducers: {
//     openModal: (state, action) => {
//       state.isOpenModal = true;
//       state.modalData = action.payload;
//     },
//     openApproveModal: state => {
//       state.isOpenModal = true;
//       state.isApproveModalOpen = true;
//     },
//     openModalEditUser: state => {
//       state.isOpenModal = true;
//       state.isModalEditUserOpen = true;
//     },
//     closeModal: state => {
//       state.isOpenModal = false;
//       state.isApproveModalOpen = false;
//       state.isModalEditUserOpen = false;
//       state.modalData = null;
//     },
//   },
// });

// export const { openModal, closeModal, openApproveModal, openModalEditUser } =
//   modalSlice.actions;
// export default modalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenModal: false,
  isApproveModalOpen: false,
  isModalEditUserOpen: false,
  isAttentionModalOpen: false,
  modalData: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpenModal = true;
      state.modalData = action.payload;
      // Скидаємо інші
      state.isApproveModalOpen = false;
      state.isModalEditUserOpen = false;
      state.isAttentionModalOpen = false;
    },
    openApproveModal: state => {
      state.isOpenModal = true;
      state.isApproveModalOpen = true;
      // Скидаємо інші
      state.modalData = null;
      state.isModalEditUserOpen = false;
      state.isAttentionModalOpen = false;
    },
    openModalEditUser: state => {
      state.isOpenModal = true;
      state.isModalEditUserOpen = true;
      // Скидаємо інші
      state.modalData = null;
      state.isApproveModalOpen = false;
      state.isAttentionModalOpen = false;
    },
    openAttentionModal: state => {
      state.isOpenModal = true;
      state.isAttentionModalOpen = true;
      // Скидаємо інші
      state.modalData = null;
      state.isApproveModalOpen = false;
      state.isModalEditUserOpen = false;
    },

    closeModal: state => {
      state.isOpenModal = false;
      state.isApproveModalOpen = false;
      state.isModalEditUserOpen = false;
      state.isAttentionModalOpen = false;
      state.modalData = null;
      state.isMobMenuApproveModalOpen = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  openApproveModal,
  openModalEditUser,
  openAttentionModal,
} = modalSlice.actions;

export default modalSlice.reducer;
