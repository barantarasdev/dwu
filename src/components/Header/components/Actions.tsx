import {Person, Search, Menu} from '@mui/icons-material';
import {IconButton, ListItem} from '@mui/material';
import {memo} from 'react';
import * as Styled from '@/components/Header/styles';

function Actions() {
  return (
    <Styled.ActionsList>
      <ListItem>
        <IconButton>
          <Person />
        </IconButton>
      </ListItem>

      <ListItem>
        <IconButton>
          <Search />
        </IconButton>
      </ListItem>

      <ListItem>
        <IconButton>
          <Menu />
        </IconButton>
      </ListItem>
    </Styled.ActionsList>
  );
}

export default memo(Actions);
