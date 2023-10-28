import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from './hamburgerSlices'
import linkClickedSlice from './linkDetectSlices'
export default configureStore({
  reducer: {
    navbarSlice,
    linkClickedSlice
  },
})