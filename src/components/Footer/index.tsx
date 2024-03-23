import {IconButton, ListItem} from '@mui/material';
import {memo} from 'react';
import Logo from '@/components/Logo';
import {GitHub, LinkedIn, Telegram} from '@mui/icons-material';
import * as Styled from '@/components/Footer/styles';

function Footer() {
  return (
    <Styled.Footer>
      <Styled.Container>
        <Logo color="#FFF" />

        <Styled.Text>copyright &#169; 2024 | DWU</Styled.Text>

        <Styled.List>
          <ListItem>
            <IconButton>
              <Telegram color="info" />
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton>
              <GitHub color="info" />
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton>
              <LinkedIn color="info" />
            </IconButton>
          </ListItem>
        </Styled.List>
      </Styled.Container>
    </Styled.Footer>
  );
}

export default memo(Footer);
