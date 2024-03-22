import {memo} from 'react';
import {LINKS} from '@/constants/links';
import {ListItem} from '@mui/material';
import * as Styled from '@/components/Navbar/styles';
import Link from '@/components/Navbar/components/Link';

function List() {
  return (
    <Styled.NavList>
      {LINKS.map(({link, title}) => (
        <ListItem key={link}>
          <Link href={link} title={title} />
        </ListItem>
      ))}
    </Styled.NavList>
  );
}

export default memo(List);
