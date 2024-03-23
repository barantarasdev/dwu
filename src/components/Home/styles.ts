'use client';

import {
  Box,
  Button,
  List,
  Typography,
  CardMedia as MUICardMedia,
  CardActions as MUICardActions,
  styled,
} from '@mui/material';

export const TrandSection = styled('section')(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing(12),
  marginBottom: spacing(8),
}));

export const TrandActionsTitle = styled(Typography)(
  ({
    theme: {
      palette: {primary},
    },
  }) => ({
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 0.28,
    color: primary.main,
  }),
);

export const TrandActiosBlock = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: spacing(2),
}));

export const TrandActionsList = styled(List)({
  display: 'flex',
  alignItems: 'center',
});

export const TextBlock = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing(2),
}));

export const TextHours = styled(Typography)({
  fontSize: 13,
});

export const TextAuthor = styled(Typography)({
  fontSize: 13,
  opacity: 0.7,
});

export const BreakingSection = styled('section')(
  ({
    theme: {
      spacing,
      palette: {primary},
    },
  }) => ({
    padding: spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing(11),
    marginBottom: spacing(8),
    backgroundColor: primary.main,
  }),
);

export const BreakingButton = styled(Button)(
  ({
    theme: {
      spacing,
      palette: {primary},
    },
  }) => ({
    color: primary.main,
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: spacing(2),
    paddingTop: spacing(2),
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    backgroundColor: '#FFF',
    transitionDuration: '0.3',

    '&:hover': {
      backgroundColor: '#FFF',
      boxShadow: '0 0 11px rgba(255,255,255,.7)',
    },
  }),
);

export const CardMedia = styled(MUICardMedia)({
  height: 210,
  objectFit: 'cover',
});

export const CardActions = styled(MUICardActions)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CardContentDescription = styled(Typography)(
  ({theme: {mixins}}) => ({
    ...mixins.textEllipsis,
  }),
);

export const CardsSection = styled('section')(({theme: {spacing}}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(4),
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: spacing(8),
}));
