import { configureStore } from '@reduxjs/toolkit'
import auth from './slice/authSlice'
export const store = configureStore({
  reducer: {
    auth,
  },
})