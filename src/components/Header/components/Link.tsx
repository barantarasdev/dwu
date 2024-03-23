'use client';

import {memo, useMemo} from 'react';
import * as Styled from '@/components/Header/styles';
import {PATH} from '@/types';
import {usePathname} from 'next/navigation';
import {Fade} from '@mui/material';
import {NAV_LINK_ACTIVE} from '@/constants/timeouts';

type Props = {
  title: string;
  href: PATH;
};

function Link({title, href}: Props) {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    return pathname === href;
  }, [pathname, href]);

  return (
    <Styled.NavLink href={href} isActive={isActive}>
      <Fade timeout={NAV_LINK_ACTIVE} in={isActive}>
        <Styled.NavLinkActive />
      </Fade>
      {title}
    </Styled.NavLink>
  );
}

export default memo(Link);
