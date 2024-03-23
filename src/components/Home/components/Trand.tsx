import {Bookmark, Favorite, Share} from '@mui/icons-material';
import {Box, IconButton, ListItem, Typography} from '@mui/material';
import Image from 'next/image';
import * as Styled from '@/components/Home/styles';
import {memo} from 'react';

function Trand() {
  return (
    <Styled.TrandSection>
      <Image
        priority
        height={400}
        width={650}
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        alt="Trand image"
      />

      <Box>
        <Styled.TrandActiosBlock>
          <Styled.TrandActionsTitle>Trending</Styled.TrandActionsTitle>

          <Styled.TrandActionsList>
            <ListItem>
              <IconButton>
                <Favorite fontSize="small" />
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton>
                <Share fontSize="small" />
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton>
                <Bookmark fontSize="small" />
              </IconButton>
            </ListItem>
          </Styled.TrandActionsList>
        </Styled.TrandActiosBlock>

        <Typography variant="h1">
          Cake meme reflects coronavirus absurdity in a world where nothing is
          what it seems
        </Typography>

        <Typography variant="subtitle1">
          Earlier this month, a viral video depicting hyper-realistic cakes as
          everyday items had folks on social media double-guessing every other
          post, and sometimes even their own realities, effectively launching
          the next meme : “Is this real or is this cake?”
        </Typography>

        <Styled.TextBlock>
          <Styled.TextHours>2 hours ago</Styled.TextHours>
          <Styled.TextAuthor>By Lucy Hiddleston | 4min read</Styled.TextAuthor>
        </Styled.TextBlock>
      </Box>
    </Styled.TrandSection>
  );
}

export default memo(Trand);
