import {useMemo} from 'react';
import {Theme, createTheme} from '@mui/material';
import {darkTheme, lightTheme} from '@/common/themes';
import {useAppSelector} from '@/hooks/useRedux';
import {THEME} from '@/types';

function useTheme() {
  const {theme: selectedTheme} = useAppSelector(state => state.theme);

  const theme = useMemo((): Theme => {
    switch (selectedTheme) {
      case THEME.light:
        return lightTheme;
      case THEME.dark:
        return darkTheme;
      default:
        return createTheme();
    }
  }, [selectedTheme]);

  return {theme};
}

export default useTheme;
