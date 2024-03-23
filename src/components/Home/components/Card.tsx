import {Bookmark, Favorite, Share} from '@mui/icons-material';
import {
  CardContent,
  Typography,
  IconButton,
  Divider,
  Card as MUICard,
  CardActionArea,
} from '@mui/material';
import {memo} from 'react';
import * as Styled from '@/components/Home/styles';

function Card() {
  return (
    <MUICard>
      <CardActionArea>
        <Styled.CardMedia
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography variant="h3">
            John Lewis to make final journey across Edmund Pettus Bridge in
            procession
          </Typography>
          <Styled.CardContentDescription variant="subtitle1">
            The body of the late US Rep. John Lewis on Sunday will make the
            final journey across the famous bridge in Selma, Alabama, where he
            helped lead a march for voting rights in 1965.
          </Styled.CardContentDescription>

          <Styled.TextBlock>
            <Styled.TextHours>2 hours ago</Styled.TextHours>
            <Styled.TextAuthor>
              By Lucy Hiddleston | 4min read
            </Styled.TextAuthor>
          </Styled.TextBlock>
        </CardContent>
      </CardActionArea>

      <Divider />

      <Styled.CardActions>
        <IconButton>
          <Favorite fontSize="small" />
        </IconButton>
        <IconButton>
          <Share fontSize="small" />
        </IconButton>
        <IconButton>
          <Bookmark fontSize="small" />
        </IconButton>
      </Styled.CardActions>
    </MUICard>
  );
}

export default memo(Card);
