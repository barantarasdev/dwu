import {Button, Grid} from '@mui/material';
import {memo} from 'react';
import Card from '@/components/Home/components/Card';
import * as Styled from '@/components/Home/styles';

function Cards() {
  return (
    <Styled.CardsSection>
      <Grid container spacing={3} justifyContent="center">
        <Grid item sm={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Card />
        </Grid>
      </Grid>

      <Button variant="outlined">View More</Button>
    </Styled.CardsSection>
  );
}

export default memo(Cards);
