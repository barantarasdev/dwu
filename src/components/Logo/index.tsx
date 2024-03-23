import {memo} from 'react';
import {LogoIcon} from '@/components/Images';
import * as Styled from '@/components/Logo/styles';
import {PATH} from '@/types';

type Props = {
  color?: string;
};

function Logo({color}: Props) {
  return (
    <Styled.LogoButton href={PATH.HOME}>
      <LogoIcon />
      <Styled.Text variant="inherit" color={color}>
        DWU
      </Styled.Text>
    </Styled.LogoButton>
  );
}

export default memo(Logo);
