import { configureStore } from '@reduxjs/toolkit'
import refreshSlice from './rerenderSlice';

export const store = configureStore({
  reducer: {
    refresh: refreshSlice,
  },
})