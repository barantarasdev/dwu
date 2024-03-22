'use client';

import {memo, useCallback} from 'react';
import {LogoIcon} from '@/components/Images';
import * as Styled from '@/components/Logo/styles';
import {useRouter} from 'next/navigation';

function Logo() {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Styled.Button onClick={onClick}>
      <LogoIcon />
      <Styled.Text>DWU</Styled.Text>
    </Styled.Button>
  );
}

export default memo(Logo);
