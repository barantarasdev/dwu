'use client';

import {IconButton, Typography, styled} from '@mui/material';

export const Button = styled(IconButton)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Text = styled(Typography)(
  ({
    theme: {
      palette: {text},
    },
  }) => ({
    fontSize: 16,
    fontWeight: 900,
    color: text.primary,
  }),
);
