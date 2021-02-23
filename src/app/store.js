import { configureStore } from '@reduxjs/toolkit';
import addTaskSlice from '../components/AddButton/addTaskSlice';

export default configureStore({
  reducer: {
    addTask: addTaskSlice,
  },
});
