import {
  Box,
  Container,
  Divider,
  IconButton,
  ListItem,
  Typography,
} from '@mui/material';
import {memo} from 'react';
import * as Styled from '@/app/post/styles';
import {Bookmark, Favorite, Message, Share} from '@mui/icons-material';

function Post() {
  return (
    <section>
      <Container maxWidth="md">
        <Styled.Background />

        <Styled.Title variant="h1">
          John Lewis, civil rights giant, crosses infamous Selma bridge one
          final time
        </Styled.Title>

        <Styled.Img
          height={423}
          width={870}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          alt="Trand image"
        />

        <Styled.TextBlock>
          <Styled.TextHours>2 hours ago</Styled.TextHours>
          <Styled.TextAuthor>By Lucy Hiddleston | 4min read</Styled.TextAuthor>
        </Styled.TextBlock>

        <Typography variant="body1">
          Crowds watched solemnly as the body of Rep. John Lewis crossed the
          Edmund Pettus Bridge one final time, 55 years after the civil rights
          icon marched for peace and was met with brutality in Selma, Alabama.
          <br />
          <br />
          Body bearers from the U.S. armed forces placed the late Georgia
          congressman and civil rights icon onto a horse-drawn caisson Sunday at
          the Brown Chapel African Methodist Episcopal Church. From there, the
          public were allowed to line up to honor Lewis for about a half-mile to
          the foot of the bridge.
          <br />
          <br />
          Rep. Terri Sewell, D-Al., thanked Lewis’ family during a ceremony at
          the chapel for sharing the congressman with the public for so many
          years.
        </Typography>

        <Styled.ActionsBlock>
          <Styled.List>
            <ListItem>
              <IconButton>
                <Favorite />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <Message />
              </IconButton>
            </ListItem>
          </Styled.List>

          <Styled.List>
            <ListItem>
              <IconButton>
                <Share />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton>
                <Bookmark />
              </IconButton>
            </ListItem>
          </Styled.List>
        </Styled.ActionsBlock>

        <Divider />

        <Styled.Author>
          <Styled.AuthorAvatar>R</Styled.AuthorAvatar>

          <Box>
            <Styled.AuthorSubtitle>Author</Styled.AuthorSubtitle>

            <Styled.AuthorName>Caroline Casey</Styled.AuthorName>

            <Typography maxWidth={400} typography="body1">
              Caroline Casey is an award-winning social activist and founder of
              The Valuable 500, a global movement aimed at getting 500 companies
              to commit to disability inclusion.
            </Typography>
          </Box>
        </Styled.Author>
      </Container>
    </section>
  );
}

export default memo(Post);
