'use client';

import {Box, Typography, styled, List as MUIList, Avatar} from '@mui/material';
import Image from 'next/image';

export const TextBlock = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing(2),
  marginBottom: spacing(2.4),
}));

export const TextHours = styled(Typography)({
  fontSize: 13,
});

export const TextAuthor = styled(Typography)({
  fontSize: 13,
  opacity: 0.7,
});

export const Background = styled(Box)({
  width: '100%',
  height: 410,
  backgroundColor: '#0E1E32',
  position: 'absolute',
  right: 0,
  left: 0,
  top: 0,
  zIndex: -1,
});

export const Title = styled(Typography)(({theme: {spacing}}) => ({
  maxWidth: 800,
  color: '#FFF',
  fontSize: 42,
  textAlign: 'center',
  margin: '0 auto',
  marginBottom: spacing(8),
}));

export const Img = styled(Image)(({theme: {spacing}}) => ({
  display: 'flex',
  margin: '0 auto',
  marginBottom: spacing(8),
  objectFit: 'cover',
}));

export const ActionsBlock = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: spacing(5),
}));

export const List = styled(MUIList)({
  display: 'flex',
});

export const Author = styled(Box)(({theme: {spacing}}) => ({
  marginTop: spacing(6),
  marginBottom: spacing(10),
  display: 'flex',
  gap: spacing(4),
}));

export const AuthorSubtitle = styled(Typography)(({theme: {spacing}}) => ({
  fontSize: 15,
  fontWeight: 700,
  opacity: 0.7,
  marginBottom: spacing(1),
}));

export const AuthorName = styled(Typography)(({theme: {spacing}}) => ({
  fontSize: 20,
  fontWeight: 700,
  marginBottom: spacing(1.5),
}));

export const AuthorAvatar = styled(Avatar)({
  width: 80,
  height: 80,
});
