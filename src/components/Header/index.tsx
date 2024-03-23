import {memo} from 'react';
import * as Styled from '@/components/Header/styles';
import Logo from '@/components/Logo';
import List from '@/components/Header/components/List';
import Actions from '@/components/Header/components/Actions';

function Header() {
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

export default memo(Header);
