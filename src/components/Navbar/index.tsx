import {memo} from 'react';
import * as Styled from '@/components/Navbar/styles';
import Logo from '@/components/Logo';
import List from '@/components/Navbar/components/List';
import Actions from '@/components/Navbar/components/Actions';

function Navbar() {
  return (
    <Styled.Content>
      <Styled.Container>
        <Logo />
        <List />
        <Actions />
      </Styled.Container>
    </Styled.Content>
  );
}

export default memo(Navbar);
