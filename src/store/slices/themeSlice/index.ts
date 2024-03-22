import {createSlice} from '@reduxjs/toolkit';
import {THEME} from '@/types';

const initialState: {theme: THEME} = {
  theme: THEME.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => ({
      theme: state.theme === THEME.dark ? THEME.light : THEME.dark,
    }),
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
