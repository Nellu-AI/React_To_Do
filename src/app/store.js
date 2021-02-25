import { configureStore } from '@reduxjs/toolkit';
import addTaskSlice from '../components/AddButton/addTaskSlice';
import modalSlice from '../components/Modal/modalSlice';

export default configureStore({
  reducer: {
    addTask: addTaskSlice,
    modal: modalSlice,
  },
});
