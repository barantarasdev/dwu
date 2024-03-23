'use client';

import {
  List as MUIList,
  styled,
  Container as MUIContainer,
  Box,
} from '@mui/material';
import Link from 'next/link';

export const Content = styled(Box)(({theme: {spacing}}) => ({
  backgroundColor: '#FFF',
  marginBottom: spacing(7),
}));

export const Container = styled(MUIContainer)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ActionsList = styled(MUIList)(({theme: {spacing}}) => ({
  display: 'flex',
  gap: spacing(2),
}));

export const NavList = styled(MUIList)(({theme: {spacing}}) => ({
  display: 'flex',
  gap: spacing(10),
}));

export const NavLink = styled(Link)<{isActive: boolean}>(
  ({
    theme: {
      palette: {text, primary},
    },
    isActive,
  }) => ({
    fontSize: 16,
    fontWeight: 600,
    color: isActive ? primary.main : text.primary,
    textDecoration: 'none',
    position: 'relative',
    transitionDuration: '0.3s',

    '&:hover': {
      color: primary.main,
    },
  }),
);

export const NavLinkActive = styled('div')(
  ({
    theme: {
      palette: {primary},
    },
  }) => ({
    width: 8,
    height: 8,
    backgroundColor: primary.main,
    borderRadius: 100,
    position: 'absolute',
    top: '50%',
    left: -13,
    transform: 'translateY(-50%)',
  }),
);
