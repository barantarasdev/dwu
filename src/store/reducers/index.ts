import {combineReducers} from '@reduxjs/toolkit';
import themeReducer from '@/store/slices/themeSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
