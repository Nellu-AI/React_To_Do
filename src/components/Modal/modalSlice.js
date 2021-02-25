import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModal: false,
  },
  reducers: {
    showModal: (state) => {
      state.isModal = true;
      console.log('hi');
    },
    closeModal: (state) => {
      state.isModal = false;
      console.log('bye');
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
