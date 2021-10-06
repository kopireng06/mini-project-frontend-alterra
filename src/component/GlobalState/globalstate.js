import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice'

const globalState = configureStore({
  reducer: {
      theme:themeSlice
  },
});

export default globalState;
