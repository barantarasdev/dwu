import {memo} from 'react';
import * as Styled from '@/components/Home/styles';
import {Typography} from '@mui/material';

function Breaking() {
  return (
    <Styled.BreakingSection>
      <Styled.BreakingButton>Breaking News</Styled.BreakingButton>

      <Typography typography="h2">
        Kanye West says hes running for president in 2020.
      </Typography>
    </Styled.BreakingSection>
  );
}

export default memo(Breaking);
