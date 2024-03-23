'use client';

import {
  styled,
  List as MUIList,
  Container as MUIContainer,
  Typography,
} from '@mui/material';

export const Footer = styled('footer')(
  ({
    theme: {
      palette: {secondary},
      spacing,
    },
  }) => ({
    padding: spacing(5),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: secondary.main,
  }),
);

export const Container = styled(MUIContainer)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const List = styled(MUIList)({
  display: 'flex',
});

export const Text = styled(Typography)({
  color: '#FFF',
});
