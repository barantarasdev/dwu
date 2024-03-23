'use client';

import {Typography, styled} from '@mui/material';
import Link from 'next/link';

export const LogoButton = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'inherit',
  textDecoration: 'none',
});

export const Text = styled(Typography)({
  fontSize: 16,
  fontWeight: 900,
});
